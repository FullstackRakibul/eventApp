<script setup lang="ts">
const { t } = useI18n()

const activities = [
  {
    title: 'সরস্বতী পূজা',
    titleEn: 'Saraswati Puja',
    description: 'পরিচালকের উদ্যোগে ও ব্যবস্থাপনায় আগামী ২৩.০১.২০২৬ শুক্রবার সরস্বতী পূজা উদযাপিত হবে।',
    image: 'https://feeds.abplive.com/onecms/images/uploaded-images/2025/10/03/c6cc67cda3f0f81ffa2d07e32a2a01d31759453636962937_original.png?impolicy=abp_cdn&imwidth=1200',
    category: 'Religious'
  },
  {
    title: 'সাংস্কৃতিক মেলবন্ধন',
    titleEn: 'Cultural Evening',
    description: 'সংগীত, নৃত্য এবং নাটকের মাধ্যমে দেশীয় সংস্কৃতি তুলে ধরা।',
    image: 'https://sangbad.net.bd/images/2023/April/15Apr23/fb_images/sangbad_bangla_1681566168.jpg',
    category: 'Cultural'
  },
  {
    title: 'সমাজ কল্যাণমূলক কাজ',
    titleEn: 'Social Welfare',
    description: 'রক্তদান কর্মসূচি এবং দুস্থদের সাহায্যার্থে আমাদের নিরন্তর প্রচেষ্টা।',
    image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2070',
    category: 'Social'
  },
  {
    title: 'শিক্ষা সহায়তা প্রজেক্ট',
    titleEn: 'Education Support',
    description: 'মেধাবী শিক্ষার্থীদের জন্য বৃত্তি এবং শিক্ষা উপকরণ বিতরণ কর্মসূচি।',
    image: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=2073',
    category: 'Education'
  }
]
</script>

<template>
  <div class="min-h-screen bg-background pt-32 pb-20">
    <div class="container mx-auto px-4 lg:px-8">
      <div class="mb-16">
        <div class="h-1 w-12 bg-cylon-red mb-6" />
        <h1 class="text-4xl lg:text-7xl font-bold font-bangla tracking-tighter">
          কার্যক্রমসমূহ
        </h1>
        <p class="text-muted-foreground mt-4 font-bangla-body">ইভেন্টপ্লাস-এর উল্লেখযোগ্য সামাজিক ও সাংস্কৃতিক
          কার্যক্রমসমূহ।</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div v-for="activity in activities" :key="activity.title"
          class="group glass-card rounded-3xl overflow-hidden border-white/5 bg-surface/30 metallic-surface">
          <div class="aspect-video relative overflow-hidden">
            <NuxtImg :src="activity.image" :alt="activity.title"
              class="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-110" />
            <div class="absolute inset-0 bg-gradient-to-t from-deep-black via-transparent to-transparent opacity-60" />
            <div class="absolute top-6 left-6">
              <span
                class="px-3 py-1 bg-cylon-red/20 border border-cylon-red/30 rounded-full text-[10px] uppercase tracking-widest font-bold text-cylon-red backdrop-blur-md">
                {{ activity.category }}
              </span>
            </div>
            <div
              class="absolute inset-x-0 bottom-0 h-1 bg-cylon-red scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />
          </div>
          <div class="p-10 space-y-4">
            <h3 class="text-2xl font-bold font-bangla group-hover:text-cylon-red transition-colors">
              {{ activity.title }}
            </h3>
            <p class="text-muted-foreground font-bangla-body leading-relaxed">
              {{ activity.description }}
            </p>
            <button
              class="pt-4 text-xs uppercase tracking-widest font-bold text-white/50 hover:text-cylon-red transition-colors flex items-center gap-2">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>