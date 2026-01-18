<script setup lang="ts">
import { ArrowRight, Play, Users, Calendar, Heart, Shield, Globe, Award } from 'lucide-vue-next'

const { t } = useI18n()

// YouTube video ID: tFbRw5Y19NI
const videoUrl = 'https://www.youtube.com/embed/tFbRw5Y19NI?autoplay=1&mute=1&loop=1&playlist=tFbRw5Y19NI&controls=0&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1&disablekb=1&enablejsapi=1'

const stats = computed(() => [
  { icon: Users, value: '500+', label: t('common.members') },
  { icon: Calendar, value: '50+', label: t('common.history') },
  { icon: Heart, value: '৳2M+', label: t('common.donation') }
])

const quickLinks = [
  { title: 'History', path: '/history', icon: Shield },
  { title: 'Committee', path: '/committee', icon: Users },
  { title: 'Gallery', path: '/gallery', icon: Globe },
  { title: 'Members', path: '/members', icon: Award }
]
</script>

<template>
  <div class="bg-background text-foreground transition-colors duration-500">
    <!-- Hero Section with Cinematic Video -->
    <section class="relative h-screen w-full flex items-center justify-center overflow-hidden">
      <!-- Video Background Overlay -->
      <div class="absolute inset-0 z-0 bg-black/60 scale-105" />

      <!-- YouTube Video Background -->
      <div class="absolute inset-0 z-[-1] overflow-hidden">
        <iframe :src="videoUrl"
          class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[177.77vh] min-w-full h-full min-h-[56.25vw] pointer-events-none opacity-40 scale-105 filter blur-[1px]"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen></iframe>
      </div>

      <!-- Gradient Fade Bottom -->
      <div class="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background to-transparent z-10" />

      <!-- Content -->
      <div class="relative z-20 container mx-auto px-4 text-center">
        <!-- Minimal Badge -->
        <div
          class="inline-flex items-center gap-2 px-3 py-1 mb-8 rounded-full border border-cylon-red/30 bg-surface/40 backdrop-blur-md animate-fade-in-up">
          <span class="relative flex h-2 w-2">
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-cylon-red opacity-75"></span>
            <span class="relative inline-flex rounded-full h-2 w-2 bg-cylon-red"></span>
          </span>
          <span class="text-[10px] uppercase tracking-[0.2em] font-medium text-cylon-red">
            Experience the Heritage
          </span>
        </div>

        <h1
          class="text-4xl md:text-6xl lg:text-8xl font-bold font-bangla mb-6 leading-tight animate-fade-in-up delay-100">
          {{ t('home.hero_title') }}
        </h1>

        <p
          class="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 font-bangla-body animate-fade-in-up delay-200">
          {{ t('home.hero_subtitle') }}
        </p>

        <!-- CTAs with Cylon Glow -->
        <div class="flex flex-col sm:flex-row items-center justify-center gap-6 animate-fade-in-up delay-300">
          <NuxtLink to="/donation"
            class="group relative flex items-center gap-2 px-8 py-4 bg-cylon-red text-white rounded-lg font-bold transition-all duration-300 hover:cylon-glow hover:translate-y-[-2px]">
            {{ t('home.cta_donate') }}
            <ArrowRight class="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </NuxtLink>

          <NuxtLink to="/about"
            class="flex items-center gap-2 px-8 py-4 glass-card rounded-lg font-bold hover:bg-white/10 transition-all duration-300">
            <Play class="w-5 h-5" />
            {{ t('home.cta_learn_more') }}
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Content Grid (Modern Whitespace-Heavy) -->
    <section class="py-32 container mx-auto px-4 lg:px-8">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <!-- Left: Image with Soft Glow -->
        <div class="relative group">
          <div
            class="absolute inset-0 bg-cylon-red/10 blur-[100px] rounded-full group-hover:bg-cylon-red/20 transition-all duration-700" />
          <div
            class="relative aspect-video rounded-2xl overflow-hidden glass-card p-1 border-cylon-red/10 group-hover:border-cylon-red/30 transition-all duration-500">
            <NuxtImg
              src="https://cdni.iconscout.com/illustration/premium/thumb/event-management-illustration-svg-download-png-5395861.png"
              class="w-full h-full object-cover rounded-xl grayscale hover:grayscale-0 transition-all duration-700 scale-105 hover:scale-100"
              placeholder />
          </div>
        </div>

        <!-- Right: Text Content -->
        <div class="space-y-8">
          <h2 class="text-3xl md:text-5xl font-bold font-bangla leading-tight">
            বাংলাদেশের ঐতিহ্যের <br /> <span class="text-cylon-red">আধুনিক</span> প্রকাশ
          </h2>
          <p class="text-muted-foreground text-lg font-bangla-body leading-relaxed">
            আমরা শুধু একটি ইভেন্ট অর্গানাইজার নই; আমরা আপনার ঐতিহ্যের ধারক। প্রতিটি উদযাপনকে আমরা রূপান্তর করি এক
            অবিস্মরণীয় অভিজ্ঞতায়, যেখানে প্রযুক্তির সাথে মিশে যায় আমাদের হাজার বছরের সংস্কৃতি।
          </p>

          <div class="grid grid-cols-2 gap-8 pt-4">
            <div v-for="stat in stats" :key="stat.label" class="space-y-2">
              <div class="text-3xl font-bold text-foreground">{{ stat.value }}</div>
              <div class="text-sm text-muted-foreground uppercase tracking-widest">{{ stat.label }}</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Quick Navigation (Minimal Cards) -->
    <section class="py-24 bg-surface/30 backdrop-blur-sm border-y border-border/50">
      <div class="container mx-auto px-4 lg:px-8">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
          <NuxtLink v-for="link in quickLinks" :key="link.path" :to="link.path"
            class="group glass-card p-8 rounded-2xl hover:border-cylon-red/50 hover:translate-y-[-5px] transition-all duration-500">
            <component :is="link.icon"
              class="w-8 h-8 text-muted-foreground group-hover:text-cylon-red transition-colors mb-4" />
            <h3 class="text-lg font-bold font-bangla">{{ link.title }}</h3>
            <p class="text-xs text-muted-foreground mt-2 opacity-0 group-hover:opacity-100 transition-opacity">Explore
              Section</p>
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Featured Section (Coming Soon Placeholder) -->
    <section class="py-32">
      <div class="container mx-auto px-4 lg:px-8 text-center space-y-12">
        <div class="inline-block h-px w-24 bg-gradient-to-r from-transparent via-cylon-red to-transparent" />
        <h2 class="text-3xl md:text-4xl font-bold font-bangla">আমাদের আগামী কার্যক্রম</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div v-for="i in 3" :key="i"
            class="aspect-video glass-card rounded-2xl flex items-center justify-center opacity-40 hover:opacity-100 transition-opacity cursor-pointer border-dashed">
            <span class="text-sm tracking-[0.3em] text-muted-foreground">COMING SOON</span>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.animate-fade-in-up {
  animation: fadeInUp 0.8s ease-out forwards;
  opacity: 0;
}

.delay-100 {
  animation-delay: 100ms;
}

.delay-200 {
  animation-delay: 200ms;
}

.delay-300 {
  animation-delay: 300ms;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>