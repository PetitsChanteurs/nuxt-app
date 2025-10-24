<template>
    <ClientOnly>
        <!-- Slider -->
        <div data-hs-carousel='{
  "loadingClasses": "opacity-0",
  "dotsItemClasses": "hs-carousel-active:bg-blue-700 hs-carousel-active:border-blue-700 size-3 border border-gray-400 rounded-full cursor-pointer dark:border-neutral-600 dark:hs-carousel-active:bg-blue-500 dark:hs-carousel-active:border-blue-500",
  "isInfiniteLoop": true,
  "isAutoPlay": true,
  "speed": 4000,
  "slidesQty": {
    "xs": 3,
    "lg": 6
  }
}' class="relative">
            <div class="hs-carousel w-full my-10 overflow-hidden bg-white rounded-lg">
                <div class="relative min-h-40 -mx-1">
                    <!-- transition-transform duration-700 -->
                    <div
                        class="hs-carousel-body absolute top-0 bottom-0 start-0 flex flex-nowrap opacity-0 transition-transform duration-700">

                        <div v-for="(item, idx) in data.images" :key="idx" class="hs-carousel-slide px-1">
                            <div class="flex justify-center h-full bg-gray-100 p-0 dark:bg-neutral-900">
                                <img class="aspect-[10/15] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                                    :src="`/assets/images/${item}`" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <button type="button"
                class="hs-carousel-prev hs-carousel-disabled:opacity-50 hs-carousel-disabled:pointer-events-none absolute inset-y-0 start-0 inline-flex justify-center items-center w-[46px] h-full text-gray-800 hover:bg-gray-800/10 focus:outline-none focus:bg-gray-800/10 rounded-s-lg dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10">
                <span class="text-2xl" aria-hidden="true">
                    <svg class="shrink-0 size-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                        viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                        stroke-linejoin="round">
                        <path d="m15 18-6-6 6-6"></path>
                    </svg>
                </span>
                <span class="sr-only">Previous</span>
            </button>
            <button type="button"
                class="hs-carousel-next hs-carousel-disabled:opacity-50 hs-carousel-disabled:pointer-events-none absolute inset-y-0 end-0 inline-flex justify-center items-center w-[46px] h-full text-gray-800 hover:bg-gray-800/10 focus:outline-none focus:bg-gray-800/10 rounded-e-lg dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10">
                <span class="sr-only">Next</span>
                <span class="text-2xl" aria-hidden="true">
                    <svg class="shrink-0 size-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                        viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                        stroke-linejoin="round">
                        <path d="m9 18 6-6-6-6"></path>
                    </svg>
                </span>
            </button>

        </div>
        <!-- End Slider -->
    </ClientOnly>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';

onMounted(() => {
    // @ts-ignore
    setTimeout(() => window.HSStaticMethods.autoInit());
});

defineProps<{ data: any; }>();
</script>
