<template>
    <LayoutTitle :page="page" />
</template>

<script setup lang="ts">
const page = {
    section: "Le Chœur",
    title: "Accueil",
    breadcrumb: [
        { title: "Bureau des Anciens", href: "/le-choeur/bureau-des-anciens" },
        { title: "Histoire", href: "/le-choeur/histoire" }
    ]
}
const { data: extraits } = await useAsyncData(() => queryCollection('extraits').all())
</script>
