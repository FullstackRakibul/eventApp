<script setup lang="ts">
const faqs = [
  { q: 'কিভাবে সদস্য হওয়া যাবে?', a: 'আমাদের মেম্বারশিপ ফর্ম পূরণ করে এবং কমিটির অনুমোদনের মাধ্যমে সদস্য হওয়া যায়।' },
  { q: 'অনলাইন অনুদান কি নিরাপদ?', a: 'হ্যাঁ, আমরা আধুনিক এনক্রিপশন এবং নিরাপদ পেমেন্ট গেটওয়ে ব্যবহার করি।' },
  { q: 'ইভেন্টে কিভাবে অংশগ্রহণ করা যাবে?', a: 'আমাদের ফেসবুক পেজ ও ওয়েবসাইটে ইভেন্টের রেজিস্ট্রেশন লিংক প্রকাশ করা হয়।' }
]
</script>

<template>
  <div class="min-h-screen bg-background pt-32 pb-20">
    <div class="container mx-auto px-4 lg:px-8">
      <div class="mb-16">
        <div class="h-1 w-12 bg-cylon-red mb-6" />
        <h1 class="text-4xl lg:text-7xl font-bold font-bangla tracking-tighter uppercase">
          Help Center
        </h1>
        <p class="text-muted-foreground mt-4 font-bangla-body">সাধারণ জিজ্ঞাসাসমূহ এবং তথ্যাদি।</p>
      </div>

      <div class="max-w-3xl space-y-4">
        <div v-for="(faq, i) in faqs" :key="i" class="glass-card rounded-2xl border-border bg-card/30 overflow-hidden">
          <details class="group">
            <summary class="flex justify-between items-center p-8 cursor-pointer list-none">
              <span class="text-xl font-bangla font-bold group-open:text-cylon-red transition-colors text-foreground">{{
                faq.q }}</span>
              <div
                class="w-6 h-6 border-2 border-border rounded-full flex items-center justify-center group-open:rotate-180 transition-transform">
                <div class="w-2 h-0.5 bg-foreground" />
              </div>
            </summary>
            <div class="px-8 pb-8 text-muted-foreground font-bangla-body leading-relaxed border-t border-border pt-6">
              {{ faq.a }}
            </div>
          </details>
        </div>
      </div>
    </div>
  </div>
</template>