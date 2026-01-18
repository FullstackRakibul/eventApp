<script setup lang="ts">
const expenses = [
  { item: 'প্রতিমা নির্মাণ', amount: '৳২,৫০,০০০' },
  { item: 'সজ্জা ও আলো', amount: '৳৮,০০,০০০' },
  { item: 'সাংস্কৃতিক অনুষ্ঠান', amount: '৳৫,০০,০০০' },
  { item: 'নিরাপত্তা ও ব্যবস্থাপনা', amount: '৳১,৫০,০০০' }
]
</script>

<template>
  <div class="min-h-screen bg-background pt-32 pb-20">
    <div class="container mx-auto px-4 lg:px-8">
      <div class="mb-16">
        <div class="h-1 w-12 bg-cylon-red mb-6" />
        <h1 class="text-4xl lg:text-7xl font-bold font-bangla tracking-tighter">
          আয়-ব্যয় বিবরণী
        </h1>
        <p class="text-muted-foreground mt-4 font-bangla-body">পরিচ্ছন্নতা ও স্বচ্ছতার জন্য আমাদের বার্ষিক আর্থিক
          বিবরণী।</p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div
          class="glass-card p-12 rounded-3xl border-white/5 metallic-surface flex flex-col justify-center items-center text-center">
          <h3 class="text-xs uppercase tracking-[0.4em] font-bold text-muted-foreground mb-4">Total Expenditure 2025
          </h3>
          <div class="text-6xl lg:text-8xl font-bold text-cylon-red tracking-tighter">৳১৭.০M</div>
          <div class="mt-8 h-1 w-24 bg-white/10" />
          <p class="mt-8 text-muted-foreground font-bangla-body">সকল খরচ অডিটকৃত এবং অনুমোদিত।</p>
        </div>

        <div class="space-y-4">
          <div v-for="item in expenses" :key="item.item"
            class="flex items-center justify-between p-6 glass-card rounded-2xl border-white/5 bg-surface/30 hover:bg-white/5 transition-colors">
            <span class="font-bangla text-lg">{{ item.item }}</span>
            <span class="font-bold text-white text-xl">{{ item.amount }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>