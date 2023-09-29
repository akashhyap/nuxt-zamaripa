<template>
  <div v-editable="blok" class="mt-16 mb-20 container mx-auto" :class="maxWidth">
    <StoryblokComponent v-for="blok in blok.body" :key="blok._uid" :blok="blok" />
  </div>
</template>

<script setup>
const props = defineProps({ blok: Object });
const maxWidth = computed(() => {
    return props.blok.maxWidth
})
</script>
