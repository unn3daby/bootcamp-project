export type ContactMethod = 'telegram' | 'whatsapp' | 'email';

export interface FormPayload {
  name?: string
  method: ContactMethod
  contact: string
}

export interface FormResponse {
  message: string
  data: FormPayload
}
