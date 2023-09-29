<template>
    <div v-editable="blok" class="">
        <NuxtImg provider="storyblok" v-if="blok?.image?.filename" format="avif" :src="blok?.image?.filename" width="800"
            height="800" fit="in" class="rounded-xl w-full" />
    </div>
</template>
  
<script setup>
defineProps({ blok: Object })
</script>
  