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
    title: "Scolarité",
    breadcrumb: [
        { title: "Projet éducatif", href: "/la-manecanterie/projet-educatif" },
        { title: "Internat", href: "/la-manecanterie/internat" }
    ]
};
const { data: content } = await useAsyncData(() => queryCollection('manecanterie').where('title', "=", "Scolarité").first());
</script>
