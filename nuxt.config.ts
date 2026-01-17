// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  
  modules: [
    '@nuxtjs/tailwindcss',
    'shadcn-nuxt',
    '@nuxtjs/google-fonts',
    '@pinia/nuxt',
    '@nuxtjs/i18n',
    '@nuxt/image'
  ],

  // Tailwind CSS configuration - disable auto darkMode source
  tailwindcss: {
    exposeConfig: false,
    injectPosition: 'first',
    config: {
      darkMode: 'selector' // Use selector-based dark mode
    }
  },

  // shadcn-vue configuration
  shadcn: {
    prefix: '',
    componentDir: '@/components/ui'
  },

  // Google Fonts - Bangla typography
  googleFonts: {
    families: {
      'Noto Sans Bengali': [400, 500, 600, 700],
      'Tiro Bangla': [400],
      'Inter': [400, 500, 600, 700] // Fallback for English
    },
    display: 'swap',
    preload: true
  },

  // i18n - Bangla/English
  i18n: {
    locales: [
      { code: 'bn', name: 'বাংলা', file: 'bn.json' },
      { code: 'en', name: 'English', file: 'en.json' }
    ],
    defaultLocale: 'bn',
    langDir: 'locales/',
    strategy: 'prefix_except_default'
  },

  // Image optimization
  image: {
    quality: 80,
    format: ['webp', 'avif']
  },

  // App configuration
  app: {
    head: {
      title: 'EventPlus - অনুষ্ঠান আয়োজক',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'বাংলাদেশের প্রিমিয়াম ইভেন্ট অর্গানাইজার - পূজা, সাংস্কৃতিক অনুষ্ঠান এবং সামাজিক কার্যক্রম' }
      ],
      htmlAttrs: {
        lang: 'bn',
        class: 'dark' // Default dark mode for Cylon theme
      }
    }
  }
})