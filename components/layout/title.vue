<template>
    <div class="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 sm:gap-5">
        <!-- Header -->
        <div class="flex flex-wrap justify-between items-center gap-2">
            <div>
                <p class="inline-flex justify-between items-center gap-x-1">
                    <a class="text-dosis text-base text-red-700 decoration-2 hover:underline font-medium focus:outline-none focus:underline dark:text-red-400 dark:hover:text-red-500"
                        href="#">
                        {{ page.section }}
                    </a>
                </p>
                <h1 class="text-xl text-blue-900 text-cinzel md:text-2xl dark:text-neutral-200">
                    {{ page.title }}
                </h1>
            </div>
        </div>
        <!-- End Header -->

        <div class="inline-flex sm:justify-end items-center gap-x-3">
            <div class="flex justify-end items-center gap-x-2">
                <!-- Button -->
                <a :href="page.breadcrumb[0].href" type="button"
                    class="py-2 px-2.5 inline-flex items-center gap-x-1.5 text-sm font-medium rounded-lg border border-stone-200 bg-white text-stone-800 shadow-sm hover:bg-stone-50 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-stone-50 dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700">
                    <svg class="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                        viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                        stroke-linejoin="round">
                        <path d="m15 18-6-6 6-6" />
                    </svg>
                    {{ page.breadcrumb[0].title }}
                </a>
                <!-- End Button -->

                <!-- Button -->
                <a :href="page.breadcrumb[1].href" type="button"
                    class="py-2 px-2.5 inline-flex items-center gap-x-1.5 text-sm font-medium rounded-lg border border-stone-200 bg-white text-stone-800 shadow-sm hover:bg-stone-50 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-stone-50 dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700">
                    {{ page.breadcrumb[1].title }}
                    <svg class="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                        viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                        stroke-linejoin="round">
                        <path d="m9 18 6-6-6-6" />
                    </svg>
                </a>
                <!-- End Button -->
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
defineProps<{
    page: {
        section: string;
        title: string;
        breadcrumb: Array<{
            title: string;
            href: string;
        }>;
    }
}>()
</script>
