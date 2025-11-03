<template>
    <LayoutTitle :value="page" />
</template>

<script setup lang="ts">
const page = {
    section: "Le Chœur",
    title: "Itinéraires",
    breadcrumb: [
        { title: "Prestations", href: "/le-choeur/prestations" },
        { title: "Partenaires", href: "/le-choeur/partenaires" }
    ]
}
const { data: extraits } = await useAsyncData(() => queryCollection('extraits').all())
</script>
