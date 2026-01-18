<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
  <div class="min-h-screen bg-background pt-32 pb-20">
    <div class="container mx-auto px-4 lg:px-8">
      <div class="max-w-4xl">
        <div class="h-1 w-12 bg-cylon-red mb-8" />
        <h1
          class="text-5xl lg:text-8xl font-bold font-bangla tracking-tighter mb-8 transition-all hover:text-cylon-red duration-500">
          আমাদের সম্পর্কে
        </h1>
        <div class="space-y-8 text-xl text-muted-foreground font-bangla-body leading-relaxed font-light">
          <p>
            ইভেন্টপ্লাস বাংলাদেশের একটি প্রিমিয়াম ইভেন্ট ম্যানেজমেন্ট সংস্থা, যা ঐতিহ্য এবং আধুনিক প্রযুক্তির এক অনন্য
            মিশেল। আমরা শুধু অনুষ্ঠান আয়োজন করি না, আমরা তৈরি করি অবিস্মরণীয় স্মৃতি।
          </p>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-8 py-12">
            <div class="glass-card p-8 rounded-2xl border-white/5 bg-surface/30">
              <h3 class="text-white font-bold text-2xl mb-4">আমাদের লক্ষ্য</h3>
              <p class="text-base">সাংস্কৃতিক ঐতিহ্যকে আধুনিক প্রজন্মের কাছে আকর্ষণীয় করে তোলা এবং উচ্চমানের ইভেন্ট
                অভিজ্ঞতা প্রদান করা।</p>
            </div>
            <div class="glass-card p-8 rounded-2xl border-white/5 bg-surface/30">
              <h3 class="text-white font-bold text-2xl mb-4">আমাদের ভিশন</h3>
              <p class="text-base">বাংলাদেশের ইভেন্ট শিল্পে প্রযুক্তির ব্যবহারে নেতৃত্ব দেওয়া এবং বিশ্বমানের সেবামূলক
                প্রতিষ্ঠান হওয়া।</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>