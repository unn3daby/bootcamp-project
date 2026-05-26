export default defineEventHandler(async (event) => {
  const lang = (getQuery(event).lang)
    ?? useRuntimeConfig().public.defaultLocale;
  return externalApi(`/${lang}/multiply`);
});
