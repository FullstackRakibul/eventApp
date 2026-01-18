<script setup lang="ts">
const donors = [
  { name: 'আবির চৌধুরী', amount: '৳৫,০০,০০০', date: '২০২৫' },
  { name: 'সঞ্জয় সেন', amount: '৳৩,০০,০০০', date: '২০২৫' },
  { name: 'বিপ্লব সাহা', amount: '৳২,৫০,০০০', date: '২০২৫' }
]
</script>

<template>
  <div class="min-h-screen bg-background pt-32 pb-20">
    <div class="container mx-auto px-4 lg:px-8">
      <div class="mb-16">
        <div class="h-1 w-12 bg-cylon-red mb-6" />
        <h1 class="text-4xl lg:text-7xl font-bold font-bangla tracking-tighter">
          দাতা তালিকা
        </h1>
        <p class="text-muted-foreground mt-4 font-bangla-body">যাঁদের উদারতায় আমাদের এই পথচলা সম্ভব হয়েছে।</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div v-for="donor in donors" :key="donor.name"
          class="glass-card p-10 rounded-3xl border-white/5 metallic-surface text-center hover:border-cylon-red/30 transition-all duration-500">
          <div
            class="w-20 h-20 rounded-full bg-cylon-red/10 border border-cylon-red/30 flex items-center justify-center mx-auto mb-6">
            <span class="text-3xl font-bangla text-cylon-red">{{ donor.name[0] }}</span>
          </div>
          <h3 class="text-2xl font-bold font-bangla mb-2">{{ donor.name }}</h3>
          <p class="text-cylon-red font-bold text-xl mb-4">{{ donor.amount }}</p>
          <div class="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">{{ donor.date }}</div>
        </div>
      </div>
    </div>
  </div>
</template>