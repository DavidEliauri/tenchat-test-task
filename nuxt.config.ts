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
    modules: ['@pinia/nuxt'],
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
    css: ['@/assets/styles/main.css'],
});
