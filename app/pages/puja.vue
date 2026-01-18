<script setup lang="ts">
const schedule = [
  { day: 'ষষ্ঠী', date: 'সকাল ৯:০০ - সন্ধ্যা ৭:০০', activity: 'বোধন ও আমন্ত্রণ' },
  { day: 'সপ্তমী', date: 'সকাল ৮:০০ - রাত ১০:০০', activity: 'নবপত্রিকা প্রবেশ ও স্থাপন' },
  { day: 'অষ্টমী', date: 'ভোর ৪:০০ - রাত ১১:০০', activity: 'সকাল ১০টায় মহাষ্টমী পূজা ও পুষ্পাঞ্জলি' },
  { day: 'নবমী', date: 'সকাল ৯:০০ - রাত ৯:০০', activity: 'মহানবমী পূজা ও ধুনুচি নাচ' },
  { day: 'দশমী', date: 'সকাল ৮:০০ - সন্ধ্যা ৬:০০', activity: 'প্রতিমা বিসর্জন ও বিজয়া সম্মিলনী' }
]
</script>

<template>
  <div class="min-h-screen bg-background pt-32 pb-20">
    <div class="container mx-auto px-4 lg:px-8">
      <div class="mb-16">
        <div class="h-1 w-12 bg-cylon-red mb-6" />
        <h1 class="text-4xl lg:text-7xl font-bold font-bangla tracking-tighter">
          পূজা সময়সূচী
        </h1>
        <p class="text-muted-foreground mt-4 font-bangla-body">২০২৬ সালের শারদীয় দুর্গোৎসবের পূর্ণাঙ্গ নির্ঘণ্ট।</p>
      </div>

      <div class="space-y-6">
        <div v-for="item in schedule" :key="item.day"
          class="group glass-card p-10 rounded-2xl border-white/5 bg-surface/30 hover:border-cylon-red/30 transition-all duration-500 metallic-surface relative overflow-hidden">
          <!-- Animated Scan Line -->
          <div
            class="absolute inset-0 bg-gradient-to-r from-transparent via-cylon-red/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />

          <div class="flex flex-col md:flex-row md:items-center justify-between gap-8 relative z-10">
            <div class="space-y-2">
              <span class="text-cylon-red font-bold uppercase tracking-[0.4em] text-xs">Day</span>
              <h3 class="text-3xl font-bold font-bangla">{{ item.day }}</h3>
            </div>
            <div class="space-y-2 md:text-center">
              <span class="text-xs uppercase tracking-[0.4em] font-bold text-muted-foreground">Time Slot</span>
              <p class="text-xl font-bangla-body">{{ item.date }}</p>
            </div>
            <div class="space-y-2 md:text-right">
              <span class="text-xs uppercase tracking-[0.4em] font-bold text-muted-foreground">Main Event</span>
              <p class="text-xl font-bangla-body font-light">{{ item.activity }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>