<template>
    <div class="mb-5 md:pb-0">
        <h3 class="text-xl lg:text-1xl text-red-700 dark:text-neutral-200">
            {{ data.subtitle }}
        </h3>
        <h2 class="text-cinzel text-2xl lg:text-3xl text-blue-900 dark:text-neutral-200 mt-2">
            {{ data.title }}
        </h2>
        <div class="flex flex-col gap-y-3 text-gray-500 dark:text-neutral-500 mt-3" v-html="data.text">
        </div>
    </div>
</template>

<script setup lang="ts">
defineProps<{ data: any; }>();
</script>
