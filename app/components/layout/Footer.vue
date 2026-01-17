<script setup lang="ts">
import {
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Mail,
  Phone,
  MapPin
} from 'lucide-vue-next'

const { t } = useI18n()

const quickLinks = computed(() => [
  { path: '/about', label: t('common.about') },
  { path: '/history', label: t('common.history') },
  { path: '/activities', label: t('common.activities') },
  { path: '/gallery', label: t('common.gallery') },
  { path: '/committee', label: t('common.committee') },
  { path: '/contact', label: t('common.contact') }
])

const currentYear = new Date().getFullYear()
</script>

<template>
  <footer class="bg-surface border-t border-border/50 mt-auto">
    <!-- Main Footer -->
    <div class="container mx-auto px-4 lg:px-8 py-12 lg:py-16">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
        <!-- Brand Section -->
        <div class="lg:col-span-1">
          <NuxtLink to="/" class="flex items-center gap-3 mb-4">
            <div
              class="w-10 h-10 rounded-lg bg-cylon-red/10 border border-cylon-red/30 flex items-center justify-center">
              <span class="text-cylon-red font-bold text-xl font-bangla">ই</span>
            </div>
            <span class="text-xl font-bold text-foreground font-bangla">
              ইভেন্ট<span class="text-cylon-red">প্লাস</span>
            </span>
          </NuxtLink>
          <p class="text-muted-foreground text-sm leading-relaxed font-bangla-body mb-6">
            বাংলাদেশের প্রিমিয়াম ইভেন্ট অর্গানাইজার। পূজা, সাংস্কৃতিক অনুষ্ঠান এবং সামাজিক কার্যক্রম আয়োজনে আমরা
            প্রতিশ্রুতিবদ্ধ।
          </p>

          <!-- Social Links -->
          <div class="flex items-center gap-3">
            <a href="#"
              class="w-9 h-9 rounded-lg bg-white/5 border border-border/50 flex items-center justify-center text-muted-foreground hover:text-cylon-red hover:border-cylon-red/30 transition-all duration-200">
              <Facebook class="w-4 h-4" />
            </a>
            <a href="#"
              class="w-9 h-9 rounded-lg bg-white/5 border border-border/50 flex items-center justify-center text-muted-foreground hover:text-cylon-red hover:border-cylon-red/30 transition-all duration-200">
              <Youtube class="w-4 h-4" />
            </a>
            <a href="#"
              class="w-9 h-9 rounded-lg bg-white/5 border border-border/50 flex items-center justify-center text-muted-foreground hover:text-cylon-red hover:border-cylon-red/30 transition-all duration-200">
              <Instagram class="w-4 h-4" />
            </a>
            <a href="#"
              class="w-9 h-9 rounded-lg bg-white/5 border border-border/50 flex items-center justify-center text-muted-foreground hover:text-cylon-red hover:border-cylon-red/30 transition-all duration-200">
              <Twitter class="w-4 h-4" />
            </a>
          </div>
        </div>

        <!-- Quick Links -->
        <div>
          <h4 class="text-foreground font-semibold mb-4 font-bangla">{{ t('footer.quick_links') }}</h4>
          <ul class="space-y-2">
            <li v-for="link in quickLinks" :key="link.path">
              <NuxtLink :to="link.path"
                class="text-muted-foreground hover:text-cylon-red text-sm transition-colors duration-200 font-bangla-body">
                {{ link.label }}
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- More Links -->
        <div>
          <h4 class="text-foreground font-semibold mb-4 font-bangla">আরও</h4>
          <ul class="space-y-2">
            <li>
              <NuxtLink to="/donation"
                class="text-muted-foreground hover:text-cylon-red text-sm transition-colors duration-200 font-bangla-body">
                {{ t('common.donation') }}
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/expenditure"
                class="text-muted-foreground hover:text-cylon-red text-sm transition-colors duration-200 font-bangla-body">
                {{ t('common.expenditure') }}
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/members"
                class="text-muted-foreground hover:text-cylon-red text-sm transition-colors duration-200 font-bangla-body">
                {{ t('common.members') }}
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/faq"
                class="text-muted-foreground hover:text-cylon-red text-sm transition-colors duration-200 font-bangla-body">
                {{ t('common.faq') }}
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/news"
                class="text-muted-foreground hover:text-cylon-red text-sm transition-colors duration-200 font-bangla-body">
                {{ t('common.news') }}
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Contact Info -->
        <div>
          <h4 class="text-foreground font-semibold mb-4 font-bangla">{{ t('footer.contact_us') }}</h4>
          <ul class="space-y-3">
            <li class="flex items-start gap-3">
              <MapPin class="w-4 h-4 text-cylon-red mt-0.5 flex-shrink-0" />
              <span class="text-muted-foreground text-sm font-bangla-body">
                ঢাকা, বাংলাদেশ
              </span>
            </li>
            <li class="flex items-center gap-3">
              <Mail class="w-4 h-4 text-cylon-red flex-shrink-0" />
              <a href="mailto:info@eventplus.com"
                class="text-muted-foreground hover:text-cylon-red text-sm transition-colors duration-200">
                info@eventplus.com
              </a>
            </li>
            <li class="flex items-center gap-3">
              <Phone class="w-4 h-4 text-cylon-red flex-shrink-0" />
              <a href="tel:+8801700000000"
                class="text-muted-foreground hover:text-cylon-red text-sm transition-colors duration-200">
                +880 1700-000000
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <!-- Bottom Bar -->
    <div class="border-t border-border/50">
      <div class="container mx-auto px-4 lg:px-8 py-4">
        <div class="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p class="font-bangla-body">
            © {{ currentYear }} ইভেন্টপ্লাস। {{ t('footer.rights') }}
          </p>
          <div class="flex items-center gap-4">
            <NuxtLink to="/privacy" class="hover:text-cylon-red transition-colors duration-200">
              Privacy Policy
            </NuxtLink>
            <NuxtLink to="/terms" class="hover:text-cylon-red transition-colors duration-200">
              Terms of Service
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>