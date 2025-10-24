<template>
    <!-- Dropdown -->
    <div
        class="hs-dropdown [--strategy:static] md:[--strategy:fixed] [--adaptive:none] md:[--adaptive:adaptive] [--is-collapse:true] md:[--is-collapse:false] ">
        <button id="hs-header-base-dropdown" type="button"
            :class="['hs-dropdown-toggle w-full p-2 flex items-center text-sm text-gray-800 hover:bg-gray-100 rounded-lg focus:outline-hidden focus:bg-gray-100 dark:text-neutral-200 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700', { 'bg-gray-100': item.active }]"
            aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown">
            <svg class="shrink-0 size-4 me-3 md:me-2 block md:hidden" xmlns="http://www.w3.org/2000/svg" width="24"
                height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                stroke-linecap="round" stroke-linejoin="round">
                <path d="m3 10 2.5-2.5L3 5" />
                <path d="m3 19 2.5-2.5L3 14" />
                <path d="M10 6h11" />
                <path d="M10 12h11" />
                <path d="M10 18h11" />
            </svg>
            {{ item.title }}
            <svg class="hs-dropdown-open:-rotate-180 md:hs-dropdown-open:rotate-0 duration-300 shrink-0 size-4 ms-auto md:ms-1"
                xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="m6 9 6 6 6-6" />
            </svg>
        </button>

        <div class="hs-dropdown-menu transition-[opacity,margin] duration-[0.1ms] md:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 relative w-full md:w-52 hidden z-10 top-full ps-7 md:ps-0 md:bg-white md:rounded-lg md:shadow-md before:absolute before:-top-4 before:start-0 before:w-full before:h-5 md:after:hidden after:absolute after:top-1 after:start-4.5 after:w-0.5 after:h-[calc(100%-4px)] after:bg-gray-100 dark:md:bg-neutral-800 dark:after:bg-neutral-700"
            role="menu" aria-orientation="vertical" aria-labelledby="hs-header-base-dropdown">
            <div class="py-1 md:px-1 space-y-0.5">
                <a v-for="item in item.items" :key="item.href"
                    class="p-2 md:px-3 flex items-center text-sm text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700 dark:focus:text-neutral-300"
                    href="#">
                    {{ item.title }}
                </a>
            </div>
        </div>
    </div>
    <!-- End Dropdown -->
</template>

<script lang="ts" setup>
defineProps<{
    item: {
        title: string;
        href: string;
        active?: boolean;
        target?: string;
        separator?: boolean;
        items?: Array<any>;
    }
}>()
</script>
