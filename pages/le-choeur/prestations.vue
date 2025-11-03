<template>
    <LayoutTitle :value="page" />
    <div>
        <iframe allowfullscreen="true" scrolling="no" class="fp-iframe"
            src="https://heyzine.com/flip-book/04ac708012.html"
            style="border: 0px solid lightgray; width: 100%; height: 600px;"></iframe>

    </div>
</template>

<script setup lang="ts">
const page = {
    section: "Le Chœur",
    title: "Prestations",
    breadcrumb: [
        { title: "Répertoire", href: "/le-choeur/repertoire" },
        { title: "Partenaires", href: "/le-choeur/partenaires" },
        //        { title: "Itinéraires", href: "/le-choeur/itineraires" }
    ]
}
const { data: extraits } = await useAsyncData(() => queryCollection('extraits').all())
</script>
