import { describe, it, expect } from 'vitest'
import { normalizeError } from '../../server/utils/normalizeError'

describe('normalizeError', () => {
  it('403 → forbidden, сохраняет message', () => {
    const result = normalizeError(403, { message: 'Forbidden: Invalid or missing API Key' })
    expect(result).toEqual({
      code: 'forbidden',
      message: 'Forbidden: Invalid or missing API Key',
    })
  })

  it('401 → forbidden, сохраняет message', () => {
    const result = normalizeError(401, { message: 'Unauthorized' })
    expect(result).toEqual({ code: 'forbidden', message: 'Unauthorized' })
  })

  it('404 → not_found', () => {
    const result = normalizeError(404, { message: 'Not Found' })
    expect(result.code).toBe('not_found')
    expect(result.message).toBe('Not Found')
  })

  it('500 с обычным message → server', () => {
    const result = normalizeError(500, { message: 'Method POST not allowed on /benefits' })
    expect(result.code).toBe('server')
    expect(result.message).toBe('Method POST not allowed on /benefits')
    expect(result.details).toBeUndefined()
  })

  it('500 с JSON-строкой zod-issues в message → validation + details', () => {
    const zodIssues = [
      {
        expected: 'string',
        code: 'invalid_type',
        path: ['contact'],
        message: 'Invalid input: expected string, received number',
      },
    ]
    const result = normalizeError(500, { message: JSON.stringify(zodIssues) })

    expect(result.code).toBe('validation')
    expect(result.message).toBe('Validation failed')
    expect(result.details).toEqual(zodIssues)
  })

  it('500 с невалидным JSON в message → server (graceful)', () => {
    const result = normalizeError(500, { message: '[not really json' })
    expect(result.code).toBe('server')
    expect(result.message).toBe('[not really json')
  })

  it('500 с пустым body → server + дефолтный message', () => {
    const result = normalizeError(500, undefined)
    expect(result.code).toBe('server')
    expect(result.message).toBe('Unknown error')
  })

  it('500 с null body → server + дефолтный message', () => {
    const result = normalizeError(500, null)
    expect(result.code).toBe('server')
    expect(result.message).toBe('Unknown error')
  })

  it('500 с примитивом вместо объекта → server + дефолтный message', () => {
    expect(normalizeError(500, 'raw error string').message).toBe('Unknown error')
    expect(normalizeError(500, 42).code).toBe('server')
  })

  it('500 с массивом не-Zod объектов в message → server (не путать с validation)', () => {
    const fakeIssues = [{ code: 'x', path: [{ nested: 'object' }], message: 'm' }]
    const result = normalizeError(500, { message: JSON.stringify(fakeIssues) })
    expect(result.code).toBe('server')
    expect(result.details).toBeUndefined()
  })

  it('400 → unknown', () => {
    const result = normalizeError(400, { message: 'Bad Request' })
    expect(result.code).toBe('unknown')
    expect(result.message).toBe('Bad Request')
  })
})
