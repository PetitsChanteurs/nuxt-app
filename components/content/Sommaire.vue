<template>
    <!-- Features -->
    <div class="w-full rounded-2xl p-0 px-5 py-10 my-5 mx-auto"
        style="background-image:linear-gradient(rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.8)), url(/assets/bg/bg-01.jpg); background-position: center center; background-size: cover">
        <!-- Grid -->
        <p class="px-0 text-xl">
            <slot name="introduction" />
        </p>
        <div class="grid gap-2 grid-cols-2 lg:grid-cols-4 lg:gap-4">
            <slot />
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
