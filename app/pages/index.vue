<script setup lang="ts">
import {
  ArrowRight,
  ChevronRight,
  Heart,
  Sparkles,
  Quote,
  CheckCircle2,
  Shield,
  Play,
  Users,
  Calendar,
  Globe,
  Award,
  Crown,
  Camera,
  Palette
} from 'lucide-vue-next'
import { computed, ref } from 'vue'

const { t } = useI18n()

// YouTube cinematic background
const videoUrl = 'https://www.youtube.com/embed/acUEUxkJ5Gg?autoplay=1&mute=1&loop=1&playlist=acUEUxkJ5Gg&controls=0&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1&disablekb=1&enablejsapi=1'

const services = computed(() => [
  {
    id: 1,
    title: 'Engagement',
    description: 'Our engagement services are designed to help you celebrate your love in a meaningful way.',
    icon: Heart,
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=500&h=400&fit=crop'
  },
  {
    id: 2,
    title: 'Holud',
    description: 'Make your Holud special with our unique and traditional touch.',
    icon: Sparkles,
    image: 'https://lh4.googleusercontent.com/proxy/HWVLoQ_69Il19gAC62rZiefTaWFU2074ecr8W0UP_EFcNhxhTByi8tNZlcfYwr0tCuzPsoppTbNvFFS8pE30rv9lY0_ismImY2qRvRx3P8HbCWa3oQRFpHDJNE0BwfKnDDx8vVb-lot4QBx0qTRl5WQQV3BXrmBjigRg-nPbKdoEOLfsT2lC602NKhuZqJCA8ZciaBxzIe8nx3Q11aPrkX0nuS1ZCCZ2iK_pD6rpUK1usrRccaaJtxRtovF40TL_-qAQpvQI8LQGHStu-g2-xvZEkl9g'
  },
  {
    id: 3,
    title: 'Wedding',
    description: 'Celebrate your wedding day with elegance and grace.',
    icon: Crown,
    image: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=500&h=400&fit=crop'
  },
  {
    id: 4,
    title: 'Photography',
    description: 'Capture the moments that matter with our professional photography services.',
    icon: Camera,
    image: 'https://cdn.prod.website-files.com/5fd2ba969b6ce08fc68b0904/64f7abc4498b85260aca7c20_cover.webp'
  },
  {
    id: 5,
    title: 'Decor',
    description: 'Transform your space into a masterpiece with our exquisite decor services.',
    icon: Palette,
    image: 'https://media.istockphoto.com/id/479977238/photo/table-setting-for-an-event-party-or-wedding-reception.jpg?s=612x612&w=0&k=20&c=yIKLzW7wMydqmuItTTtUGS5cYTmrRGy0rXk81AltdTA='
  }
])

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

const reasons = computed(() => [
  'Exceptional attention to detail',
  'Professional and reliable services',
  'Client satisfaction guaranteed',
  'Unique and personalized events',
  'Experience and expertise'
])

const testimonials = [
  {
    name: 'রিনা সরকার',
    title: 'বধূ',
    text: 'আমাদের বিবাহ ছিল আমাদের স্বপ্নের মতো। প্রতিটি মুহূর্ত ছিল যত্নসহকারে পরিকল্পিত এবং সুন্দরভাবে সম্পাদিত।',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=faces'
  },
  {
    name: 'Priya Desai',
    title: 'Mother of the Bride',
    text: 'Exceptional attention to detail and professionalism. Our family was completely satisfied with every aspect of the wedding.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=faces'
  },
  {
    name: 'করিম সাহেব',
    title: 'বাবা',
    text: 'দারুণ সেবা এবং অবিশ্বাস্য সৃজনশীলতা। আমরা আমাদের মেয়ের অনুষ্ঠান এখানে সংগঠিত করতে পেরে গর্বিত।',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=faces'
  }
]

const currentTestimonialIndex = ref(0)
const currentTestimonial = computed(() => testimonials[currentTestimonialIndex.value])
const nextTestimonial = () => {
  currentTestimonialIndex.value = (currentTestimonialIndex.value + 1) % testimonials.length
}
</script>

<template>
  <div class="bg-background text-foreground overflow-x-hidden min-h-screen">
    <!-- HERO SECTION WITH VIDEO -->
    <section class="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
      <!-- Background Overlays -->
      <div class="absolute inset-0 z-20 bg-gradient-to-b from-black/70 via-black/10 to-deep-black" />
      <div class="absolute inset-0 z-10 bg-black/20" />

      <!-- YouTube Video Background -->
      <div class="absolute inset-0 z-0 pointer-events-none overflow-hidden scale-110">
        <iframe :src="videoUrl"
          class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[177.77vh] min-w-full h-full min-h-[56.25vw] opacity-70 filter blur-[0.5px]"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen></iframe>
      </div>

      <!-- Content -->
      <div class="relative z-30 container mx-auto px-4 py-20">
        <div class="text-center space-y-10 max-w-5xl mx-auto">
          <!-- Minimal Badge with Cylon Pulse -->
          <div
            class="inline-flex items-center gap-3 px-4 py-1.5 mb-10 rounded-full border border-cylon-red/30 bg-muted/40 backdrop-blur-xl animate-fade-in-up">
            <span class="relative flex h-2 w-2">
              <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-cylon-red opacity-75"></span>
              <span class="relative inline-flex rounded-full h-2 w-2 bg-cylon-red"></span>
            </span>
            <span class="text-[10px] uppercase tracking-[0.3em] font-bold text-cylon-red">
              The Future of Tradition
            </span>
          </div>

          <h1
            class="text-6xl md:text-8xl lg:text-9xl font-bangla font-bold leading-[1.05] tracking-tighter animate-fade-in-up delay-100">
            {{ t('home.hero_title') }}
          </h1>

          <!-- Subtitle & Description -->
          <div class="space-y-6 animate-fade-in-up delay-200">
            <p class="text-2xl md:text-3xl font-bangla text-white/90 font-light">
              {{ t('home.hero_subtitle') }}
            </p>
            <p class="text-lg text-white/60 font-bangla-body max-w-3xl mx-auto leading-relaxed font-light">
              {{ t('home.hero_description') }}
            </p>
          </div>

          <!-- CTA Buttons -->
          <div class="flex flex-col sm:flex-row items-center justify-center gap-8 pt-6 animate-fade-in-up delay-300">
            <NuxtLink to="/donation"
              class="group relative px-12 py-5 bg-cylon-red text-white rounded-lg font-bold uppercase tracking-[0.2em] text-sm transition-all duration-500 hover:cylon-glow hover:translate-y-[-4px]">
              <span class="relative flex items-center gap-4">
                {{ t('home.cta_donate') }}
                <ArrowRight class="w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </span>
            </NuxtLink>

            <NuxtLink to="/about"
              class="flex items-center gap-3 px-12 py-5 glass-card rounded-lg font-bold uppercase tracking-[0.2em] text-sm hover:bg-white/10 transition-all duration-500 border-white/10">
              <Play class="w-5 h-5" />
              {{ t('home.cta_learn_more') }}
            </NuxtLink>
          </div>
        </div>
      </div>

      <!-- Cylon Scanning Light Effect -->
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
            class="relative aspect-video rounded-2xl overflow-hidden glass-card p-1 border-border group-hover:border-cylon-red/30 transition-all duration-500">
            <NuxtImg
              src="https://cdni.iconscout.com/illustration/premium/thumb/event-management-illustration-svg-download-png-5395861.png"
              class="w-full h-full object-contain p-4 rounded-xl grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
              placeholder />
          </div>
        </div>

        <!-- Right: Text Content -->
        <div class="space-y-8">
          <h2 class="text-4xl md:text-6xl font-bold font-bangla leading-tight tracking-tight text-foreground">
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
    <section class="py-24 bg-muted/10 backdrop-blur-sm border-y border-border">
      <div class="container mx-auto px-4 lg:px-8">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
          <NuxtLink v-for="link in quickLinks" :key="link.path" :to="link.path"
            class="group glass-card p-10 rounded-2xl hover:border-cylon-red/50 hover:translate-y-[-8px] transition-all duration-500 border-border bg-card/20">
            <component :is="link.icon"
              class="w-10 h-10 text-muted-foreground group-hover:text-cylon-red transition-all duration-500 group-hover:scale-110 mb-6" />
            <h3 class="text-xl font-bold font-bangla tracking-tight text-foreground">{{ link.title }}</h3>
            <p
              class="text-[10px] uppercase tracking-[0.2em] text-muted-foreground mt-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0 text-cylon-red font-bold">
              Explore History
            </p>
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Services Section (Cylon Metallic Grid) -->
    <section class="py-32 bg-background border-y border-border">
      <div class="container mx-auto px-4 lg:px-8">
        <div class="flex flex-col items-center text-center mb-24 space-y-4">
          <div class="h-1 w-12 bg-cylon-red" />
          <h2 class="text-4xl md:text-6xl font-bold font-bangla tracking-tight uppercase text-foreground">আমাদের
            সেবাসমূহ</h2>
          <p class="text-muted-foreground font-bangla-body text-xl max-w-2xl font-light">প্রতিটি বিশেষ মুহূর্তকে আমরা
            রূপান্তর করি একটি রাজকীয় অভিজ্ঞতায়।</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <!-- Service 1: Engagement -->
          <div
            class="group relative glass-card p-12 rounded-[2.5rem] border-border metallic-surface overflow-hidden transition-all duration-700 hover:translate-y-[-20px] hover:border-cylon-red/10">
            <div
              class="absolute -top-12 -right-12 w-32 h-32 bg-cylon-red/5 rounded-full blur-[60px] group-hover:bg-cylon-red/50 transition-all" />
            <div
              class="mb-8 p-4 w-16 h-16 rounded-2xl bg-muted border border-border group-hover:border-cylon-red/50 transition-colors">
              <Heart class="w-full h-full text-muted-foreground group-hover:text-cylon-red transition-all scale-110" />
            </div>
            <h3
              class="text-2xl font-bold font-bangla mb-4 group-hover:text-cylon-red transition-colors text-foreground">
              এঙ্গেজমেন্ট</h3>
            <p
              class="text-muted-foreground font-bangla-body leading-relaxed group-hover:text-foreground/70 transition-colors">
              নতুন সম্পর্কের শুরুটা হোক জাঁকজমকপূর্ণ ও স্মরণীয়। আমরা সাজাই আপনার স্বপ্নের মতো করে।</p>
          </div>

          <!-- Service 2: Wedding -->
          <div
            class="group relative glass-card p-12 rounded-[2.5rem] border-border metallic-surface overflow-hidden transition-all duration-700 hover:translate-y-[-10px] hover:border-cylon-red/30 bg-muted/50">
            <div class="absolute -top-12 -right-12 w-32 h-32 bg-cylon-red/10 rounded-full blur-[60px]" />
            <div class="mb-8 p-4 w-16 h-16 rounded-2xl bg-cylon-red/10 border border-cylon-red/30">
              <Globe class="w-full h-full text-cylon-red scale-110" />
            </div>
            <h3 class="text-2xl font-bold font-bangla mb-4 text-foreground">বিবাহ উৎসব</h3>
            <p class="text-muted-foreground font-bangla-body leading-relaxed">বাঙালির চিরাচরিত ঐতিহ্য আর আধুনিক লাক্সারি
              ফিচারের এক অপূর্ব সমন্বয় আমাদের প্রতিটি ওয়েডিং ইভেন্টে।</p>
          </div>

          <!-- Service 3: Corporate -->
          <div
            class="group relative glass-card p-12 rounded-[2.5rem] border-border metallic-surface overflow-hidden transition-all duration-700 hover:translate-y-[-10px] hover:border-cylon-red/30">
            <div
              class="absolute -top-12 -right-12 w-32 h-32 bg-cylon-red/5 rounded-full blur-[60px] group-hover:bg-cylon-red/10 transition-all" />
            <div
              class="mb-8 p-4 w-16 h-16 rounded-2xl bg-muted border border-border group-hover:border-cylon-red/50 transition-colors">
              <Shield class="w-full h-full text-muted-foreground group-hover:text-cylon-red transition-all scale-110" />
            </div>
            <h3
              class="text-2xl font-bold font-bangla mb-4 group-hover:text-cylon-red transition-colors text-foreground">
              কর্পোরেট ইভেন্ট
            </h3>
            <p
              class="text-muted-foreground font-bangla-body leading-relaxed group-hover:text-foreground/70 transition-colors">
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
          <h2 class="text-4xl md:text-5xl font-bold font-bangla tracking-tight text-foreground">আমাদের আগামী কার্যক্রম
          </h2>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div v-for="i in 3" :key="i"
            class="group aspect-video glass-card rounded-2xl flex flex-col items-center justify-center opacity-40 hover:opacity-100 transition-all duration-700 cursor-pointer border-dashed border-2 border-border hover:border-cylon-red/50 bg-card/20">
            <div
              class="w-12 h-12 rounded-full border border-border flex items-center justify-center mb-4 group-hover:border-cylon-red/50 transition-colors">
              <Calendar class="w-6 h-6 text-muted-foreground group-hover:text-cylon-red transition-colors" />
            </div>
            <span
              class="text-xs tracking-[0.4em] text-muted-foreground group-hover:text-foreground transition-colors uppercase font-bold">Coming
              Soon</span>
          </div>
        </div>
      </div>
    </section>

    <!-- TESTIMONIALS SECTION -->
    <section class="py-32 bg-muted/10 border-t border-border">
      <div class="container mx-auto px-4 lg:px-8">
        <div class="flex flex-col items-center text-center mb-24 space-y-4">
          <span class="text-[10px] uppercase tracking-[0.4em] font-bold text-cylon-red">{{ t('home.testimonials')
          }}</span>
          <h2 class="text-5xl md:text-7xl font-bangla font-bold tracking-tight text-foreground">{{
            t('home.testimonials') }}</h2>
          <p class="text-muted-foreground text-lg font-bangla-body font-light">{{ t('home.testimonials_desc') }}</p>
        </div>

        <!-- Testimonial Card -->
        <div class="max-w-4xl mx-auto">
          <div
            class="relative p-16 rounded-[3rem] border border-border bg-card/40 backdrop-blur-3xl transition-all duration-500 hover:border-cylon-red/20 group metallic-surface">
            <!-- Quote Icon -->
            <div class="absolute -top-10 left-16">
              <div
                class="w-20 h-20 rounded-3xl bg-surface border border-white/10 flex items-center justify-center metallic-surface group-hover:border-cylon-red/50 transition-all shadow-2xl">
                <Quote class="w-10 h-10 text-cylon-red/50 group-hover:text-cylon-red" />
              </div>
            </div>

            <!-- Content -->
            <div class="space-y-12">
              <p class="text-3xl font-bangla-body leading-[1.6] text-foreground font-light italic tracking-tight">
                "{{ currentTestimonial?.text }}"
              </p>

              <div class="flex items-center justify-between pt-8 border-t border-white/5">
                <div class="flex items-center gap-6">
                  <div class="relative">
                    <NuxtImg :src="currentTestimonial?.image"
                      class="w-16 h-16 rounded-2xl object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
                    <div
                      class="absolute -bottom-2 -right-2 w-6 h-6 rounded-lg bg-cylon-red flex items-center justify-center">
                      <Sparkles class="w-3 h-3 text-white" />
                    </div>
                  </div>
                  <div>
                    <p class="text-xl font-bold text-foreground font-bangla tracking-tight">{{
                      currentTestimonial?.name }}</p>
                    <p class="text-xs uppercase tracking-[0.3em] text-muted-foreground font-bold mt-1">{{
                      currentTestimonial?.title }}</p>
                  </div>
                </div>

                <!-- Navigation Controls -->
                <div class="flex gap-4">
                  <button @click="nextTestimonial"
                    class="w-16 h-16 rounded-2xl border border-border hover:border-cylon-red/30 hover:bg-cylon-red/5 flex items-center justify-center transition-all duration-500 group/btn">
                    <ChevronRight
                      class="w-6 h-6 text-muted-foreground group-hover/btn:text-cylon-red group-hover/btn:translate-x-1 transition-all" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          <!-- Progress Dots -->
          <div class="flex items-center justify-center gap-4 mt-12">
            <button v-for="(_, idx) in testimonials" :key="idx" @click="currentTestimonialIndex = idx"
              class="h-1 rounded-full transition-all duration-700"
              :class="idx === currentTestimonialIndex ? 'bg-cylon-red w-16' : 'bg-white/10 w-8 hover:bg-white/20'" />
          </div>
        </div>
      </div>
    </section>

    <!-- FINAL CTA SECTION -->
    <section class="py-40 relative overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-t from-cylon-red/10 via-transparent to-transparent" />
      <div
        class="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-cylon-red/10 blur-[150px] rounded-full" />

      <div class="container mx-auto px-4 relative z-10">
        <div class="text-center space-y-12 max-w-4xl mx-auto">
          <div class="inline-block h-1 w-24 bg-cylon-red mb-4" />
          <h2 class="text-6xl md:text-8xl font-bangla font-bold tracking-tighter text-foreground">{{
            t('home.ready_to_celebrate') }}
          </h2>
          <p class="text-2xl text-muted-foreground font-bangla-body font-light leading-relaxed">{{ t('home.ready_desc')
          }}</p>

          <div class="pt-8">
            <NuxtLink to="/donation"
              class="group relative inline-flex items-center gap-6 px-16 py-6 bg-cylon-red text-white rounded-2xl font-bold uppercase tracking-[0.3em] text-sm hover:cylon-glow-lg transition-all duration-500 hover:scale-[1.02]">
              {{ t('common.getInTouch') }}
              <ArrowRight class="w-6 h-6 group-hover:translate-x-3 transition-transform duration-500" />
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.animate-fade-in-up {
  animation: fadeInUp 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards;
  opacity: 0;
}

.delay-100 {
  animation-delay: 200ms;
}

.delay-200 {
  animation-delay: 400ms;
}

.delay-300 {
  animation-delay: 600ms;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(60px);
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
    opacity: 0.2;
  }

  50% {
    transform: translateX(100%);
    opacity: 0.6;
  }
}

.animate-cylon-scan {
  background: linear-gradient(90deg, transparent, var(--cylon-red), transparent);
  animation: cylon-scan 5s ease-in-out infinite;
}

/* Custom Smooth Scrollbar */
::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar-track {
  background: #0A0A0A;
}

::-webkit-scrollbar-thumb {
  background: #1A1A1A;
  border: 3px solid #0A0A0A;
  border-radius: 10px;
}

::-webkit-scrollbar-thumb:hover {
  background: var(--cylon-red);
}
</style>