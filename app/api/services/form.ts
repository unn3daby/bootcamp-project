import type { FormPayload, FormResponse } from '@/api/types';
import { apiClient } from '@/api/client';

export function submitForm(payload: FormPayload) {
  return apiClient<FormResponse>('/form', { method: 'POST', body: payload });
}
