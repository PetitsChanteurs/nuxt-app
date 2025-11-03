<template>
    <LayoutTitle :value="page" />

    <div class="md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-8 mb-10">
        <div v-for="section in directory" :key="section.title" :class="['mt-5', section.class]">
            <h3 class="text-lg text-cinzel leading-6">{{ section.title }}</h3>
            <ul role="list" class="mt-6 space-y-1">
                <li v-for="item in section.items" :key="item">
                    <span class="text-base leading-3 text-gray-800">{{ item }}</span>
                </li>
            </ul>
        </div>
    </div>

</template>

<script setup lang="ts">
const page = {
    section: "Le Chœur",
    title: "Répertoire",
    breadcrumb: [
        { title: "Discographie", href: "/le-choeur/discographie" },
        { title: "Prestations", href: "/le-choeur/prestations" }
    ]
}

import { ref, computed } from 'vue'
const { data } = await useAsyncData(() => queryCollection('repertoire').all())
const directory = computed(() => data.value ?? [])
</script>
