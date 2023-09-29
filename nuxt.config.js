export default defineNuxtConfig({
  css: ["@/assets/css/roboto.css", "@/assets/css/global.css"],
  image: {
    storyblok: {
      baseURL: "https://a.storyblok.com",
    },
    domains: ["a.storyblok.com"],
    format: ["avif"],
  },
  modules: [
    [
      "@storyblok/nuxt",
      {
        accessToken: process.env.SB_ACCESS_TOKEN,
        apiOptions: {
          region: "", // Set 'US" if your space is created in US region (EU default)
        },
      },
    ],
    "@nuxtjs/tailwindcss",
    "@nuxt/image",
  ],
});
