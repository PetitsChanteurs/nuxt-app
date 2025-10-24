<template>
    <LayoutTitle :page="page" />
    <div class="w-full">
        <h2 class="my-4">Depuis 117 ans, plus de 8000 enfants ont été Petit Chanteur à la Croix de Bois. </h2>
        <p class="my-4">Dans les résidences successives de la Mané, à Paris, Meudon, Glaignes, Brienon ou Autun, c’est
            toujours le
            même projet qui les a animés : chanter la paix à travers le monde. Vous avez été Petit Chanteur à la Croix
            de Bois et vous souhaitez reprendre contact afin de recevoir des nouvelles des autres anciens et de la Mané
            actuelle ? Vous pouvez remplir ce formulaire.</p>
    </div>
    <iframe
        src="https://form.typeform.com/to/U483eyYW?typeform-embed-id=4551781406806833&amp;typeform-embed=embed-widget&amp;typeform-source=epccb.fr&amp;typeform-medium=snippet&amp;typeform-medium-version=next&amp;embed-opacity=100&amp;typeform-embed-handles-redirect=1&amp;typeform-embed-no-heading=true"
        data-testid="iframe" allow="microphone; camera" title="Newsletter anciens" class="mb-10"
        style="border: 0px; width:100%; height: 800px; transform: translateZ(0px);"></iframe>
</template>

<script setup lang="ts">
const page = {
    section: "Le Chœur",
    title: "Bureau des Anciens",
    breadcrumb: [
        { title: "Pueri Cantores", href: "/le-choeur/pueri-cantores" },
        { title: "Histoire", href: "/le-choeur/histoire" }
    ]
}
const { data: extraits } = await useAsyncData(() => queryCollection('extraits').all())
</script>
