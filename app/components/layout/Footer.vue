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
  { path: '/committee', label: t('common.committee') }
])

const currentYear = new Date().getFullYear()

const socialLinks = [
  { name: 'Facebook', icon: Facebook, href: '#' },
  { name: 'Youtube', icon: Youtube, href: '#' },
  { name: 'Instagram', icon: Instagram, href: '#' },
  { name: 'Twitter', icon: Twitter, href: '#' }
]
</script>

<template>
  <footer class="bg-muted/30 border-t border-border mt-auto">
    <!-- Main Footer -->
    <div class="container mx-auto px-4 lg:px-8 py-16 lg:py-24">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-20">
        <!-- Brand Section -->
        <div class="lg:col-span-1 space-y-6">
          <NuxtLink to="/" class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-lg bg-card flex items-center justify-center border border-border">
              <span class="text-cylon-red font-bold text-xl font-bangla">ই</span>
            </div>
            <span class="text-xl font-bold text-foreground font-bangla tracking-tight">
              ইভেন্ট<span class="text-cylon-red">প্লাস</span>
            </span>
          </NuxtLink>
          <p class="text-muted-foreground text-sm leading-relaxed font-bangla-body">
            অত্যাধুনিক প্রযুক্তির সাথে ঐতিহ্যের মেলবন্ধনে আমরা গড়ে তুলি এক অনন্য অভিজ্ঞতা। বাংলাদেশের প্রিমিয়াম ইভেন্ট
            অর্গানাইজার।
          </p>

          <!-- Social Links -->
          <div class="flex items-center gap-4">
            <a v-for="social in socialLinks" :key="social.name" :href="social.href"
              class="w-8 h-8 rounded-lg bg-muted border border-border flex items-center justify-center text-muted-foreground hover:text-cylon-red hover:border-cylon-red/30 transition-all duration-300">
              <component :is="social.icon" class="w-4 h-4" />
            </a>
          </div>
        </div>

        <!-- Quick Links -->
        <div>
          <h4 class="text-foreground font-bold mb-6 font-bangla uppercase tracking-widest text-xs">লিংকসমূহ</h4>
          <ul class="space-y-3">
            <li v-for="link in quickLinks" :key="link.path">
              <NuxtLink :to="link.path"
                class="text-muted-foreground hover:text-cylon-red text-sm transition-all duration-300 font-bangla-body">
                {{ link.label }}
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Resources -->
        <div>
          <h4 class="text-foreground font-bold mb-6 font-bangla uppercase tracking-widest text-xs">রিসোর্স</h4>
          <ul class="space-y-3">
            <li>
              <NuxtLink to="/donation"
                class="text-muted-foreground hover:text-cylon-red text-sm transition-all duration-300 font-bangla-body">
                {{ t('common.donation') }}
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/members"
                class="text-muted-foreground hover:text-cylon-red text-sm transition-all duration-300 font-bangla-body">
                {{ t('common.members') }}
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Contact Info -->
        <div class="space-y-6">
          <h4 class="text-foreground font-bold mb-6 font-bangla uppercase tracking-widest text-xs">যোগাযোগ</h4>
          <ul class="space-y-4">
            <li class="flex items-start gap-4 text-muted-foreground text-sm">
              <MapPin class="w-4 h-4 text-cylon-red mt-0.5 flex-shrink-0" />
              <span class="font-bangla-body">ঢাকা, বাংলাদেশ</span>
            </li>
            <li class="flex items-start gap-4 text-muted-foreground text-sm">
              <Mail class="w-4 h-4 text-cylon-red mt-0.5 flex-shrink-0" />
              <span>info@eventplus.com</span>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <!-- Bottom Bar -->
    <div class="border-t border-border">
      <div class="container mx-auto px-4 lg:px-8 py-6">
        <div
          class="flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-medium">
          <p>© {{ currentYear }} EventPlus. All rights reserved.</p>
          <div class="flex items-center gap-8">
            <NuxtLink to="/privacy" class="hover:text-cylon-red transition-colors">Privacy</NuxtLink>
            <NuxtLink to="/terms" class="hover:text-cylon-red transition-colors">Terms</NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>