<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
  <div class="min-h-screen bg-background pt-32 pb-20">
    <div class="container mx-auto px-4 lg:px-8">
      <div class="mb-16">
        <div class="h-1 w-12 bg-cylon-red mb-6" />
        <h1 class="text-4xl lg:text-7xl font-bold font-bangla tracking-tighter">
          ফটো গ্যালারি
        </h1>
        <p class="text-muted-foreground mt-4 font-bangla-body">স্মৃতিপটে অমলিন আমাদের বিগত ইভেন্টগুলোর কিছু মুহূর্ত।</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div v-for="i in 9" :key="i"
          class="group relative aspect-video rounded-3xl overflow-hidden glass-card border-white/5 bg-surface/30 cursor-pointer">
          <div
            class="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
          <div
            class="absolute bottom-6 left-6 z-20 transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
            <span class="text-xs uppercase tracking-[0.3em] font-bold text-cylon-red">Durga Puja 2025</span>
          </div>
          <!-- Placeholder image with scan effect -->
          <div class="w-full h-full metallic-surface flex items-center justify-center relative">
            <span class="text-4xl opacity-10 font-bangla">ইভেন্ট{{ i }}</span>
            <div class="absolute inset-0 bg-cylon-red/5 opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>