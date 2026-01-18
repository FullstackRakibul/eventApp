// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  
  modules: [
    '@nuxtjs/tailwindcss',
    'shadcn-nuxt',
    '@nuxtjs/google-fonts',
    '@pinia/nuxt',
    '@nuxt/image',
    '@formkit/auto-animate/nuxt',
    '@nuxtjs/i18n'
  ],

  i18n: {
    locales: [
      { code: 'bn', language: 'bn-BD', name: 'বাংলা', file: 'bn.json' },
      { code: 'en', language: 'en-US', name: 'English', file: 'en.json' }
    ],
    defaultLocale: 'bn',
    langDir: 'locales/',
    strategy: 'prefix_except_default'
  },

  // Tailwind CSS configuration
  tailwindcss: {
    viewer: true,
    exposeConfig: false,
    config: {
      content: [
        "./app/**/*.{vue,js,ts}",
        "./components/**/*.{vue,js,ts}",
        "./layouts/**/*.vue",
        "./pages/**/*.vue",
        "./plugins/**/*.{js,ts}",
        "./app.vue",
        "./error.vue",
      ],
      theme: {
        extend: {
          colors: {
            border: "hsl(var(--border))",
            input: "hsl(var(--input))",
            ring: "hsl(var(--ring))",
            background: "hsl(var(--background))",
            foreground: "hsl(var(--foreground))",
            primary: {
              DEFAULT: "hsl(var(--primary))",
              foreground: "hsl(var(--primary-foreground))",
            },
            secondary: {
              DEFAULT: "hsl(var(--secondary))",
              foreground: "hsl(var(--secondary-foreground))",
            },
            destructive: {
              DEFAULT: "hsl(var(--destructive))",
              foreground: "hsl(var(--destructive-foreground))",
            },
            muted: {
              DEFAULT: "hsl(var(--muted))",
              foreground: "hsl(var(--muted-foreground))",
            },
            accent: {
              DEFAULT: "hsl(var(--accent))",
              foreground: "hsl(var(--accent-foreground))",
            },
            popover: {
              DEFAULT: "hsl(var(--popover))",
              foreground: "hsl(var(--popover-foreground))",
            },
            card: {
              DEFAULT: "hsl(var(--card))",
              foreground: "hsl(var(--card-foreground))",
            },
            // Cylon Heritage Custom Colors
            'cylon-red': '#E11D48',
            'gold': '#D4AF37',
            'metallic': '#94A3B8',
            'surface': '#1A1A1A',
            'deep-black': '#0A0A0A',
          },
          borderRadius: {
            lg: "var(--radius)",
            md: "calc(var(--radius) - 2px)",
            sm: "calc(var(--radius) - 4px)",
          },
          fontFamily: {
            bangla: ['Tiro Bangla', 'Noto Sans Bengali', 'serif'],
            'bangla-body': ['Noto Sans Bengali', 'sans-serif'],
            sans: ['Inter', 'Noto Sans Bengali', 'system-ui', 'sans-serif'],
          },
        },
      },
     
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
        class: 'dark'
      }
    }
  }
})