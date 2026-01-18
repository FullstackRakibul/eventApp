<script setup lang="ts">
const years = ['২০২৫', '২০২৪', '২০২৩', '২০২২', '২০২১']
</script>

<template>
  <div class="min-h-screen bg-background pt-32 pb-20">
    <div class="container mx-auto px-4 lg:px-8">
      <div class="mb-16">
        <div class="h-1 w-12 bg-cylon-red mb-6" />
        <h1 class="text-4xl lg:text-7xl font-bold font-bangla tracking-tighter">
          স্মরণিকা
        </h1>
        <p class="text-muted-foreground mt-4 font-bangla-body">আমাদের বার্ষিক ডিজিটাল ম্যাগাজিন এবং আর্কাইভ।</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        <div v-for="year in years" :key="year"
          class="group glass-card p-1 rounded-3xl border-white/5 bg-surface/30 hover:border-cylon-red/30 transition-all duration-500">
          <div
            class="aspect-[3/4] metallic-surface rounded-[1.4rem] flex flex-col items-center justify-center p-8 text-center relative overflow-hidden">
            <!-- Cylon Red Glow behind the year -->
            <div
              class="absolute w-32 h-32 bg-cylon-red/10 blur-[60px] rounded-full group-hover:bg-cylon-red/20 transition-all duration-500" />

            <h3
              class="text-6xl font-bold font-bangla mb-4 relative z-10 group-hover:scale-110 transition-transform duration-500">
              {{ year }}</h3>
            <p class="text-[10px] uppercase tracking-[0.4em] font-bold text-muted-foreground relative z-10">Digital
              Issue</p>

            <button
              class="mt-12 px-8 py-3 bg-white/5 border border-white/10 rounded-full text-xs uppercase tracking-widest font-bold hover:bg-cylon-red hover:border-cylon-red transition-all duration-500 relative z-10">
              View Archive
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>