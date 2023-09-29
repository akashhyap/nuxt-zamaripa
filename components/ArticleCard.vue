<template>
    <NuxtLink :to="'/' + slug" v-editable="article" class="flex flex-col w-full h-full rounded-[5px] overflow-hidden">
        <template v-for="item in article.body" :key="item._uid">
            <template v-for="item in item.body" :key="item._uid">
               <template v-if="item.component === 'featuredImage'">
                    <NuxtImg provider="storyblok" v-if="item?.image?.filename" format="avif" :src="item?.image?.filename"
                        width="500" height="500" fit="in"
                        class="w-full aspect-video object-cover pointer-events-none rounded-xl order-1" />
                </template>
                <template v-if="item.component === 'heading'">
                    <div class="p-2 order-2 mt-3">
                        <h3 class="text-xl font-bold uppercase">
                            {{ item.name }}
                        </h3>
                    </div>
                </template>
            </template>
        </template>
    </NuxtLink>
</template>
   
<script setup>
defineProps({ article: Object, slug: String })
</script>