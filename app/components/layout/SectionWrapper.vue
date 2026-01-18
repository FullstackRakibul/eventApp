<script setup lang="ts">
defineProps<{
  title?: string
  subtitle?: string
  center?: boolean
  divider?: boolean
}>()
</script>

<template>
  <section class="py-24 lg:py-32 relative overflow-hidden">
    <div class="container mx-auto px-4 lg:px-8">
      <!-- Section Header -->
      <div v-if="title || subtitle" :class="[
        'max-w-3xl mb-16 lg:mb-24 space-y-4 animate-fade-in-up',
        center ? 'mx-auto text-center' : ''
      ]">
        <div v-if="divider"
          :class="['h-px w-24 bg-gradient-to-r from-transparent via-cylon-red to-transparent mb-8', center ? 'mx-auto' : '']" />
        <h2 v-if="title" class="text-3xl md:text-5xl font-bold font-bangla tracking-tight">
          {{ title }}
        </h2>
        <p v-if="subtitle" class="text-lg text-muted-foreground font-bangla-body leading-relaxed max-w-2xl"
          :class="center ? 'mx-auto' : ''">
          {{ subtitle }}
        </p>
      </div>

      <!-- Content Slot -->
      <div class="relative z-10">
        <slot />
      </div>
    </div>

    <!-- Minimal Background Glow -->
    <div
      class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cylon-red/5 blur-[150px] pointer-events-none rounded-full" />
  </section>
</template>