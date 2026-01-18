<script setup lang="ts">
import { Menu, X, Globe, Moon, Sun } from 'lucide-vue-next'

const { locale, setLocale, t } = useI18n()

const isMenuOpen = ref(false)
const isDark = ref(true)

const navLinks = computed(() => [
  { path: '/', label: t('common.home') },
  { path: '/about', label: t('common.about') },
  { path: '/history', label: t('common.history') },
  { path: '/activities', label: t('common.activities') },
  { path: '/committee', label: t('common.committee') },
  { path: '/donation', label: t('common.donation') }
])

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const toggleTheme = () => {
  isDark.value = !isDark.value
  document.documentElement.classList.toggle('dark', isDark.value)
}

const toggleLocale = () => {
  const nextLocale = locale.value === 'bn' ? 'en' : 'bn'
  setLocale(nextLocale)
}

onMounted(() => {
  document.documentElement.classList.add('dark')
})
</script>

<template>
  <header class="fixed top-0 left-0 right-0 z-50 transition-all duration-500 glass-dark border-b border-white/5">
    <nav class="container mx-auto px-4 lg:px-8">
      <div class="flex items-center justify-between h-16 lg:h-20">
        <!-- Logo -->
        <NuxtLink to="/" class="flex items-center gap-3 group">
          <div
            class="w-10 h-10 rounded-lg bg-surface/50 border border-cylon-red/20 flex items-center justify-center group-hover:cylon-glow group-hover:border-cylon-red/50 transition-all duration-500">
            <span class="text-cylon-red font-bold text-xl font-bangla">ই</span>
          </div>
          <span class="text-xl font-bold text-foreground font-bangla hidden sm:block tracking-tight">
            ইভেন্ট<span class="text-cylon-red">প্লাস</span>
          </span>
        </NuxtLink>

        <!-- Desktop Navigation -->
        <div class="hidden lg:flex items-center gap-2">
          <NuxtLink v-for="link in navLinks" :key="link.path" :to="link.path"
            class="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-white/5 rounded-lg transition-all duration-300 font-bangla-body tracking-wider"
            active-class="text-cylon-red bg-cylon-red/5">
            {{ link.label }}
          </NuxtLink>
        </div>

        <!-- Actions -->
        <div class="flex items-center gap-3">
          <!-- Language Toggle -->
          <button @click="toggleLocale"
            class="p-2 rounded-lg text-muted-foreground hover:text-cylon-red hover:bg-cylon-red/5 transition-all duration-300"
            :title="locale === 'bn' ? 'English' : 'বাংলা'">
            <Globe class="w-5 h-5" />
          </button>

          <!-- Theme Toggle -->
          <button @click="toggleTheme"
            class="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-white/10 transition-all duration-300">
            <Sun v-if="isDark" class="w-5 h-5" />
            <Moon v-else class="w-5 h-5" />
          </button>

          <!-- Minimal Donate CTA -->
          <NuxtLink to="/donation"
            class="hidden sm:flex items-center gap-2 px-5 py-2.5 bg-cylon-red text-white rounded-lg font-bold text-sm hover:cylon-glow transition-all duration-500 font-bangla-body">
            {{ t('common.donation') }}
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
      <Transition enter-active-class="transition-all duration-500 ease-out" enter-from-class="opacity-0 -translate-y-10"
        enter-to-class="opacity-100 translate-y-0" leave-active-class="transition-all duration-300 ease-in"
        leave-from-class="opacity-100 translate-y-0" leave-to-class="opacity-0 -translate-y-10">
        <div v-if="isMenuOpen"
          class="lg:hidden py-8 space-y-4 bg-background/95 backdrop-blur-3xl absolute inset-x-0 top-16 border-b border-border/10 shadow-2xl">
          <div class="flex flex-col container mx-auto px-4">
            <NuxtLink v-for="link in navLinks" :key="link.path" :to="link.path"
              class="px-4 py-4 text-base font-medium text-muted-foreground hover:text-cylon-red transition-all duration-300 font-bangla-body border-b border-border/5"
              active-class="text-cylon-red" @click="isMenuOpen = false">
              {{ link.label }}
            </NuxtLink>
            <NuxtLink to="/donation"
              class="mt-6 flex items-center justify-center gap-2 px-6 py-4 bg-cylon-red text-white rounded-xl font-bold text-lg cylon-glow transition-all duration-500 font-bangla-body"
              @click="isMenuOpen = false">
              {{ t('common.donation') }}
            </NuxtLink>
          </div>
        </div>
      </Transition>
    </nav>
  </header>
</template>