<script setup lang="ts">
import { Menu, X, Globe, Moon, Sun } from 'lucide-vue-next'

const { locale, setLocale } = useI18n()
const { t } = useI18n()

const isMenuOpen = ref(false)
const isDark = ref(true) // Default to dark for Cylon theme

const navLinks = computed(() => [
  { path: '/', label: t('common.home') },
  { path: '/about', label: t('common.about') },
  { path: '/history', label: t('common.history') },
  { path: '/activities', label: t('common.activities') },
  { path: '/gallery', label: t('common.gallery') },
  { path: '/committee', label: t('common.committee') },
  { path: '/donation', label: t('common.donation') },
  { path: '/contact', label: t('common.contact') }
])

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const toggleTheme = () => {
  isDark.value = !isDark.value
  document.documentElement.classList.toggle('dark', isDark.value)
}

const toggleLocale = () => {
  const newLocale = locale.value === 'bn' ? 'en' : 'bn'
  setLocale(newLocale)
}

// Ensure dark mode on mount
onMounted(() => {
  document.documentElement.classList.add('dark')
})
</script>

<template>
  <header class="fixed top-0 left-0 right-0 z-50 glass-dark">
    <nav class="container mx-auto px-4 lg:px-8">
      <div class="flex items-center justify-between h-16 lg:h-20">
        <!-- Logo -->
        <NuxtLink to="/" class="flex items-center gap-3 group">
          <div
            class="w-10 h-10 rounded-lg bg-cylon-red/10 border border-cylon-red/30 flex items-center justify-center group-hover:cylon-glow transition-all duration-300">
            <span class="text-cylon-red font-bold text-xl font-bangla">ই</span>
          </div>
          <span class="text-xl font-bold text-foreground font-bangla hidden sm:block">
            ইভেন্ট<span class="text-cylon-red">প্লাস</span>
          </span>
        </NuxtLink>

        <!-- Desktop Navigation -->
        <div class="hidden lg:flex items-center gap-1">
          <NuxtLink v-for="link in navLinks" :key="link.path" :to="link.path"
            class="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-white/5 rounded-lg transition-all duration-200 font-bangla-body"
            active-class="text-cylon-red bg-cylon-red/10">
            {{ link.label }}
          </NuxtLink>
        </div>

        <!-- Actions -->
        <div class="flex items-center gap-2">
          <!-- Language Toggle -->
          <button @click="toggleLocale"
            class="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-white/5 transition-all duration-200"
            :title="locale === 'bn' ? 'Switch to English' : 'বাংলায় যান'">
            <Globe class="w-5 h-5" />
          </button>

          <!-- Theme Toggle -->
          <button @click="toggleTheme"
            class="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-white/5 transition-all duration-200">
            <Sun v-if="isDark" class="w-5 h-5" />
            <Moon v-else class="w-5 h-5" />
          </button>

          <!-- CTA Button (Desktop) -->
          <NuxtLink to="/donation"
            class="hidden sm:flex items-center gap-2 px-4 py-2 bg-cylon-red text-white rounded-lg font-medium text-sm hover:bg-cylon-red/90 cylon-glow-sm hover:cylon-glow transition-all duration-300 font-bangla-body">
            {{ t('home.cta_donate') }}
          </NuxtLink>

          <!-- Mobile Menu Toggle -->
          <button @click="toggleMenu"
            class="lg:hidden p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-white/5 transition-all duration-200">
            <X v-if="isMenuOpen" class="w-6 h-6" />
            <Menu v-else class="w-6 h-6" />
          </button>
        </div>
      </div>

      <!-- Mobile Navigation -->
      <Transition enter-active-class="transition-all duration-300 ease-out" enter-from-class="opacity-0 -translate-y-4"
        enter-to-class="opacity-100 translate-y-0" leave-active-class="transition-all duration-200 ease-in"
        leave-from-class="opacity-100 translate-y-0" leave-to-class="opacity-0 -translate-y-4">
        <div v-if="isMenuOpen" class="lg:hidden py-4 border-t border-border/50">
          <div class="flex flex-col gap-1">
            <NuxtLink v-for="link in navLinks" :key="link.path" :to="link.path"
              class="px-4 py-3 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-white/5 rounded-lg transition-all duration-200 font-bangla-body"
              active-class="text-cylon-red bg-cylon-red/10" @click="isMenuOpen = false">
              {{ link.label }}
            </NuxtLink>
            <NuxtLink to="/donation"
              class="mt-2 mx-4 flex items-center justify-center gap-2 px-4 py-3 bg-cylon-red text-white rounded-lg font-medium text-sm hover:bg-cylon-red/90 cylon-glow-sm transition-all duration-300 font-bangla-body"
              @click="isMenuOpen = false">
              {{ t('home.cta_donate') }}
            </NuxtLink>
          </div>
        </div>
      </Transition>
    </nav>
  </header>
</template>