<template>
    <ContentRenderer v-if="home" :value="home" />
    <div v-else>Home not found</div>
</template>

<script setup lang="ts">
//const { data: home } = await useAsyncData(() => queryCollection('content').path('/index-z').first())
const { data: home } = await useAsyncData(() => queryCollection('blog').path('/posts/').first())
useSeoMeta({
    title: home.value?.title,
    description: home.value?.description
})
</script>
