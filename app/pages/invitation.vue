<script setup lang="ts">
import { QrCode } from 'lucide-vue-next'
</script>

<template>
  <div class="min-h-screen bg-background pt-32 pb-20">
    <div class="container mx-auto px-4 lg:px-8">
      <div class="mb-16">
        <div class="h-1 w-12 bg-cylon-red mb-6" />
        <h1 class="text-4xl lg:text-7xl font-bold font-bangla tracking-tighter">
          ডিজিটাল ইনভাইটেশন
        </h1>
        <p class="text-muted-foreground mt-4 font-bangla-body">আপনার ডিজিটাল আমন্ত্রণপত্র জেনারেট করুন।</p>
      </div>

      <div class="flex flex-col lg:flex-row gap-12 items-center justify-center">
        <!-- Digital Card Preview -->
        <div
          class="w-full max-w-md aspect-[3/4] glass-card p-1 rounded-[3rem] border-cylon-red/20 metallic-surface relative overflow-hidden group">
          <div class="absolute inset-0 bg-gradient-to-br from-cylon-red/10 to-transparent" />
          <div
            class="h-full border border-white/10 rounded-[2.9rem] p-12 flex flex-col items-center justify-between text-center relative z-10">
            <div class="space-y-4">
              <span class="text-xs uppercase tracking-[0.4em] text-cylon-red font-bold">Official Invitation</span>
              <h2 class="text-4xl font-bold font-bangla leading-tight">শারদীয় দুর্গোৎসব <br /> ২০২৬</h2>
            </div>

            <div class="w-32 h-32 bg-white/5 rounded-2xl border border-white/10 flex items-center justify-center p-4">
              <QrCode class="w-full h-full text-white/40" />
            </div>

            <div class="space-y-2">
              <p class="font-bangla-body text-sm">স্থান: ইভেন্টপ্লাস গ্রাউন্ডস</p>
              <p class="font-bangla-body text-sm font-bold">তারিখ: ২০-২৫ অক্টোবর, ২০২৬</p>
            </div>
          </div>
        </div>

        <!-- Action Panel -->
        <div class="max-w-md space-y-8">
          <h3 class="text-3xl font-bold font-bangla">আপনার কার্ড কাস্টমাইজ করুন</h3>
          <p class="text-muted-foreground font-bangla-body leading-relaxed">আপনার নাম এবং মোবাইল নাম্বার দিয়ে একটি অনন্য
            QR কোড যুক্ত ইনভাইটেশন কার্ড তৈরি করুন যা প্রবেশ পথে স্ক্যান করা হবে।</p>

          <div class="space-y-4">
            <input type="text"
              class="w-full bg-surface/50 border border-white/10 rounded-xl px-6 py-4 outline-none focus:border-cylon-red transition-all"
              placeholder="আপনার নাম" />
            <button
              class="w-full bg-cylon-red text-white py-5 rounded-2xl font-bold uppercase tracking-widest hover:cylon-glow transition-all">Generate
              My Card</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>