<script setup lang="ts">
const news = [
  { title: '২০২৬ সালের দুর্গা পূজা প্রস্তুতি শুরু', date: '১০ জানুয়ারি, ২০২৬' },
  { title: 'সাংস্কৃতিক প্রতিযোগিতার আবেদন গ্রহণ শুরু', date: '০৫ জানুয়ারি, ২০২৬' },
  { title: 'নতুন ওয়েবসাইট উন্মোচন', date: '০১ জানুয়ারি, ২০২৬' }
]
</script>

<template>
  <div class="min-h-screen bg-background pt-32 pb-20">
    <div class="container mx-auto px-4 lg:px-8">
      <div class="mb-16">
        <div class="h-1 w-12 bg-cylon-red mb-6" />
        <h1 class="text-4xl lg:text-7xl font-bold font-bangla tracking-tighter">
          সাম্প্রতিক খবর
        </h1>
        <p class="text-muted-foreground mt-4 font-bangla-body">ইভেন্টপ্লাস এবং সমাজের সর্বশেষ সংবাদসমূহ।</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div v-for="item in news" :key="item.title"
          class="group glass-card p-10 rounded-3xl border-white/5 bg-surface/30 hover:border-cylon-red/30 transition-all duration-500 metallic-surface">
          <span class="text-[10px] uppercase tracking-[0.4em] font-bold text-cylon-red mb-4 block">{{ item.date
            }}</span>
          <h3 class="text-2xl font-bold font-bangla mb-6 group-hover:text-cylon-red transition-colors">{{ item.title }}
          </h3>
          <p class="text-muted-foreground font-bangla-body font-light mb-8">বিস্তারিত পড়ার জন্য নিচে ক্লিক করুন...</p>
          <button
            class="text-white text-xs uppercase tracking-widest font-bold border-b-2 border-cylon-red/20 hover:border-cylon-red transition-all pb-1">Read
            More</button>
        </div>
      </div>
    </div>
  </div>
</template>