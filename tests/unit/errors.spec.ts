import { describe, it, expect } from 'vitest'
import { ApiError, isApiError, toApiError } from '@/api/errors';

describe('ApiError', () => {
  it('сохраняет все поля и наследуется от Error', () => {
    const err = new ApiError({
      status: 403,
      code: 'forbidden',
      message: 'No access',
      details: { foo: 'bar' },
    })

    expect(err).toBeInstanceOf(Error)
    expect(err).toBeInstanceOf(ApiError)
    expect(err.name).toBe('ApiError')
    expect(err.status).toBe(403)
    expect(err.code).toBe('forbidden')
    expect(err.message).toBe('No access')
    expect(err.details).toEqual({ foo: 'bar' })
  })

  it('details может отсутствовать', () => {
    const err = new ApiError({ status: 500, code: 'server', message: 'oops' })
    expect(err.details).toBeUndefined()
  })
})

describe('isApiError', () => {
  it('true для ApiError', () => {
    expect(isApiError(new ApiError({ status: 0, code: 'unknown', message: 'x' }))).toBe(true)
  })

  it('false для обычного Error', () => {
    expect(isApiError(new Error('plain'))).toBe(false)
  })

  it('false для не-объектов', () => {
    expect(isApiError(null)).toBe(false)
    expect(isApiError('string')).toBe(false)
    expect(isApiError(undefined)).toBe(false)
  })
})

describe('toApiError', () => {
  it('возвращает ApiError без изменений', () => {
    const err = new ApiError({ status: 404, code: 'not_found', message: 'gone' })
    expect(toApiError(err)).toBe(err)
  })

  it('оборачивает обычный Error в ApiError code=unknown', () => {
    const wrapped = toApiError(new Error('boom'))
    expect(wrapped).toBeInstanceOf(ApiError)
    expect(wrapped.code).toBe('unknown')
    expect(wrapped.message).toBe('boom')
    expect(wrapped.status).toBe(0)
  })

  it('оборачивает примитив в ApiError с дефолтным сообщением', () => {
    const wrapped = toApiError('string error')
    expect(wrapped.code).toBe('unknown')
    expect(wrapped.message).toBe('Unknown error')
  })
})
