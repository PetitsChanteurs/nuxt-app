// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  devServer: {
    port: process.env.PORT || 3000, // Définit le port Scalingo
    host: '0.0.0.0', // Écoute sur toutes les interfaces réseau
  },
  content: {
    preview: {
      dev: true,
      api: 'https://api.nuxt.studio'
    }
  },
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
  modules: [
    '@nuxt/content',
    '@nuxt/fonts',
    '@nuxt/image'
  ]
})
