<script setup lang="ts">
const { t } = useI18n()

const members = [
  { name: 'রাকিবুল হাসান', role: 'সভাপতি', since: '২০২০' },
  { name: 'শামীম আহমেদ', role: 'সাধারণ সম্পাদক', since: '২০২১' },
  { name: 'তনয় দে', role: 'কোষাধ্যক্ষ', since: '২০২২' },
  { name: 'প্রসেনজিৎ পাল', role: 'সাংস্কৃতিক সম্পাদক', since: '২০২০' }
]
</script>

<template>
  <div class="min-h-screen bg-background pt-32 pb-20">
    <div class="container mx-auto px-4 lg:px-8">
      <div class="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8">
        <div>
          <div class="h-1 w-12 bg-cylon-red mb-6" />
          <h1 class="text-4xl lg:text-7xl font-bold font-bangla tracking-tighter">
            সদস্য তালিকা
          </h1>
          <p class="text-muted-foreground mt-4 font-bangla-body">ইভেন্টপ্লাস পরিবারের সম্মানিত সকল সদস্যবৃন্দ।</p>
        </div>
        <div class="flex gap-4">
          <!-- Modern Search Placeholder -->
          <div
            class="px-6 py-3 bg-surface/50 border border-white/5 rounded-full flex items-center gap-3 backdrop-blur-md">
            <div class="w-2 h-2 rounded-full bg-cylon-red animate-pulse" />
            <span class="text-xs uppercase tracking-widest text-muted-foreground font-bold font-sans">Search
              Members</span>
          </div>
        </div>
      </div>

      <div class="glass-card rounded-3xl border-white/5 overflow-hidden metallic-surface">
        <table class="w-full text-left border-collapse">
          <thead>
            <tr class="border-b border-white/5 bg-white/5">
              <th class="px-8 py-6 text-xs uppercase tracking-[0.2em] font-bold text-muted-foreground">নাম</th>
              <th class="px-8 py-6 text-xs uppercase tracking-[0.2em] font-bold text-muted-foreground">পদবী</th>
              <th class="px-8 py-6 text-xs uppercase tracking-[0.2em] font-bold text-muted-foreground">সদস্য শুরু</th>
              <th class="px-8 py-6 text-xs uppercase tracking-[0.2em] font-bold text-muted-foreground">অ্যাকশন</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-white/5">
            <tr v-for="member in members" :key="member.name" class="group hover:bg-white/5 transition-colors">
              <td class="px-8 py-6">
                <div class="flex items-center gap-4">
                  <div
                    class="w-10 h-10 rounded-lg bg-surface flex items-center justify-center border border-white/10 group-hover:border-cylon-red/50 transition-all font-bangla text-xl">
                    {{ member.name[0] }}
                  </div>
                  <span class="font-bangla text-lg">{{ member.name }}</span>
                </div>
              </td>
              <td class="px-8 py-6 font-bangla-body font-light">{{ member.role }}</td>
              <td class="px-8 py-6 font-bangla-body font-light">{{ member.since }}</td>
              <td class="px-8 py-6">
                <button
                  class="text-xs uppercase tracking-widest font-bold text-cylon-red hover:underline transition-all">Profile</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>