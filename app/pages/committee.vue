<script setup lang="ts">
import { ref, computed } from 'vue'
import { Search, Phone, Mail, Award, Shield, Star, Users } from 'lucide-vue-next'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'

const { t, locale } = useI18n()

// Committee data structure
const committees = ref([
  {
    id: 1,
    name: 'নির্বাহী সমিতি',
    nameEn: 'Executive Committee',
    description: 'সংস্থার সর্বোচ্চ সিদ্ধান্ত গ্রহণকারী কর্তৃপক্ষ',
    descriptionEn: 'The highest decision-making authority',
    icon: Shield,
    members: [
      { id: 101, name: 'রহিম আহমেদ', nameEn: 'Rahim Ahmed', designation: 'সভাপতি', designationEn: 'President', email: 'rahim@eventbee.com', phone: '+880-1234-567890' },
      { id: 102, name: 'ফাতিমা বেগম', nameEn: 'Fatima Begum', designation: 'সহ-সভাপতি', designationEn: 'Vice President', email: 'fatima@eventbee.com', phone: '+880-1234-567891' },
      { id: 103, name: 'করিম খান', nameEn: 'Karim Khan', designation: 'সাধারণ সম্পাদক', designationEn: 'General Secretary', email: 'karim@eventbee.com', phone: '+880-1234-567892' },
      { id: 104, name: 'সালমা খাতুন', nameEn: 'Salma Khatun', designation: 'কোষাধ্যক্ষ', designationEn: 'Treasurer', email: 'salma@eventbee.com', phone: '+880-1234-567893' }
    ]
  },
  {
    id: 2,
    name: 'দুর্গা পূজা সাব-কমিটি',
    nameEn: 'Durga Puja Sub-committee',
    description: 'পূজা অনুষ্ঠান ব্যবস্থাপনা',
    descriptionEn: 'Puja event management',
    icon: Star,
    members: [
      { id: 201, name: 'জামিল হোসেন', nameEn: 'Jamil Hosen', designation: 'সমন্বয়ক', designationEn: 'Coordinator', email: 'jamil@eventbee.com', phone: '+880-1234-567894' },
      { id: 202, name: 'রিনা দাস', nameEn: 'Rina Das', designation: 'সহ-সমন্বয়ক', designationEn: 'Co-Coordinator', email: 'rina@eventbee.com', phone: '+880-1234-567895' }
    ]
  }
])

const searchQuery = ref('')
const activeFilter = ref<number | null>(null)

const filteredCommittees = computed(() => {
  let result = committees.value

  if (activeFilter.value) {
    result = result.filter(c => c.id === activeFilter.value)
  }

  if (searchQuery.value) {
    const query = searchQuery.value.toLowerCase()
    result = result.map(committee => ({
      ...committee,
      members: committee.members.filter(m =>
        m.name.toLowerCase().includes(query) ||
        m.nameEn.toLowerCase().includes(query) ||
        m.designation.toLowerCase().includes(query) ||
        m.designationEn.toLowerCase().includes(query)
      )
    })).filter(c => c.members.length > 0)
  }

  return result
})

const getInitials = (name: string) => name.split(' ').map(n => n[0]).join('').toUpperCase()
</script>

<template>
  <div class="min-h-screen bg-background pt-32 pb-20">
    <!-- Minimalism Background -->
    <div class="fixed inset-0 z-0 pointer-events-none opacity-20">
      <div class="absolute top-0 right-0 w-[500px] h-[500px] bg-cylon-red/10 blur-[150px]" />
      <div class="absolute bottom-0 left-0 w-[500px] h-[500px] bg-metallic/5 blur-[150px]" />
    </div>

    <div class="container relative z-10 mx-auto px-4 lg:px-8">
      <!-- Header -->
      <div class="max-w-3xl mb-20 animate-fade-in-up">
        <h1 class="text-4xl md:text-6xl font-bold font-bangla mb-6 tracking-tight">
          {{ locale === 'bn' ? 'আমাদের কমিটিসমূহ' : 'Our Committees' }}
        </h1>
        <p class="text-lg text-muted-foreground font-bangla-body leading-relaxed">
          সমাজের কল্যাণে এবং আমাদের ঐতিহ্যকে ধরে রাখতে যারা নিরলস কাজ করে যাচ্ছেন।
        </p>
      </div>

      <!-- Controls -->
      <div class="flex flex-col md:flex-row gap-6 mb-16 animate-fade-in-up delay-100">
        <div class="relative flex-1 max-w-md">
          <Search class="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input v-model="searchQuery" placeholder="Search members..."
            class="pl-10 h-12 bg-muted/50 border-border focus:border-cylon-red/30 transition-all rounded-xl" />
        </div>

        <div class="flex flex-wrap gap-2">
          <button @click="activeFilter = null" :class="[
            'px-6 h-12 rounded-xl text-sm font-bold transition-all duration-300',
            activeFilter === null ? 'bg-cylon-red text-white' : 'glass-card text-muted-foreground hover:text-white'
          ]">
            All
          </button>
          <button v-for="c in committees" :key="c.id" @click="activeFilter = c.id" :class="[
            'px-6 h-12 rounded-xl text-sm font-bold transition-all duration-300',
            activeFilter === c.id ? 'bg-cylon-red text-white' : 'glass-card text-muted-foreground hover:text-white'
          ]">
            {{ locale === 'bn' ? c.name : c.nameEn }}
          </button>
        </div>
      </div>

      <!-- Committee Sections -->
      <div v-auto-animate class="space-y-24">
        <div v-for="committee in filteredCommittees" :key="committee.id" class="animate-fade-in-up">
          <div class="flex items-center gap-4 mb-10">
            <div class="w-12 h-12 rounded-xl bg-card border border-cylon-red/20 flex items-center justify-center">
              <component :is="committee.icon" class="w-6 h-6 text-cylon-red" />
            </div>
            <div>
              <h2 class="text-2xl font-bold font-bangla">{{ locale === 'bn' ? committee.name : committee.nameEn }}</h2>
              <p class="text-sm text-muted-foreground font-bangla-body">{{ locale === 'bn' ? committee.description :
                committee.descriptionEn }}</p>
            </div>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div v-for="m in committee.members" :key="m.id" class="group">
              <Card
                class="glass-card hover:border-cylon-red/30 hover:translate-y-[-5px] transition-all duration-500 overflow-hidden">
                <!-- Avatar -->
                <div
                  class="relative h-24 bg-gradient-to-br from-muted to-background flex items-center justify-center border-b border-border overflow-hidden">
                  <div class="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity bg-cylon-red" />
                  <div
                    class="w-14 h-14 rounded-full bg-background border border-border flex items-center justify-center text-sm font-bold text-muted-foreground group-hover:text-cylon-red group-hover:border-cylon-red/50 transition-all duration-500 z-10">
                    {{ getInitials(m.name) }}
                  </div>
                </div>

                <CardContent class="p-6 space-y-4">
                  <div>
                    <h3 class="font-bold text-foreground font-bangla group-hover:text-cylon-red transition-colors">
                      {{ locale === 'bn' ? m.name : m.nameEn }}
                    </h3>
                    <p class="text-[10px] uppercase tracking-widest text-cylon-red mt-1">
                      {{ locale === 'bn' ? m.designation : m.designationEn }}
                    </p>
                  </div>

                  <div class="pt-4 border-t border-border space-y-2">
                    <a :href="`mailto:${m.email}`"
                      class="flex items-center gap-3 text-xs text-muted-foreground hover:text-cylon-red transition-colors">
                      <Mail class="w-3 h-3" />
                      {{ m.email }}
                    </a>
                    <a :href="`tel:${m.phone}`"
                      class="flex items-center gap-3 text-xs text-muted-foreground hover:text-cylon-red transition-colors">
                      <Phone class="w-3 h-3" />
                      {{ m.phone }}
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>