import type { FormPayload, FormResponse } from '../types';
import { apiClient } from '../client';

export function submitForm(payload: FormPayload) {
  return apiClient<FormResponse>('/form', { method: 'POST', body: payload });
}
