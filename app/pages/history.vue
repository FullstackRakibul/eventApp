<script setup lang="ts">
const { t, locale } = useI18n()

const timelineEvents = [
  {
    year: '২০০৫',
    yearEn: '2005',
    title: 'প্রতিষ্ঠা',
    titleEn: 'Founding',
    description: 'ঢাকার বুকে একটি ছোট পরিসরে পূজা আয়োজনের মাধ্যমে আমাদের যাত্রা শুরু।',
    descriptionEn: 'Our journey began with a small-scale Puja celebration in Dhaka.'
  },
  {
    year: '২০১০',
    yearEn: '2010',
    title: 'সমাজকল্যাণ সম্প্রসারণ',
    titleEn: 'Social Welfare Expansion',
    description: 'পূজা আয়োজনের পাশাপাশি দুস্থ শিশুদের শিক্ষাদান কার্যক্রম চালু হয়।',
    descriptionEn: 'Educational programs for underprivileged children were launched.'
  },
  {
    year: '২০১৫',
    yearEn: '2015',
    title: 'সাংস্কৃতিক কেন্দ্র',
    titleEn: 'Cultural Center',
    description: 'নিজস্ব সাংস্কৃতিক কেন্দ্র এবং পাঠাগার উদ্বোধন।',
    descriptionEn: 'Opening of our own cultural center and library.'
  },
  {
    year: '২০২০',
    yearEn: '2020',
    title: 'ডিজিটাল রূপান্তর',
    titleEn: 'Digital Transformation',
    description: 'পুরো কার্যক্রমকে ডিজিটাল প্ল্যাটফর্মে নিয়ে আসা হয়।',
    descriptionEn: 'All activities were migrated to digital platforms.'
  }
]
</script>

<template>
  <div class="min-h-screen bg-background pt-32 pb-20">
    <LayoutSectionWrapper :title="locale === 'bn' ? 'আমাদের ইতিহাস' : 'Our History'"
      :subtitle="locale === 'bn' ? 'দুই দশকের ঐতিহ্য এবং গৌরবের পথচলা।' : 'Two decades of heritage and excellence.'"
      center divider>
      <div class="max-w-4xl mx-auto space-y-12">
        <div v-for="(event, index) in timelineEvents" :key="index" class="relative group animate-fade-in-up"
          :style="{ animationDelay: `${index * 150}ms` }">
          <!-- Timeline Line -->
          <div v-if="index !== timelineEvents.length - 1"
            class="absolute left-6 top-16 bottom-[-48px] w-px bg-border/20 group-hover:bg-cylon-red/30 transition-colors" />

          <!-- Event Content -->
          <div class="flex gap-10">
            <!-- Year Circle -->
            <div
              class="relative z-10 w-12 h-12 rounded-full glass-card flex items-center justify-center border border-border/10 group-hover:border-cylon-red/50 group-hover:cylon-glow transition-all duration-500 flex-shrink-0">
              <div class="w-2 h-2 rounded-full bg-cylon-red group-hover:scale-150 transition-transform" />
            </div>

            <!-- Card -->
            <div class="flex-1 pb-12">
              <div class="text-[10px] uppercase tracking-[0.3em] font-bold text-cylon-red mb-2">
                {{ locale === 'bn' ? event.year : event.yearEn }}
              </div>
              <h3 class="text-2xl font-bold font-bangla mb-4">
                {{ locale === 'bn' ? event.title : event.titleEn }}
              </h3>
              <p class="text-muted-foreground font-bangla-body leading-relaxed max-w-xl">
                {{ locale === 'bn' ? event.description : event.descriptionEn }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </LayoutSectionWrapper>
  </div>
</template>