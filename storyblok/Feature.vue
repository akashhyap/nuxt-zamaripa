<template>
  <div v-editable="blok" class="w-full overflow-hidden">
    <NuxtLink :to="`/${blok.link?.cached_url}`">
      <NuxtImg provider="storyblok" v-if="blok?.image?.filename" format="avif" :src="blok?.image?.filename" width="800"
        height="800" fit="in" class="w-full aspect-video object-center object-cover rounded-xl" />
      <div class="py-6">
        <h3 class="text-2xl font-bold uppercase" :class="classObject">
          {{ blok.name }}
        </h3>
      </div>
    </NuxtLink>
  </div>
</template>
 
<script setup>
const props = defineProps({ blok: Object })
const classObject = computed(() => {
  const classes = {
    [props.blok.alignText]: true // Use alignItem prop as a class
  };
  return classes;
});
</script>