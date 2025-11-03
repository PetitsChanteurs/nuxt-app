<template>
    <NuxtLink
        :class="'group flex flex-col border shadow-sm rounded-xl hover:shadow-md focus:outline-none focus:shadow-md transition dark:bg-neutral-900 dark:border-neutral-800 ' + props.cssFond"
        :to="props.lien" :target="props.target">
        <div class="p-4 md:p-5">
            <div class="flex justify-between items-center gap-x-3">
                <div class="grow">
                    <h3
                        :class="'text-2xl text-gray-800 dark:group-hover:text-neutral-400 dark:text-neutral-200 ' + props.cssTexte">
                        <slot name="titre" />
                    </h3>
                    <div :class="'text-base text-gray-500 dark:text-neutral-500 ' + props.cssTexte">
                        <slot />
                    </div>
                </div>
                <div>
                    <svg class="shrink-0 size-5 text-white dark:text-neutral-200" xmlns="http://www.w3.org/2000/svg"
                        width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                        stroke-linecap="round" stroke-linejoin="round">
                        <path d="m9 18 6-6-6-6" />
                    </svg>
                </div>
            </div>
        </div>
    </NuxtLink>
</template>

<script setup lang="ts">
const props = defineProps({
    target: {
        type: String,
        required: false,
    },
    cssFond: {
        type: String,
        required: false,
    },
    cssTexte: {
        type: String,
        required: false,
    },
    lien: {
        type: String,
        required: true,
    },
});
</script>
