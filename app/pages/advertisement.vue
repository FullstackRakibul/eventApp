<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
  <div class="min-h-screen bg-background pt-32 pb-20">
    <div class="container mx-auto px-4 lg:px-8">
      <div class="mb-16">
        <div class="h-1 w-12 bg-cylon-red mb-6" />
        <h1 class="text-4xl lg:text-7xl font-bold font-bangla tracking-tighter uppercase">
          Advertisement
        </h1>
        <p class="text-muted-foreground mt-4 font-bangla-body">আমাদের স্মরণিকায় আপনার ব্যবসার বিজ্ঞাপন প্রচার করুন।</p>
      </div>

      <div
        class="max-w-3xl mx-auto glass-card p-12 rounded-[2.5rem] border-border metallic-surface relative overflow-hidden">
        <div class="absolute -top-24 -right-24 w-64 h-64 bg-cylon-red/5 rounded-full blur-[100px]" />

        <form class="space-y-8 relative z-10 text-foreground">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="space-y-2">
              <label class="text-xs uppercase tracking-widest text-muted-foreground font-bold">কোম্পানির নাম</label>
              <input type="text"
                class="w-full bg-muted/50 border border-border rounded-xl px-6 py-4 focus:border-cylon-red transition-all outline-none text-foreground"
                placeholder="আপনার কোম্পানির নাম" />
            </div>
            <div class="space-y-2">
              <label class="text-xs uppercase tracking-widest text-muted-foreground font-bold">যোগাযোগের নম্বর</label>
              <input type="tel"
                class="w-full bg-muted/50 border border-border rounded-xl px-6 py-4 focus:border-cylon-red transition-all outline-none text-foreground"
                placeholder="নাম্বার প্রদান করুন" />
            </div>
          </div>

          <div class="space-y-2">
            <label class="text-xs uppercase tracking-widest text-muted-foreground font-bold">বিজ্ঞাপনের ধরন</label>
            <select
              class="w-full bg-muted/50 border border-border rounded-xl px-6 py-4 focus:border-cylon-red transition-all outline-none appearance-none text-foreground">
              <option class="bg-card">ফুল পেজ (Full Page)</option>
              <option class="bg-card">হাফ পেজ (Half Page)</option>
              <option class="bg-card">কভার পেজ (Cover Page)</option>
            </select>
          </div>

          <div class="space-y-2">
            <label class="text-xs uppercase tracking-widest text-muted-foreground font-bold">বার্তা</label>
            <textarea
              class="w-full bg-muted/50 border border-border rounded-xl px-6 py-4 focus:border-cylon-red transition-all outline-none min-h-[150px] text-foreground"
              placeholder="আপনার বিশেষ কোনো তথ্য থাকে লিখে জানান..."></textarea>
          </div>

          <button
            class="w-full bg-cylon-red text-white py-6 rounded-2xl font-bold uppercase tracking-[0.3em] hover:cylon-glow-lg transition-all duration-500">
            Submit Application
          </button>
        </form>
      </div>
    </div>
  </div>
</template>