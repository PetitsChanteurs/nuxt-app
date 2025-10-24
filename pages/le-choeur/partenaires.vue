<template>
    <LayoutTitle :page="page" />
    <div>
        <!-- Clients -->
        <div v-for="section in partenaires" :key="section.title" class="w-full py-10 mx-auto">
            <!-- Title -->
            <div class="mx-auto text-center mb-6 md:mb-12">
                <h2 class="text-xl text-cinzel md:text-2xl md:leading-tight text-red-700 dark:text-neutral-200">
                    {{ section.title }}
                </h2>
            </div>
            <!-- End Title -->

            <!-- Grid -->
            <div class="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-3 lg:gap-6">
                <div v-for="link in section.items" :key="link.image"
                    class="flex p-4 md:p-7 bg-gray-100 rounded-lg dark:bg-neutral-800 align-middle">
                    <NuxtImg
                        class="w-16 p-0 h-auto w-auto max-h-[80px] m-auto transition-all duration-300 ease-in-out hover:scale-110  hover:-translate-y-1"
                        :src="`/assets/partners/${link.image}`" />
                </div>
            </div>
            <!-- End Grid -->
        </div>
        <!-- End Clients -->
    </div>
</template>

<script setup lang="ts">
const page = {
    section: "Le Chœur",
    title: "Partenaires",
    breadcrumb: [
        { title: "Itinéraires", href: "/le-choeur/itineraires" },
        { title: "Pueri Cantores", href: "/le-choeur/pueri-cantores" }
    ]
}
const { data: partenaires } = await useAsyncData(() => queryCollection('partenaires').all())
</script>
