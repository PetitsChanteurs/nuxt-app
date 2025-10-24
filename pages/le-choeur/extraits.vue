<template>
    <LayoutTitle :page="page" />
    <!-- List -->
    <div>
        <div v-for="section in extraits" :key="section.title">
            <!-- Item -->
            <div
                class="mt-3 pb-12 mb-12 border-b border-gray-200 md:last:pb-0 md:last:mb-0 md:last:border-b-0 dark:border-neutral-700">
                <!-- Heading -->
                <div class="mb-4 flex items-center gap-2">
                    <div class="grow">
                        <h2 class="text-xl font-medium text-gray-800 dark:text-neutral-200">
                            {{ section.title }}
                        </h2>
                    </div>
                </div>
                <!-- End Heading -->
                <!-- Grid -->
                <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-3 lg:gap-5 mb-10">
                    <div v-for="video in section.links" :key="video.title">
                        <!-- Card -->
                        <div
                            class="p-1 bg-white border border-gray-200 rounded-2xl dark:bg-neutral-900 dark:border-neutral-700">
                            <iframe class="bg-gray-100 w-full h-56 object-cover rounded-xl dark:bg-neutral-800"
                                :src="video.href" title="YouTube video player" frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                            <div class="p-4 space-y-5">
                                <div>
                                    <h2 class="font-medium text-sm text-gray-800 dark:text-neutral-200">
                                        {{ video.title }}
                                    </h2>
                                    <!-- List -->
                                    <ul class="mt-1">
                                        <li class="text-sm text-gray-500 dark:text-neutral-500">{{ video.context }}</li>
                                    </ul>
                                    <!-- End List -->
                                </div>
                                <div>
                                    <h2 class="font-medium text-sm text-gray-800 dark:text-neutral-200">
                                        {{ video.date }}
                                    </h2>
                                </div>
                            </div>
                        </div>
                        <!-- End Card -->
                    </div>
                </div>
                <!-- End Grid -->
            </div>
            <!-- End Item -->
        </div>
    </div>
    <!-- End List -->
</template>

<script setup lang="ts">
const page = {
    section: "Le Chœur",
    title: "Extraits vidéos",
    breadcrumb: [
        { title: "Concerts", href: "/le-choeur/concerts" },
        { title: "Discographie", href: "/le-choeur/discographie" }
    ]
}
const { data: extraits } = await useAsyncData(() => queryCollection('extraits').all())
</script>
