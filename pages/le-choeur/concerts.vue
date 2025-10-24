<template>
    <LayoutTitle :page="page" />

    <BlockShopEvents :data="grouped" />

</template>

<script setup lang="ts">
const page = {
    section: "Le Chœur",
    title: "Concerts",
    breadcrumb: [
        { title: "Histoire", href: "/le-choeur/histoire" },
        { title: "Extraits", href: "/le-choeur/extraits" },
    ]
}

// Récupérer les événements depuis le contenu
const { data: events } = await useAsyncData(() => queryCollection('events').all())

const grouped = computed(() => {
    const result = {}
    for (const event of events.value || []) {
        let title = "Prochains concerts";
        switch (event.type) {
            case 'Event':
                title = "Concert exceptionnel";
                break
        }
        if (!result[title]) result[title] = {
            title: title,
            items: []
        }
        result[title].items.push(event)
    }
    /*
    for (const section of Object.values(result)) {
        section.items.sort((a, b) => (b.date || 0) - (a.date || 0))
    }
    */
    return Object.values(result)
})
</script>
