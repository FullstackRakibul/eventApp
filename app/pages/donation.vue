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
          Donation Box
        </h1>
        <p class="text-muted-foreground mt-4 font-bangla-body">আপনার অবদান আমাদের পথচলাকে ত্বরান্বিত করে।</p>
      </div>

      <div class="max-w-2xl mx-auto">
        <div class="glass-card p-8 md:p-12 rounded-3xl border-border bg-card/30 backdrop-blur-2xl metallic-surface">
          <form class="space-y-6">
            <div class="space-y-2">
              <label class="text-xs uppercase tracking-widest text-muted-foreground font-bold">নাম</label>
              <input type="text"
                class="w-full bg-muted/50 border border-border rounded-lg px-4 py-4 focus:border-cylon-red/50 focus:ring-0 transition-all outline-none text-foreground"
                placeholder="আপনার নাম লিখুন" />
            </div>
            <div class="space-y-2">
              <label class="text-xs uppercase tracking-widest text-muted-foreground font-bold">অ্যামাউন্ট</label>
              <input type="number"
                class="w-full bg-muted/50 border border-border rounded-lg px-4 py-4 focus:border-cylon-red/50 focus:ring-0 transition-all outline-none text-foreground"
                placeholder="৳" />
            </div>
            <button
              class="w-full bg-cylon-red text-white py-5 rounded-xl font-bold uppercase tracking-widest hover:cylon-glow transition-all duration-500 transform hover:scale-[1.02]">
              অনুদানের ধাপ সম্পন্ন করুন
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>