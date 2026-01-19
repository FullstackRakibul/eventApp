<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
  <div class="min-h-screen bg-background pt-32 pb-20">
    <div class="container mx-auto px-4 lg:px-8">
      <div class="mb-16">
        <div class="h-1 w-12 bg-cylon-red mb-6" />
        <h1
          class="text-4xl lg:text-7xl font-bold font-bangla tracking-tighter uppercase transition-all duration-500 hover:tracking-widest">
          Digital Anjali
        </h1>
        <p class="text-muted-foreground mt-4 font-bangla-body">ডিজিটাল মাধ্যমে পুষ্পাঞ্জলি ও মন্ত্র পাঠ।</p>
      </div>

      <div class="max-w-4xl mx-auto space-y-12">
        <div
          class="glass-card p-12 rounded-[3rem] border-border bg-card/30 backdrop-blur-3xl text-center metallic-surface relative overflow-hidden">
          <div class="absolute -top-12 left-1/2 -translate-x-1/2 w-48 h-48 bg-cylon-red/10 blur-[80px] rounded-full" />
          <h2 class="text-3xl font-bold font-bangla mb-10 text-cylon-red">পুষ্পাঞ্জলি মন্ত্র</h2>
          <div class="space-y-8 font-bangla text-2xl leading-relaxed text-foreground/90 font-light">
            <p>ওঁ জয়ন্তী মঙ্গলা কালী ভদ্রকালী কপালিনী।</p>
            <p>দুর্গা শিবা ক্ষমা ধাত্রী স্বাহা স্বধা নমোহস্তু তে।।</p>
            <p>এষ স চন্দন পুষ্পবিল্বপত্রাঞ্জলি নমো ভগবত্যৈ দুর্গায়ৈ নমঃ।।</p>
          </div>

          <button
            class="mt-16 px-12 py-5 bg-cylon-red rounded-full font-bold uppercase tracking-[0.2em] text-sm hover:cylon-glow-lg transition-all duration-500">
            Start Audio Mantra
          </button>
        </div>
      </div>
    </div>
  </div>
</template>