<template>

    <LayoutTitle :page="page" />
    <ContentRenderer v-if="content" :value="content" />

    <div v-if="content && content.items" v-for="section in content.items">

        <BlockFeatureFigures v-if="section.type == 'feature_figures'" :data="section" />

        <BlockFeatureContent v-if="section.type == 'feature_content'" :data="section" />

        <BlockFeatureButtons v-if="section.type == 'feature_buttons'" :data="section" />

    </div>
</template>

<script setup lang="ts">
const page = {
    section: "Le manécanterie",
    title: "Projet éducatif",
    breadcrumb: [
        { title: "Admissions - Devenir PCCB", href: "/la-manecanterie/admission-devenir-pccb" },
        { title: "Scolarité", href: "/la-manecanterie/scolarite" }
    ]
};
const { data: content } = await useAsyncData(() => queryCollection('manecanterie').where('title', "=", "Projet éducatif").first());
</script>
