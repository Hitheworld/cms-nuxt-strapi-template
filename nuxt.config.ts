// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        "@nuxt/ui",
        "@nuxt/eslint",
        "@nuxt/fonts",
        "@nuxt/icon",
        "@nuxt/image",
        "@nuxt/scripts",
        "@nuxtjs/strapi",
    ],
    strapi: {
        version: "v5",
        prefix: `/api`,
        url: process.env.STRAPI_URL || "http://localhost:1337",
    },
    // target: "static",
    compatibilityDate: "2025-05-15",
    devtools: { enabled: true },
    future: {
        compatibilityVersion: 4,
    },
    css: ["~/assets/css/main.css"],
    components: [
        {
            path: "~/components",
            pathPrefix: false,
        },
    ],
});