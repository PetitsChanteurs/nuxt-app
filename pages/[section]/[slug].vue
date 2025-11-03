<template>
    <div v-if="post">
        <LayoutTitle :value="post" />
        <ContentRenderer :value="post" />
    </div>
</template>

<script setup lang="ts">
const section = useRoute().params.section
const slug = useRoute().params.slug
const { data: post } = await useAsyncData(`${slug}`, () => {
    return queryCollection('content').path(`/${section}/${slug}`).first()
})
</script>
