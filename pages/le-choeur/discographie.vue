<template>
    <LayoutTitle :value="page" />
    <div>
        <div v-for="section in grouped" :key="section.title">
            <div
                class="mt-3 pb-12 mb-12 border-b border-gray-200 md:last:pb-0 md:last:mb-0 md:last:border-b-0 dark:border-neutral-700">
                <div class="mb-4 flex items-center gap-2">
                    <div class="grow">
                        <h2 class="text-xl font-medium text-gray-800 dark:text-neutral-200">
                            {{ section.title }}
                        </h2>
                    </div>
                </div>
                <div class="mt-5 mb-10 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-3 lg:gap-5">
                    <div v-for="album in section.items" :key="album.title">
                        <div
                            class="p-0 bg-white border border-gray-200 rounded-2xl dark:bg-neutral-900 dark:border-neutral-700">
                            <div class="rounded-2xl m-auto w-[250px] h-[250px] p-7">
                                <NuxtImg class="h-auto w-full rounded-xl dark:bg-neutral-800"
                                    :src="`/assets/album/${album.art}`" />
                            </div>
                            <div class="p-0 space-y-5">
                                <div>
                                    <h2
                                        class="py-5 px-0 m-0 w-full font-sans text-base font-normal tracking-wider text-center text-white rounded-none bg-neutral-900">
                                        {{ album.title }}
                                    </h2>
                                    <div v-for="link in album.links" :key="link.href"
                                        class="flex justify-between items-center py-3 px-4 m-0 w-full text-center text-black border-solid border-y border-neutral-100">
                                        <img class="w-[100px] h-auto" :src="`/assets/images/${link.icon}`" />
                                        <a :href="link.href" target="_blank"
                                            class="float-right py-2 px-4 m-0 font-sans text-sm font-bold leading-3 text-center bg-white border border-solid cursor-pointer border-zinc-300 text-zinc-800 hover:border hover:border-solid hover:border-transparent hover:bg-neutral-700 hover:text-white"
                                            style="text-decoration: none; border-radius: 25px;">
                                            Ecouter
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const page = {
    section: "Le Chœur",
    title: "Discographie",
    breadcrumb: [
        { title: "Extraits", href: "/le-choeur/extraits" },
        { title: "Répertoire", href: "/le-choeur/repertoire" }
    ]
}
const { data: albums } = await useAsyncData(() => queryCollection('discographie').all())

const grouped = computed(() => {
    const result = {}
    for (const album of albums.value || []) {
        let title = "Albums";
        switch (album.type) {
            case 'single':
            case 'ep':
                title = "Singles & EP";
                break
        }
        const type = album.type || 'other'
        if (!result[title]) result[title] = {
            title: title,
            items: []
        }
        result[title].items.push(album)
    }
    for (const section of Object.values(result)) {
        section.items.sort((a, b) => (b.date || 0) - (a.date || 0))
    }
    return Object.values(result)
})

</script>
