// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: true },
    srcDir: './src/',
    components: [
        {
            path: '~/components',
            pathPrefix: false,
        },
    ],
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
    css: ['@/assets/styles/main.css'],
});
