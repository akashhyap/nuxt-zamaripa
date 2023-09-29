<template>
  <div v-editable="blok"
    class="relative flex items-center justify-center overflow-hidden min-h-[500px] mt-16 mb-20 py-16 mx-auto"
    :class="layout" :style="{ backgroundColor: bgColor }">
    <div class="container mx-auto px-4 md:px-3 max-w-7xl relative z-20">
      <StoryblokComponent v-for="blok in blok.body" :key="blok._uid" :blok="blok" />
    </div>
    <NuxtImg provider="storyblok" v-if="blok?.bgImage?.filename" format="avif" :src="blok?.bgImage?.filename" width="1400"
      height="800" fit="in" class="absolute top-0 left-0 z-0 w-full h-full object-cover" />
    <div v-if="blok?.overlayOpacity" class="absolute top-0 right-0 bottom-0 left-0 w-full h-full z-10"
      :style="{ backgroundColor: overlayColor, opacity: overlayOpacity }"></div>
  </div>
</template>

<script setup>
const props = defineProps({ blok: Object })
const layout = computed(() => {
  return props.blok.layout
})
const bgColor = computed(() => {
  return props.blok.bgColor.color
})
const overlayColor = computed(() => {
  return props.blok.overlayColor.color
})
const overlayOpacity = computed(() => {
  return props.blok.overlayOpacity
})
const overlay = ref(props.blok.overlayColor)

</script>
