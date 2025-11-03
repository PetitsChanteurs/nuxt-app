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
    title: "Devenir PCCB",
    breadcrumb: [
        { title: "Formation spirituelle", href: "/la-manecanterie/formation-spirituelle" },
        { title: "Projet éducatif", href: "/la-manecanterie/projet-educatif" }
    ]
};
const { data: content } = await useAsyncData(() => queryCollection('manecanterie').where('title', "=", "Devenir PCCB").first());
</script>
