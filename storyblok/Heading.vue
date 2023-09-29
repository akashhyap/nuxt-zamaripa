<template>
  <div v-editable="blok" :class="alignText">
    <component :is="selectedTag">{{ blok.name }}</component>
  </div>
</template>

<script setup>
const props = defineProps({ blok: Object })
const selectedTag = computed(() => props.blok.selectTag);
const alignText = computed(() => {
    return props.blok.alignText
})
</script>
