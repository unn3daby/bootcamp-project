export type ApiErrorCode =
  | 'forbidden'
  | 'not_found'
  | 'validation'
  | 'server'
  | 'network'
  | 'unknown'

export interface ApiErrorInit {
  status: number
  code: ApiErrorCode
  message: string
  details?: unknown
}

export class ApiError extends Error {
  readonly status: number
  readonly code: ApiErrorCode
  readonly details?: unknown

  constructor(init: ApiErrorInit) {
    super(init.message)
    this.name = 'ApiError'
    this.status = init.status
    this.code = init.code
    this.details = init.details
  }
}

export function isApiError(e: unknown): e is ApiError {
  return e instanceof ApiError
}

export function toApiError(e: unknown): ApiError {
  if (isApiError(e)) return e
  if (e instanceof Error) {
    return new ApiError({ status: 0, code: 'unknown', message: e.message })
  }
  return new ApiError({ status: 0, code: 'unknown', message: 'Unknown error' })
}
