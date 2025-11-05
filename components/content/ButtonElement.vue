<template>
    <div>
        <div>
            <NuxtLink :to="lien"
                class="bg-red-700 text-white text-cinzel text-lg px-3 py-1 mr-5 cursor-pointer inline-block leading-8">
                <span>
                    <slot mdc-unwrap="p" />
                </span>
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