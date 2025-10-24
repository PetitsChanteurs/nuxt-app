<template>
    <!-- Features -->
    <div class="w-full rounded-2xl p-0 px-5 py-10 my-5 mx-auto"
        style="background-image:linear-gradient(rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.8)), url(/assets/bg/bg-01.jpg); background-position: center center; background-size: cover">
        <!-- Grid -->
        <p class="px-0 text-xl">
            {{ data.text }}
        </p>
        <div class="grid gap-2 grid-cols-2 lg:grid-cols-4 lg:gap-4">
            <!-- Stats -->
            <div v-for="item in data.items" :key="item.section" class="py-5 px-0">
                <h4 class="text-lg font-semibold text-red-700 dark:text-neutral-200">{{ item.section }}</h4>
                <p class="mt-2 sm:mt-3 text-2xl sm:text-xl text-black text-cinzel">{{ item.title }}</p>
                <p class="mt-1 text-lg text-black dark:text-neutral-500">{{ item.text }}</p>
            </div>
            <!-- End Stats -->
        </div>
        <!-- End Grid -->
    </div>
    <!-- End Features -->
</template>

<script lang="ts" setup>
const props = defineProps({
    data: {
        type: Object,
        required: true
    }
});
</script>
