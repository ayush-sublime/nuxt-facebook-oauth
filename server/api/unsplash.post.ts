export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig();

  //use body
  const body = await readBody(event);

  const data = await $fetch(
    `${config.public.baseURL}/photos/search?query=${body.keyword}&client_id=${config.unsplash.APIKey}&count=1`,
    {
      method: "GET",
    }
  );

  return data;
});
