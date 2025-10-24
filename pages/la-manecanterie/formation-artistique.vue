<template>

    <LayoutTitle :page="page" />

    <div v-if="content && content.items" v-for="section in content.items">

        <BlockFeatureFigures v-if="section.type == 'feature_figures'" :data="section" />

        <BlockFeatureContent v-if="section.type == 'feature_content'" :data="section" />

        <BlockFeatureButtons v-if="section.type == 'feature_buttons'" :data="section" />

    </div>
</template>

<script setup lang="ts">
const page = {
    section: "Le manécanterie",
    title: "Formation artistique",
    breadcrumb: [
        { title: "Internat", href: "/la-manecanterie/internat" },
        { title: "Mission", href: "/la-manecanterie/mission" }
    ]
};
const { data: content } = await useAsyncData(() => queryCollection('manecanterie').where('title', "=", "Formation artistique").first());
</script>
