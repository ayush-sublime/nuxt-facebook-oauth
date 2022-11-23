// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    unsplash: {
      APIKey: process.env.UNSPLASH_API_KEY,
      SecretKey: process.env.UNSPLASH_SECRET_KEY,
    },
    public: {
      baseURL: "https://api.unsplash.com",
    },
  },
  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/supabase"],
  css: ["@/assets/css/main.css"],
  app: {
    head: {
      charset: "utf-8",
      title: "NuxtBook",
      viewport: "width=500, initial-scale=1",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          hid: "description",
          name: "description",
          content: "NuxtBook - A tool for your social media posts",
        },
      ],
      link: [
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css?family=Poppins:100,100italic,200,200italic,300,300italic,regular,italic,500,500italic,600,600italic,700,700italic,800,800italic,900,900italic",
        },
        {
          rel: "stylesheet",
          href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css",
          integrity:
            "sha512-MV7K8+y+gLIBoVD59lQIYicR65iaqukzvf/nwasF0nqhPay5w/9lJmVM2hMDcnK1OnMGCdVK+iQrJ7lzPJQd1w==",
          crossorigin: "anonymous",
          referrerpolicy: "no-referrer",
        },
        // {
        //   rel: "stylesheet",
        //   href: "https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css",
        //   integrity:
        //     "sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC",
        //   crossorigin: "anonymous",
        //   referrerpolicy: "no-referrer",
        // },
      ],
      // script: [
      //   {
      //     src: "https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js",
      //     integrity:
      //       "sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM",
      //     crossorigin: "anonymous",
      //     referrerpolicy: "no-referrer",
      //   },
      // ],
    },
  },
});
