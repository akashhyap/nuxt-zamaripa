<template>
  <div v-editable="blok" class="grid_block mt-16 mb-20">
    <div class="container mx-auto px-4 md:px-3 max-w-7xl">
      <div class="mb-12" :class="[blok.right ? 'flex items-center md:justify-between' : 'block']">
        <h2 class="text-5xl font-bold mb-0" :class="alignText">{{ blok.heading }}</h2>
        <NuxtLink v-if="blok.label && blok.right" :to="`/${blok.link?.cached_url}`"
          class="bg-black text-white text-sm px-4 py-3 rounded-md">
          {{ blok.label }}
        </NuxtLink>
      </div>
      <div class="grid gap-12" :class="gridCols">
        <StoryblokComponent v-for="blok in blok.columns" :key="blok._uid" :blok="blok" />
      </div>
      <div v-if="!blok.right" class="text-center mt-10">
        <NuxtLink v-if="blok.label" :to="`/${blok.link?.cached_url}`"
          class="bg-black text-white text-lg px-5 py-4 rounded-md">
          {{ blok.label }}
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({ blok: Object })
const gridCols = computed(() => {
  return props.blok.grid_cols
})
const alignText = computed(() => {
  return props.blok.alignText
})
</script>
