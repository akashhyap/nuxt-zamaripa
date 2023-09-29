<template>
    <div v-editable="blok" class="container mx-auto">
        <h1 class="mb-12">{{ blok.title }}</h1>
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-12 my-12 place-items-start">
            <ArticleCard v-for="article in articles" :key="article.uuid" :article="article.content"
                :slug="article.full_slug" />
        </div>
    </div>
</template>
   
<script setup>
defineProps({ blok: Object })

const articles = ref(null)
const storyblokApi = useStoryblokApi()
const { data } = await storyblokApi.get('cdn/stories', {
    version: 'draft',
    starts_with: 'inguinal-hernia/treatments',
    is_startpage: false,
})
articles.value = data.stories
</script>