<script setup lang="ts">
import { ArrowRight, Play, Users, Calendar, Heart } from 'lucide-vue-next'

const { t } = useI18n()

const stats = [
  { icon: Users, value: '500+', label: 'সদস্য', labelEn: 'Members' },
  { icon: Calendar, value: '50+', label: 'বার্ষিক অনুষ্ঠান', labelEn: 'Annual Events' },
  { icon: Heart, value: '৳2M+', label: 'সংগৃহীত অনুদান', labelEn: 'Donations Collected' }
]

const features = [
  {
    title: 'দুর্গা পূজা',
    titleEn: 'Durga Puja',
    description: 'বাংলাদেশের বৃহত্তম দুর্গা পূজা উৎসব আয়োজন',
    image: '/images/durga-puja.jpg'
  },
  {
    title: 'সরস্বতী পূজা',
    titleEn: 'Saraswati Puja',
    description: 'বিদ্যার দেবী সরস্বতীর আরাধনা',
    image: '/images/saraswati-puja.jpg'
  },
  {
    title: 'সাংস্কৃতিক অনুষ্ঠান',
    titleEn: 'Cultural Events',
    description: 'সংগীত, নৃত্য ও নাটকের সমাহার',
    image: '/images/cultural-event.jpg'
  }
]
</script>

<template>
  <div>
    <!-- Hero Section -->
    <section class="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      <!-- Background Gradient -->
      <div class="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />

      <!-- Animated Background Glow -->
      <div
        class="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-cylon-red/10 rounded-full blur-[120px] animate-pulse-glow" />
      <div class="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-gold/5 rounded-full blur-[100px]" />

      <!-- Content -->
      <div class="relative container mx-auto px-4 lg:px-8 text-center">
        <!-- Badge -->
        <div
          class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cylon-red/10 border border-cylon-red/30 mb-6 animate-fade-in-up">
          <span class="w-2 h-2 rounded-full bg-cylon-red animate-pulse" />
          <span class="text-sm text-cylon-red font-medium font-bangla-body">
            ২০২৬ সালের দুর্গা পূজা শীঘ্রই আসছে
          </span>
        </div>

        <!-- Main Title -->
        <h1
          class="text-4xl md:text-5xl lg:text-7xl font-bold text-foreground font-bangla mb-6 animate-fade-in-up delay-100">
          {{ t('home.hero_title') }}
        </h1>

        <!-- Subtitle -->
        <p
          class="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 font-bangla-body animate-fade-in-up delay-200">
          {{ t('home.hero_subtitle') }}
        </p>

        <!-- CTA Buttons -->
        <div class="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up delay-300">
          <NuxtLink to="/donation"
            class="group flex items-center gap-2 px-6 py-3 bg-cylon-red text-white rounded-lg font-semibold hover:bg-cylon-red/90 cylon-glow-sm hover:cylon-glow transition-all duration-300 font-bangla-body">
            {{ t('home.cta_donate') }}
            <ArrowRight class="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </NuxtLink>

          <NuxtLink to="/about"
            class="flex items-center gap-2 px-6 py-3 bg-white/5 border border-border text-foreground rounded-lg font-semibold hover:bg-white/10 transition-all duration-300 font-bangla-body">
            <Play class="w-5 h-5" />
            {{ t('home.cta_learn_more') }}
          </NuxtLink>
        </div>

        <!-- Stats -->
        <div class="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto animate-fade-in-up delay-400">
          <div v-for="stat in stats" :key="stat.label"
            class="glass-card rounded-xl p-6 hover:border-cylon-red/30 transition-all duration-300">
            <component :is="stat.icon" class="w-8 h-8 text-cylon-red mx-auto mb-3" />
            <div class="text-3xl font-bold text-foreground mb-1">{{ stat.value }}</div>
            <div class="text-sm text-muted-foreground font-bangla-body">{{ stat.label }}</div>
          </div>
        </div>
      </div>

      <!-- Scroll Indicator -->
      <div class="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div class="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2">
          <div class="w-1.5 h-3 rounded-full bg-cylon-red animate-bounce" />
        </div>
      </div>
    </section>

    <!-- Heritage Divider -->
    <div class="heritage-divider" />

    <!-- Features Section -->
    <LayoutSectionWrapper title="আমাদের কার্যক্রম" subtitle="বাংলাদেশের ঐতিহ্যবাহী পূজা ও সাংস্কৃতিক অনুষ্ঠান" divider>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <article v-for="feature in features" :key="feature.title"
          class="group glass-card rounded-2xl overflow-hidden hover:border-cylon-red/30 transition-all duration-500">
          <!-- Image Placeholder -->
          <div class="aspect-[4/3] bg-gradient-to-br from-surface to-background relative overflow-hidden">
            <div class="absolute inset-0 bg-cylon-red/5 group-hover:bg-cylon-red/10 transition-colors duration-300" />
            <div class="absolute inset-0 flex items-center justify-center">
              <span class="text-6xl opacity-20 font-bangla">{{ feature.title[0] }}</span>
            </div>
          </div>

          <!-- Content -->
          <div class="p-6">
            <h3
              class="text-xl font-bold text-foreground font-bangla mb-2 group-hover:text-cylon-red transition-colors duration-300">
              {{ feature.title }}
            </h3>
            <p class="text-muted-foreground text-sm font-bangla-body">
              {{ feature.description }}
            </p>
          </div>
        </article>
      </div>
    </LayoutSectionWrapper>

    <!-- CTA Section -->
    <section class="py-16 lg:py-24">
      <div class="container mx-auto px-4 lg:px-8">
        <div class="metallic-surface rounded-3xl p-8 lg:p-16 text-center relative overflow-hidden">
          <!-- Glow Effect -->
          <div class="absolute top-0 right-0 w-64 h-64 bg-cylon-red/20 rounded-full blur-[100px]" />

          <div class="relative">
            <h2 class="text-2xl lg:text-4xl font-bold text-foreground font-bangla mb-4">
              আজই আমাদের সাথে যুক্ত হোন
            </h2>
            <p class="text-muted-foreground max-w-xl mx-auto mb-8 font-bangla-body">
              সমাজের উন্নয়নে আপনার অবদান রাখুন। প্রতিটি অনুদান আমাদের কার্যক্রমকে এগিয়ে নিয়ে যায়।
            </p>
            <NuxtLink to="/donation"
              class="inline-flex items-center gap-2 px-8 py-4 bg-cylon-red text-white rounded-xl font-semibold text-lg hover:bg-cylon-red/90 cylon-glow hover:shadow-[0_0_30px_rgba(225,29,72,0.5)] transition-all duration-300 font-bangla-body">
              অনুদান দিন
              <ArrowRight class="w-5 h-5" />
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>