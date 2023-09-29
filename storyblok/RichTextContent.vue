<template>
    <div v-editable="blok" class="py-5" :class="alignText">
        <div v-html=" resolvedRichText " class="[&>h1]:text-6xl [&>h1]:font-black [&>h2]:text-5xl" :style="{color: textColor}">
        </div>
    </div>
</template>
  
<script setup>
const props = defineProps({ blok: Object })
const resolvedRichText = computed(() => renderRichText(props.blok.content))
const alignText = computed(() => {
    return props.blok.alignText
})
const textColor = computed(() => {
    return props.blok?.textColor?.color
})

</script>