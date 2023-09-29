<script setup>
import { ref, onMounted } from 'vue';

// Function to load preline dynamically when the component is mounted
const loadPreline = async () => {
  try {
    const preline = await import('preline');
    // Use preline here
    // For example, preline.someFunction(headerMenu.value);
  } catch (error) {
    console.error('Error loading preline:', error);
  }
};

const storyblokApi = useStoryblokApi()
const { data } = await storyblokApi.get('cdn/stories/config', {
  version: 'draft',
  resolve_links: 'url',
})

const headerMenu = ref(null)
headerMenu.value = data.story.content.header_menu

// Load preline when the component is mounted
onMounted(() => {
  loadPreline();
});

console.log("header menu", headerMenu);

// Function to determine if submenu links exist for a menu item
const hasSubmenuLinks = (menu) => {
  return menu.menu && menu.menu.length > 0;
};

</script>
 
<template>
  <header class="relative flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full bg-white py-6 text-[18px]">
    <nav v-if="headerMenu" class="max-w-7xl w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between"
      aria-label="Global">
      <div class="flex items-center justify-between">
        <NuxtLink to="/">
          <p class="flex-none text-xl font-semibold">Zamaripa</p>
        </NuxtLink>
        <div class="sm:hidden">
          <button type="button"
            class="hs-collapse-toggle p-2 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-900 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm"
            data-hs-collapse="#navbar-collapse-basic" aria-controls="navbar-collapse-basic"
            aria-label="Toggle navigation">
            <svg class="hs-collapse-open:hidden w-4 h-4" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path fill-rule="evenodd"
                d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
            </svg>
            <svg class="hs-collapse-open:block hidden w-4 h-4" width="16" height="16" fill="currentColor"
              viewBox="0 0 16 16">
              <path
                d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
            </svg>
          </button>
        </div>
      </div>

      <div id="navbar-collapse-basic" class="hidden basis-full grow sm:block">
        <div class="flex flex-col gap-5 mt-5 sm:flex-row sm:items-center sm:justify-end sm:mt-0 sm:pl-5">
          <!-- Loop through the headerMenu items -->
          <div v-for="blok in headerMenu" :key="blok._uid">
            <div
              :class="{ 'hs-dropdown [--strategy:static] sm:[--strategy:absolute] [--adaptive:none]': hasSubmenuLinks(blok) }">
              <!-- Main Menu Item -->
              <NuxtLink :to="hasSubmenuLinks(blok) ? null : `/${blok.link.cached_url}`"
                class="flex items-center w-full text-gray-900 cursor-pointer hover:text-gray-800 font-medium">
                {{ blok.name }}
                <svg v-if="hasSubmenuLinks(blok)" class="ml-2 w-2.5 h-2.5 text-gray-900" width="16" height="16"
                  viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
                    stroke="currentColor" stroke-width="2" stroke-linecap="round"></path>
                </svg>
              </NuxtLink>

              <!-- Dropdown Content -->
              <div v-if="hasSubmenuLinks(blok)"
                class="hs-dropdown-menu transition-[opacity,margin] duration-[0.1ms] sm:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 sm:w-48 hidden z-10 bg-white sm:shadow-md rounded-lg p-2 before:absolute top-full sm:border before:-top-5 before:left-0 before:w-full before:h-5">

                <NuxtLink v-for="submenuItem in blok.menu" :key="submenuItem._uid" :to="`/${submenuItem.link.cached_url}`"
                  class="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-900 focus:ring-2 focus:ring-blue-500">
                  {{ submenuItem.name }}
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>


<style scoped>
nav > a.router-link-active {
  @apply underline underline-offset-4 decoration-4 decoration-[#50b0ae];
}
</style>