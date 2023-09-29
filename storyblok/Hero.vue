<template>
    <div v-editable="blok" class="min-h-[500px] relative flex items-center justify-center overflow-hidden"
        :class="heroClasses">
        <div class="relative z-10">
            <div v-html="resolvedRichText" class="[&>h1]:text-6xl [&>h1]:font-black [&>h2]:text-4xl"></div>
        </div>
        <NuxtImg provider="storyblok" v-if="blok?.background_image?.filename" format="avif"
            :src="blok?.background_image?.filename" width="1400" height="800" fit="in"
            class="absolute top-0 left-0 z-0 w-full h-full object-cover" />

    </div>
</template>
  
<script setup>
const props = defineProps({ blok: Object })
const resolvedRichText = computed(() => renderRichText(props.blok.content))
const heroClasses = computed(() => {
    return props.blok.layout === 'constrained' ? 'container mx-auto' : ''
})

</script>