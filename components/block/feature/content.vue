<template>
    <div class="article">
        <div v-html="data.text.join('')"></div>
    </div>
</template>

<script lang="ts" setup>
const props = defineProps({
    data: {
        type: Object,
        required: true
    }
});
</script>
