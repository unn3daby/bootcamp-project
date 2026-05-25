import { describe, it, expect, vi, beforeEach } from 'vitest'
import type { Benefits, Multiply, Tasks } from '@/api/types/sections'
import type { FormPayload, FormResponse } from '@/api/types/form'

interface MockEvent {
  query?: Record<string, string | undefined>
  body?: unknown
}

interface FetchOptions {
  method?: string
  baseURL?: string
  headers?: Record<string, string>
  body?: unknown
  [key: string]: unknown
}

type Handler<T> = (event: MockEvent) => Promise<T>

const fetchMock = vi.fn<(path: string, opts?: FetchOptions) => unknown>()

vi.stubGlobal('$fetch', Object.assign(fetchMock, {
  create: () => fetchMock,
}))

vi.stubGlobal('useRuntimeConfig', () => ({
  apiBaseUrl: 'https://external.test',
  apiKey: 'secret-key',
  public: { defaultLocale: 'en' },
}))

interface CreateErrorInit {
  statusCode: number
  statusMessage?: string
  data?: unknown
}

vi.stubGlobal('createError', (init: CreateErrorInit) => {
  const err = new Error(init.statusMessage ?? 'error') as Error & {
    statusCode: number
    data: unknown
  }
  err.statusCode = init.statusCode
  err.data = init.data
  return err
})

vi.stubGlobal('defineEventHandler', <T,>(h: Handler<T>) => h)
vi.stubGlobal('getQuery', (event: MockEvent) => event.query ?? {})
vi.stubGlobal('readBody', async (event: MockEvent) => event.body)

beforeEach(() => {
  fetchMock.mockReset()
})

function getCall(index: number): [path: string, opts?: FetchOptions] {
  const call = fetchMock.mock.calls[index]
  if (!call) throw new Error(`fetchMock call #${index} not found`)
  return call
}

describe('GET /api/sections/benefits', () => {
  it('проксирует на /{lang}/benefits с заголовком x-api-key', async () => {
    fetchMock.mockResolvedValueOnce({
      title: 't',
      description: 'd',
      benefits: ['a'],
    } satisfies Benefits)

    const handler = (await import('../../server/api/sections/benefits.get'))
      .default as Handler<Benefits>
    const result = await handler({ query: { lang: 'ru' } })

    expect(fetchMock).toHaveBeenCalledTimes(1)
    const [path, opts] = getCall(0)
    expect(path).toBe('/ru/benefits')
    expect(opts?.baseURL).toBe('https://external.test')
    expect(opts?.headers?.['x-api-key']).toBe('secret-key')
    expect(result).toEqual({ title: 't', description: 'd', benefits: ['a'] })
  })

  it('без query.lang использует defaultLocale (en)', async () => {
    fetchMock.mockResolvedValueOnce({
      title: '',
      description: '',
      benefits: [],
    } satisfies Benefits)

    const handler = (await import('../../server/api/sections/benefits.get'))
      .default as Handler<Benefits>
    await handler({ query: {} })

    expect(getCall(0)[0]).toBe('/en/benefits')
  })
})

describe('GET /api/sections/multiply', () => {
  it('проксирует на /{lang}/multiply', async () => {
    fetchMock.mockResolvedValueOnce([
      { title: 'X', steps: { step_1: '1', step_2: '2' } },
    ] satisfies Multiply)

    const handler = (await import('../../server/api/sections/multiply.get'))
      .default as Handler<Multiply>
    const result = await handler({ query: { lang: 'ru' } })

    expect(getCall(0)[0]).toBe('/ru/multiply')
    expect(Array.isArray(result)).toBe(true)
  })

  it('без query.lang → /en/multiply', async () => {
    fetchMock.mockResolvedValueOnce([] satisfies Multiply)

    const handler = (await import('../../server/api/sections/multiply.get'))
      .default as Handler<Multiply>
    await handler({ query: {} })

    expect(getCall(0)[0]).toBe('/en/multiply')
  })
})

describe('GET /api/sections/tasks', () => {
  it('проксирует на /{lang}/tasks', async () => {
    fetchMock.mockResolvedValueOnce({
      description: 'd',
      tiles: [],
    } satisfies Tasks)

    const handler = (await import('../../server/api/sections/tasks.get'))
      .default as Handler<Tasks>
    const result = await handler({ query: { lang: 'es' } })

    expect(getCall(0)[0]).toBe('/es/tasks')
    expect(result).toEqual({ description: 'd', tiles: [] })
  })

  it('без query.lang → /en/tasks', async () => {
    fetchMock.mockResolvedValueOnce({
      description: '',
      tiles: [],
    } satisfies Tasks)

    const handler = (await import('../../server/api/sections/tasks.get'))
      .default as Handler<Tasks>
    await handler({ query: {} })

    expect(getCall(0)[0]).toBe('/en/tasks')
  })
})

describe('POST /api/form', () => {
  it('валидирует body и проксирует на /form (без lang)', async () => {
    const payload: FormPayload = {
      name: 'John',
      method: 'telegram',
      contact: '@john',
    }

    fetchMock.mockResolvedValueOnce({
      message: 'Form submitted successfully (en)',
      data: payload,
    } satisfies FormResponse)

    const handler = (await import('../../server/api/form.post'))
      .default as Handler<FormResponse>
    const result = await handler({ body: payload })

    const [path, opts] = getCall(0)
    expect(path).toBe('/form')
    expect(opts?.method).toBe('POST')
    expect(opts?.body).toEqual(payload)
    expect(result.message).toContain('Form submitted')
  })
})
