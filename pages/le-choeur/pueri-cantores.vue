<template>

    <LayoutTitle :page="page" />

    <div v-if="content && content.items" v-for="section in content.items">

        <BlockFeaturePhotos v-if="section.type == 'feature_photos'" :data="section" />

        <BlockFeatureTimeline v-if="section.type == 'feature_timeline'" :data="section" />

        <BlockFeatureCarousel v-if="section.type == 'feature_carousel'" :data="section" />

        <BlockFeatureText v-if="section.type == 'feature_text'" :data="section" />

    </div>
</template>

<script setup lang="ts">
const page = {
    section: "Le Chœur",
    title: "Pueri Cantores",
    breadcrumb: [
        { title: "Partenaires", href: "/le-choeur/partenaires" },
        { title: "Bureau des anciens", href: "/le-choeur/bureau-des-anciens" }
    ]
};
const { data: content } = await useAsyncData(() => queryCollection('choeur').where('title', "=", "Pueri Cantores").first());
console.log(content.value);
</script>
