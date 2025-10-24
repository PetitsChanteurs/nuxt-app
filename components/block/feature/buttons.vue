<template>
    <div class="mt-5 mb-5">
        <NuxtLink v-for="item in data.items" :key="item.href" class="bg-red-700 text-white text-cinzel px-5 py-2 mr-5"
            :to="item.href">{{ item.title }}</NuxtLink>
    </div>
</template>

<script setup lang="ts">
defineProps<{ data: any; }>();
</script>
