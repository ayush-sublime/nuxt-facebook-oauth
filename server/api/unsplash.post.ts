export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig();

  //use body
  const body = await readBody(event);

  const data: any = await $fetch(
    `${config.public.baseURL}/search/photos?per_page=1&page=1&query=${body.keyword}&client_id=${config.unsplash.APIKey}`,
    {
      method: "GET",
    }
  );
  return data.results[0].urls.small_s3;
});
