<template>
    <div class="article" v-if="post">
        <LayoutTitle :value="post" />
        <ContentRenderer class="article" :value="post" />
    </div>
</template>

<script setup lang="ts">
definePageMeta({ layout: 'admin' })
const section = useRoute().params.section
const slug = useRoute().params.slug

const { data: post } = await useAsyncData(`${slug}`, () => {
    return queryCollection('content').path(`/documentation/uniforme-et-aubes/entretien-des-aubes`).first();
    //return queryCollection('content').path(`/documentation/${section}/${slug}`).first()
})
</script>
