export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/google-fonts'],
  googleFonts: {
    families: {
      'Roboto': true,
      'Roboto Condensed': true,
      'Inter': true
    }
  }
})