type ContactMethod = 'telegram' | 'whatsapp' | 'email';

interface FormBody {
  name?: string
  method: ContactMethod
  contact: string
}

function isValidForm(b: unknown): b is FormBody {
  // TODO: Валидация формы
  return true;
}

export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  if (!isValidForm(body)) {
    throw createError({
      statusCode: 400,
      data: { code: 'validation', message: 'Invalid form payload' },
    });
  }

  return externalApi('/form', { method: 'POST', body });
});
