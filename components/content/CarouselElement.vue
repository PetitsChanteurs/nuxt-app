<template>
    <div class="hs-carousel-slide px-1">
        <div class="flex justify-center h-full bg-gray-100 p-0 dark:bg-neutral-900">
            <img class="aspect-[10/15] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                :src="`/assets/images/${$props.image}`" />
        </div>
    </div>
</template>

<script lang="ts" setup>
const props = defineProps({
    image: {
        type: String,
        required: true
    }
})
</script>