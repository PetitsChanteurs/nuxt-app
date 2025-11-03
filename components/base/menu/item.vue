<template>

    <NuxtLink
        :class="['py-2 px-2 flex items-center text-base text-blue-950 hover:bg-gray-100 rounded-lg focus:outline-hidden focus:bg-gray-100 cursor-pointer font-cinzel-decorative', { 'bg-gray-100': item.active }]"
        :href="item.href" :target="item.target" aria-current="page">
        <svg class="shrink-0 size-4 me-3 md:me-2 block md:hidden" xmlns="http://www.w3.org/2000/svg" width="24"
            height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
            stroke-linejoin="round">
            <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" />
            <path
                d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        </svg>
        {{ item.title }}
    </NuxtLink>

</template>

<script lang="ts" setup>
defineProps<{
    item: {
        title: string;
        href: string;
        target?: string;
        separator?: boolean;
        items?: Array<any>;
    }
}>()
</script>
