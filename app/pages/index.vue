<script setup lang="ts">
import { ArrowRight, Play, Users, Calendar, Heart, Shield, Globe, Award } from 'lucide-vue-next'

const { t } = useI18n()

// Vimeo cinematic background
const videoUrl = 'https://player.vimeo.com/video/1139579428?api=1&background=1&autoplay=1&loop=1&byline=0&title=0'

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
  <div class="bg-background text-foreground transition-colors duration-500 overflow-x-hidden">
    <!-- Hero Section with Cinematic Vimeo -->
    <section class="relative h-screen min-h-[700px] w-full flex items-center justify-center overflow-hidden">
      <!-- Gradient Overlays for Readability -->
      <div class="absolute inset-0 z-10 bg-gradient-to-b from-black/70 via-black/20 to-background" />
      <div class="absolute inset-0 z-0 bg-black/40" />

      <!-- Vimeo Video Background -->
      <div class="absolute inset-0 z-[-1] pointer-events-none overflow-hidden scale-110">
        <iframe :src="videoUrl"
          class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[177.77vh] min-w-full h-full min-h-[56.25vw] opacity-60 filter blur-[0.5px]"
          frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
      </div>

      <!-- Content -->
      <div class="relative z-20 container mx-auto px-4 text-center">
        <!-- Minimal Badge with Cylon Pulse -->
        <div
          class="inline-flex items-center gap-3 px-4 py-1.5 mb-10 rounded-full border border-cylon-red/30 bg-surface/40 backdrop-blur-xl animate-fade-in-up">
          <span class="relative flex h-2 w-2">
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-cylon-red opacity-75"></span>
            <span class="relative inline-flex rounded-full h-2 w-2 bg-cylon-red"></span>
          </span>
          <span class="text-[10px] uppercase tracking-[0.3em] font-bold text-cylon-red">
            The Future of Tradition
          </span>
        </div>

        <h1
          class="text-5xl md:text-7xl lg:text-9xl font-bold font-bangla mb-8 leading-[1.1] animate-fade-in-up delay-100 tracking-tighter">
          {{ t('home.hero_title') }}
        </h1>

        <p
          class="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto mb-12 font-bangla-body animate-fade-in-up delay-200 leading-relaxed font-light">
          {{ t('home.hero_subtitle') }}
        </p>

        <!-- CTAs with Cylon Glow -->
        <div class="flex flex-col sm:flex-row items-center justify-center gap-6 animate-fade-in-up delay-300">
          <NuxtLink to="/donation"
            class="group relative flex items-center gap-3 px-10 py-5 bg-cylon-red text-white rounded-lg font-bold transition-all duration-500 hover:cylon-glow hover:translate-y-[-4px] uppercase tracking-widest text-sm">
            {{ t('home.cta_donate') }}
            <ArrowRight class="w-5 h-5 group-hover:translate-x-2 transition-transform" />
          </NuxtLink>

          <NuxtLink to="/about"
            class="flex items-center gap-3 px-10 py-5 glass-card rounded-lg font-bold hover:bg-white/10 transition-all duration-500 border-white/10 uppercase tracking-widest text-sm">
            <Play class="w-5 h-5" />
            {{ t('home.cta_learn_more') }}
          </NuxtLink>
        </div>
      </div>

      <!-- Cylon Scanning Light Effect (Hero Bottom) -->
      <div
        class="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-cylon-red to-transparent z-30 opacity-50 animate-cylon-scan" />
    </section>

    <!-- Content Grid (Modern Whitespace-Heavy) -->
    <section class="py-32 container mx-auto px-4 lg:px-8">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <!-- Left: Illustration with Soft Glow -->
        <div class="relative group">
          <div
            class="absolute inset-0 bg-cylon-red/10 blur-[100px] rounded-full group-hover:bg-cylon-red/20 transition-all duration-700" />
          <div
            class="relative aspect-video rounded-2xl overflow-hidden glass-card p-1 border-cylon-red/10 group-hover:border-cylon-red/30 transition-all duration-500">
            <NuxtImg
              src="https://cdni.iconscout.com/illustration/premium/thumb/event-management-illustration-svg-download-png-5395861.png"
              class="w-full h-full object-contain p-4 rounded-xl grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
              placeholder />
          </div>
        </div>

        <!-- Right: Text Content -->
        <div class="space-y-8">
          <h2 class="text-4xl md:text-6xl font-bold font-bangla leading-tight tracking-tight">
            বাংলাদেশের ঐতিহ্যের <br /> <span class="text-cylon-red border-b-2 border-cylon-red/20">আধুনিক</span> প্রকাশ
          </h2>
          <p class="text-muted-foreground text-xl font-bangla-body leading-relaxed font-light">
            আমরা শুধু একটি ইভেন্ট অর্গানাইজার নই; আমরা আপনার ঐতিহ্যের ধারক। প্রতিটি উদযাপনকে আমরা রূপান্তর করি এক
            অবিস্মরণীয় অভিজ্ঞতায়, যেখানে প্রযুক্তির সাথে মিশে যায় আমাদের হাজার বছরের সংস্কৃতি।
          </p>

          <div class="grid grid-cols-3 gap-12  pt-8">
            <div v-for="stat in stats" :key="stat.label" class="space-y-3">
              <div class="text-4xl font-bold text-foreground tracking-tighter">{{ stat.value }}</div>
              <div class="text-[10px] text-muted-foreground uppercase tracking-[0.3em] font-bold">{{ stat.label }}</div>
              <div class="h-0.5 w-8 bg-cylon-red/30 group-hover:w-full transition-all duration-500" />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Quick Navigation (Minimal Cards) -->
    <section class="py-24 bg-surface/10 backdrop-blur-sm border-y border-border/10">
      <div class="container mx-auto px-4 lg:px-8">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
          <NuxtLink v-for="link in quickLinks" :key="link.path" :to="link.path"
            class="group glass-card p-10 rounded-2xl hover:border-cylon-red/50 hover:translate-y-[-8px] transition-all duration-500 border-white/5 bg-deep-black/20">
            <component :is="link.icon"
              class="w-10 h-10 text-muted-foreground group-hover:text-cylon-red transition-all duration-500 group-hover:scale-110 mb-6" />
            <h3 class="text-xl font-bold font-bangla tracking-tight">{{ link.title }}</h3>
            <p
              class="text-[10px] uppercase tracking-[0.2em] text-muted-foreground mt-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0 text-cylon-red font-bold">
              Explore History
            </p>
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Services Section (Cylon Metallic Grid) -->
    <section class="py-32 bg-deep-black/30 border-y border-white/5">
      <div class="container mx-auto px-4 lg:px-8">
        <div class="flex flex-col items-center text-center mb-24 space-y-4">
          <div class="h-1 w-12 bg-cylon-red" />
          <h2 class="text-4xl md:text-6xl font-bold font-bangla tracking-tight uppercase">আমাদের সেবাসমূহ</h2>
          <p class="text-muted-foreground font-bangla-body text-xl max-w-2xl font-light">প্রতিটি বিশেষ মুহূর্তকে আমরা
            রূপান্তর করি একটি রাজকীয় অভিজ্ঞতায়।</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <!-- Service 1: Engagement -->
          <div
            class="group relative glass-card p-12 rounded-[2.5rem] border-white/5 metallic-surface overflow-hidden transition-all duration-700 hover:translate-y-[-20px] hover:border-cylon-red/10">
            <div
              class="absolute -top-12 -right-12 w-32 h-32 bg-cylon-red/5 rounded-full blur-[60px] group-hover:bg-cylon-red/50 transition-all" />
            <div
              class="mb-8 p-4 w-16 h-16 rounded-2xl bg-white/5 border border-white/10 group-hover:border-cylon-red/50 transition-colors">
              <Heart class="w-full h-full text-muted-foreground group-hover:text-cylon-red transition-all scale-110" />
            </div>
            <h3 class="text-2xl font-bold font-bangla mb-4 group-hover:text-white transition-colors">এঙ্গেজমেন্ট</h3>
            <p
              class="text-muted-foreground font-bangla-body leading-relaxed group-hover:text-white/70 transition-colors">
              নতুন সম্পর্কের শুরুটা হোক জাঁকজমকপূর্ণ ও স্মরণীয়। আমরা সাজাই আপনার স্বপ্নের মতো করে।</p>
          </div>

          <!-- Service 2: Wedding -->
          <div
            class="group relative glass-card p-12 rounded-[2.5rem] border-white/5 metallic-surface overflow-hidden transition-all duration-700 hover:translate-y-[-10px] hover:border-cylon-red/30 bg-white/5">
            <div class="absolute -top-12 -right-12 w-32 h-32 bg-cylon-red/10 rounded-full blur-[60px]" />
            <div class="mb-8 p-4 w-16 h-16 rounded-2xl bg-cylon-red/10 border border-cylon-red/30">
              <Globe class="w-full h-full text-cylon-red scale-110" />
            </div>
            <h3 class="text-2xl font-bold font-bangla mb-4">বিবাহ উৎসব</h3>
            <p class="text-muted-foreground font-bangla-body leading-relaxed">বাঙালির চিরাচরিত ঐতিহ্য আর আধুনিক লাক্সারি
              ফিচারের এক অপূর্ব সমন্বয় আমাদের প্রতিটি ওয়েডিং ইভেন্টে।</p>
          </div>

          <!-- Service 3: Corporate -->
          <div
            class="group relative glass-card p-12 rounded-[2.5rem] border-white/5 metallic-surface overflow-hidden transition-all duration-700 hover:translate-y-[-10px] hover:border-cylon-red/30">
            <div
              class="absolute -top-12 -right-12 w-32 h-32 bg-cylon-red/5 rounded-full blur-[60px] group-hover:bg-cylon-red/10 transition-all" />
            <div
              class="mb-8 p-4 w-16 h-16 rounded-2xl bg-white/5 border border-white/10 group-hover:border-cylon-red/50 transition-colors">
              <Shield class="w-full h-full text-muted-foreground group-hover:text-cylon-red transition-all scale-110" />
            </div>
            <h3 class="text-2xl font-bold font-bangla mb-4 group-hover:text-white transition-colors">কর্পোরেট ইভেন্ট
            </h3>
            <p
              class="text-muted-foreground font-bangla-body leading-relaxed group-hover:text-white/70 transition-colors">
              পেশাদারিত্ব এবং সৃজনশীলতার মেলবন্ধন। আপনার ব্র্যান্ড ভ্যালুকে আমরা পৌঁছে দেই এক অনন্য উচ্চতায়।</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Featured Section (Coming Soon Placeholder) -->
    <section class="py-32 relative overflow-hidden">
      <div
        class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cylon-red/5 rounded-full blur-[120px] pointer-events-none" />

      <div class="container mx-auto px-4 lg:px-8 text-center space-y-16 relative z-10">
        <div class="flex flex-col items-center gap-4">
          <div class="h-px w-24 bg-gradient-to-r from-transparent via-cylon-red to-transparent" />
          <h2 class="text-4xl md:text-5xl font-bold font-bangla tracking-tight">আমাদের আগামী কার্যক্রম</h2>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div v-for="i in 3" :key="i"
            class="group aspect-video glass-card rounded-2xl flex flex-col items-center justify-center opacity-40 hover:opacity-100 transition-all duration-700 cursor-pointer border-dashed border-2 border-white/10 hover:border-cylon-red/50 bg-surface/20">
            <div
              class="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center mb-4 group-hover:border-cylon-red/50 transition-colors">
              <Calendar class="w-6 h-6 text-muted-foreground group-hover:text-cylon-red transition-colors" />
            </div>
            <span
              class="text-xs tracking-[0.4em] text-muted-foreground group-hover:text-white transition-colors uppercase font-bold">Coming
              Soon</span>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.animate-fade-in-up {
  animation: fadeInUp 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
  opacity: 0;
}

.delay-100 {
  animation-delay: 150ms;
}

.delay-200 {
  animation-delay: 300ms;
}

.delay-300 {
  animation-delay: 450ms;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(40px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes cylon-scan {

  0%,
  100% {
    transform: translateX(-100%);
  }

  50% {
    transform: translateX(100%);
  }
}

.animate-cylon-scan {
  background: linear-gradient(90deg, transparent, var(--cylon-red), transparent);
  animation: cylon-scan 4s ease-in-out infinite;
}
</style>