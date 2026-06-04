import { normalizeError } from './normalizeError';

export function externalApi<T = unknown>(path: string, opts: Parameters<typeof $fetch>[1] = {}): Promise<T> {
  const config = useRuntimeConfig();

  return $fetch<T>(path, {
    baseURL: config.apiBaseUrl,
    timeout: 45_000,
    retry: 1,
    retryDelay: 500,
    ...opts,
    headers: {
      'x-api-key': config.apiKey,
      ...(opts.headers ?? {}),
    },
    onResponseError({ response }) {
      throw createError({
        statusCode: response.status,
        data: normalizeError(response.status, response._data),
      });
    },
  });
}
