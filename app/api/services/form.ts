import { apiClient } from '../client'
import type { FormPayload, FormResponse } from '../types/form'

export const submitForm = (payload: FormPayload) =>
  apiClient<FormResponse>('/form', { method: 'POST', body: payload })
