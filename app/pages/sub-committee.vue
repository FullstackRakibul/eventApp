<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
  <div class="min-h-screen bg-background pt-32 pb-20">
    <div class="container mx-auto px-4 lg:px-8">
      <div class="mb-16">
        <div class="h-1 w-12 bg-cylon-red mb-6" />
        <h1 class="text-4xl lg:text-7xl font-bold font-bangla tracking-tighter">
          উপ-কমিটি
        </h1>
        <p class="text-muted-foreground mt-4 font-bangla-body">বিভিন্ন কার্যক্রমের জন্য নিয়োজিত উপ-কমিটিসমূহ।</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div v-for="i in 4" :key="i"
          class="glass-card p-10 rounded-3xl border-white/5 metallic-surface hover:border-cylon-red/30 transition-all duration-500">
          <h3 class="text-2xl font-bold font-bangla mb-4 border-b border-white/5 pb-4">উপ-কমিটি {{ i }}</h3>
          <ul class="space-y-3 font-bangla-body font-light text-muted-foreground">
            <li v-for="j in 3" :key="j" class="flex items-center gap-3">
              <div class="w-1.5 h-1.5 rounded-full bg-cylon-red" />
              সদস্য নাম {{ j }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>