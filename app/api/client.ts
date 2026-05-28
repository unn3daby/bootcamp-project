import type { ApiErrorCode } from './errors';
import { useLocale } from '~/composables/locale';
import { ApiError } from './errors';

interface ServerErrorPayload {
  code?: ApiErrorCode
  message?: string
  details?: unknown
}

export const apiClient = $fetch.create({
  baseURL: '/api',
  onRequest({ options }) {
    const locale = useLocale();
    options.query = { lang: locale.value, ...options.query };
  },
  onResponseError({ response }) {
    const payload = (response._data as { data?: ServerErrorPayload } | undefined)?.data;
    throw new ApiError({
      status: response.status,
      code: payload?.code ?? 'unknown',
      message: payload?.message ?? 'Request failed',
      details: payload?.details,
    });
  },
  onRequestError({ error }) {
    throw new ApiError({
      status: 0,
      code: 'network',
      message: error?.message ?? 'Network error',
    });
  },
});
