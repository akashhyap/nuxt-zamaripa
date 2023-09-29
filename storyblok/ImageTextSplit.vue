<template>
  <div v-editable="blok" class="mt-16 mb-20">
    <div class="container mx-auto flex flex-wrap md:flex-nowrap gap-8 md:gap-16 px-4 md:px-14" :class="classObject">
      <div class="md:flex-1">
        <NuxtImg provider="storyblok" v-if="blok?.image?.filename" format="avif" :src="blok?.image?.filename" width="800"
          height="800" fit="in" class="w-full rounded-xl aspect-square" />
      </div>
      <div v-html="resolvedRichText" class="md:flex-1"></div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({ blok: Object })
const resolvedRichText = computed(() => renderRichText(props.blok.content))
const classObject = computed(() => {
  const classes = {
    [props.blok.alignItem]: true // Use alignItem prop as a class
  };

  if (props.blok.reverse) {
    classes['flex-row-reverse'] = true; // Check if reverse prop is 'true'
  }

  return classes;
});
</script>
