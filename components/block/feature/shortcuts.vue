<template>
    <!-- Card Section -->
    <div class="grid grid-cols-1 gap-3 sm:gap-6">
        <!-- Card -->
        <a v-if="data?.items" v-for="item in data.items"
            :class="'group flex flex-col border shadow-sm rounded-xl hover:shadow-md focus:outline-none focus:shadow-md transition dark:bg-neutral-900 dark:border-neutral-800 ' + item.css"
            :href="item.link.href" :target="item.link.target">
            <div class="p-4 md:p-5">
                <div class="flex justify-between items-center gap-x-3">
                    <div class="grow">
                        <h3
                            :class="'text-2xl text-gray-800 dark:group-hover:text-neutral-400 dark:text-neutral-200 ' + item.css">
                            {{ item.name }}
                        </h3>
                        <p class="text-base text-gray-500 dark:text-neutral-500 "
                            :class="'text-base text-gray-500 dark:text-neutral-500 ' + item.css">
                            {{ item.link.title }}
                        </p>
                    </div>
                    <div>
                        <svg class="shrink-0 size-5 text-white dark:text-neutral-200" xmlns="http://www.w3.org/2000/svg"
                            width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                            stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="m9 18 6-6-6-6" />
                        </svg>
                    </div>
                </div>
            </div>
        </a>
        <!-- End Card -->
    </div>
</template>

<script setup lang="ts">
defineProps<{ data: any; }>();
</script>
