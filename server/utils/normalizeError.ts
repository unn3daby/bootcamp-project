export type ApiErrorCode =
  | 'forbidden'
  | 'not_found'
  | 'validation'
  | 'server'
  | 'unknown'

export interface ApiErrorPayload {
  code: ApiErrorCode
  message: string
  details?: unknown
}

interface ZodIssue {
  code: string
  path: (string | number)[]
  message: string
}

function isZodIssue(value: unknown): value is ZodIssue {
  if (!value || typeof value !== 'object') return false
  const v = value as Record<string, unknown>
  if (typeof v['code'] !== 'string') return false
  if (typeof v['message'] !== 'string') return false
  if (!Array.isArray(v['path'])) return false
  return v['path'].every(p => typeof p === 'string' || typeof p === 'number')
}

function safeParseJson(text: string): unknown {
  try {
    return JSON.parse(text)
  } catch {
    return undefined
  }
}

function extractMessage(body: unknown): string {
  if (body && typeof body === 'object') {
    const candidate = (body as Record<string, unknown>)['message']
    if (typeof candidate === 'string') return candidate
  }
  return 'Unknown error'
}

export function normalizeError(status: number, body: unknown): ApiErrorPayload {
  const message = extractMessage(body)

  if (status >= 500) {
    const parsed = safeParseJson(message)
    const isZodResponse = Array.isArray(parsed) && parsed.length > 0 && parsed.every(isZodIssue)

    if (isZodResponse) {
      return { code: 'validation', message: 'Validation failed', details: parsed }
    }

    return { code: 'server', message }
  }

  if (status === 401 || status === 403) return { code: 'forbidden', message }
  if (status === 404) return { code: 'not_found', message }

  return { code: 'unknown', message }
}
