<template>

    <LayoutTitle :page="page" />

    <div v-if="content && content.items" v-for="section in content.items">

        <BlockFeaturePhotos v-if="section.type == 'feature_photos'" :data="section" />

        <BlockFeatureTimeline v-if="section.type == 'feature_timeline'" :data="section" />

        <BlockFeatureCarousel v-if="section.type == 'feature_carousel'" :data="section" />

        <BlockFeatureTestimonials v-if="section.type == 'feature_testimonials'" :data="section" />

        <div v-if="section.type == 'feature_cols'" class="w-full mx-auto mb-7">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:gap-16 lg:items-center">
                <div v-for="col in section.cols">
                    <BlockFeatureText v-if="col.type == 'feature_text'" :data="col" />
                    <BlockFeatureShortcuts v-if="col.type == 'feature_shortcuts'" :data="col" />
                </div>
            </div>
        </div>

    </div>
</template>

<script setup lang="ts">

const page = {
    section: "Le Chœur",
    title: "Notre histoire",
    breadcrumb: [
        { title: "Bureau des anciens", href: "/le-choeur/bureau-des-anciens" },
        { title: "Concerts", href: "/le-choeur/concerts" }
    ]
}

const { data: content } = await useAsyncData(() => queryCollection('choeur').first({ 'where': { 'title': 'Notre histoire' } }))

</script>
