<template>

    <!-- Hero -->
    <div class="relative overflow-hidden">
        <div class="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-10">
            <div class="max-w-4xl text-center mx-auto">
                <h1 class="block text-xl text-gray-800 sm:text-3xl md:text-4xl">
                    Décrits comme des <span class="text-blue-800">ambassadeurs de la France</span> <span
                        class="text-red-800">aux voix
                        cristallines</span>,
                </h1>
                <p class="mt-3 text-lg text-gray-800">
                    les Petits Chanteurs à la Croix de Bois comptent parmi les chœurs de garçons les plus accomplis au
                    monde.
                </p>
            </div>

            <div class="mt-10 relative max-w-5xl mx-auto">
                <div
                    class="w-full object-cover h-96 sm:h-120 bg-[url('/assets/images/photo_3.jpg')] bg-no-repeat bg-center bg-cover rounded-xl">
                </div>

                <div class="absolute inset-0 size-full">
                    <div class="flex flex-col justify-top pt-30 items-center size-full">
                        <NuxtLink to="/le-choeur/extraits"
                            class="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-full border border-gray-200 bg-white text-gray-800 shadow-2xs hover:bg-gray-50 focus:outline-hidden focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none"
                            href="#">
                            <svg class="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                stroke-linecap="round" stroke-linejoin="round">
                                <polygon points="5 3 19 12 5 21 5 3" />
                            </svg>
                            Ecouter des extraits
                        </NuxtLink>
                    </div>
                </div>

                <div
                    class="absolute bottom-12 -start-20 -z-1 size-48 bg-linear-to-b from-orange-500 to-white p-px rounded-lg">
                    <div class="bg-white size-48 rounded-lg"></div>
                </div>

                <div
                    class="absolute -top-12 -end-20 -z-1 size-48 bg-linear-to-t from-blue-600 to-cyan-400 p-px rounded-full">
                    <div class="bg-white size-48 rounded-full"></div>
                </div>
            </div>
        </div>
    </div>
    <!-- End Hero -->

    <!-- Grid -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-6">
        <!-- Card -->
        <NuxtLink v-for="item in page.items"
            class="p-4 flex flex-col border border-gray-200 rounded-xl hover:border-gray-300 focus:outline-hidden focus:border-gray-300"
            :to="item.href" :key="item.title">
            <h4 class="font-medium truncate text-gray-800">
                {{ item.title }}
            </h4>
            <p class="text-sm truncate text-gray-500">
                {{ item.text }}
            </p>
            <div class="mt-4 shrink-0 w-full h-50 bg-gray-100 rounded-xl">
                <img class="size-full object-cover object-center rounded-xl" :src="item.image" alt="Card Image">
            </div>
        </NuxtLink>
        <!-- End Card -->
    </div>
    <!-- End Grid -->

</template>

<script setup lang="ts">
const page = {
    section: "Le Chœur",
    title: "Accueil",
    breadcrumb: [
        { title: "Bureau des Anciens", href: "/le-choeur/bureau-des-anciens" },
        { title: "Histoire", href: "/le-choeur/histoire" }
    ],
    items: [
        {
            title: "Histoire",
            image: "/assets/images/histoire_paul-et-jacques-berthier.jpg",
            text: "Découvrez l'histoire des PCCB de 1907 à nos jours",
            href: "/le-choeur/histoire"
        },
        { title: "Concerts", image: "/assets/bg/event.jpg", text: "Tout l'agenda des concerts en France et dans le monde", href: "/le-choeur/concerts" },
        { title: "Extraits", image: "/assets/images/photo_3.jpg", text: "Les extraits de concerts et les clips", href: "/le-choeur/extraits" },
        { title: "Discographie", image: "/assets/album/comme-un-chant-d-esperance.jpg", text: "La discographie du choeur", href: "/le-choeur/discographie" },
        { title: "Répertoire", image: "/assets/bg/bg-01.jpg", text: "Le répertoire musical", href: "/le-choeur/repertoire" },
        { title: "Prestations", image: "/assets/images/photo_1.jpg", text: "Toutes les prestations proposées", href: "/le-choeur/prestations" },
        { title: "Partenaires", image: "/assets/images/photo_2.jpg", text: "En grand merci à chaque partenaire", href: "/le-choeur/partenaires" },
        { title: "Les Pueri Cantores", image: "/assets/images/photo_2.jpg", text: "Fondés par les PCCB en 1924", href: "/le-choeur/pueri-cantores" },
        { title: "Bureau des anciens", image: "/assets/images/photo_2.jpg", text: "Avec l'annuaire des anciens par année", href: "/le-choeur/bureau-des-anciens" }
    ]
}
</script>
