<script setup lang="ts">
interface Props {
  title?: string
  subtitle?: string
  padded?: boolean
  contained?: boolean
  divider?: boolean
}

withDefaults(defineProps<Props>(), {
  padded: true,
  contained: true,
  divider: false
})
</script>

<template>
  <section :class="['w-full', padded ? 'py-12 lg:py-20' : '']">
    <div :class="['w-full', contained ? 'container mx-auto px-4 lg:px-8' : '']">
      <!-- Section Header -->
      <div v-if="title || subtitle" class="mb-8 lg:mb-12 text-center">
        <h2 v-if="title" class="text-2xl lg:text-4xl font-bold text-foreground font-bangla mb-3">
          {{ title }}
        </h2>
        <p v-if="subtitle" class="text-muted-foreground max-w-2xl mx-auto font-bangla-body">
          {{ subtitle }}
        </p>
        <div v-if="divider" class="heritage-divider w-24 mx-auto mt-6" />
      </div>

      <!-- Content Slot -->
      <slot />
    </div>
  </section>
</template>
