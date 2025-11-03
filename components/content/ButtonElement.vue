<template>
    <div>
        <div>
            <NuxtLink :to="lien"
                class="bg-red-700 text-white text-cinzel px-5 py-2 mr-5 cursor-pointer inline-block w-50">
                <slot />
            </NuxtLink>
        </div>
    </div>
</template>

<script setup>
defineProps({
    lien: {
        type: String,
        required: true,
    },
});
</script>