<template>
    <!--
    <LayoutTitle :page="page" />
    {{ content }}
    <ContentRenderer v-if="content" :value="content" />
    -->
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
