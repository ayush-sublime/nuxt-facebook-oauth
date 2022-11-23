import data from "@/static/posts.json";

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig();

  const Posts = await Promise.all(
    data.posts.map(async (post): Promise<any> => {
      const data: any = await $fetch(
        `${config.public.baseURL}/search/photos?per_page=1&page=1&query=${post.keyword}&client_id=${config.unsplash.APIKey}`,
        {
          method: "GET",
        }
      );

      return { ...post, image: data.results[0].urls.small_s3 };
    })
  );

  return {
    statusCode: 200,
    data: Posts,
  };
});
