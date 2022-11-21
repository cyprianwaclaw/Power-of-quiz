// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({


    transpile: ['gsap'],
    modules: ['@nuxtjs/tailwindcss', '@nuxtjs/google-fonts', '@pinia/nuxt', 'nuxt-icon',],
    target: 'static',
    ssr: false,
    css: ['@/assets/css/tailwind.css', '@/assets/css/style.scss'],
    googleFonts: {
        download: true,
        families: {
          'Poppins': true,
          'Manrope': {
            wght: [200,300,400,500,600,700],
          },
          'Open Sans':{
            wght: [200,300,400,500,600,700],
          },
        },
        subsets: ['latin'],
        display: 'swap',
        prefetch: false,
        preconnect: false,
        preload: false,
        base64: false,
        },

        sourcemap: {
          server: false,
          client: false,
        },

        experimental: { treeshakeClientOnly: true },

})
