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
    title: "Formation spirituelle",
    breadcrumb: [
        { title: "Formation artistique", href: "/la-manecanterie/formation-artistique" },
        { title: "Admission - Devenir PCCB", href: "/la-manecanterie/admission-devenir-pccb" }
    ]
};
const { data: content } = await useAsyncData(() => queryCollection('manecanterie').where('title', "=", "Formation spirituelle").first());
</script>
