<template>
    <!-- Services -->
    <div class="bg-blue-900">
        <div class="max-w-6xl mx-auto px-4 py-10 xl:px-0">

            <!-- Listing -->
            <div class="flex flex-col gap-y-10">
                <!-- Service Listing -->
                <div v-for="service in services" :key="service.id" class="py-4 md:py-6 border-b-1 border-white/20">
                    <!-- Grid -->
                    <div class="mb-6 grid grid-cols-1 lg:grid-cols-2 gap-y-5 gap-x-8">
                        <div class="flex gap-x-5 lg:pe-10">
                            <svg class="shrink-0 size-10 text-neutral-200" xmlns="http://www.w3.org/2000/svg" width="24"
                                height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"
                                stroke-linecap="round" stroke-linejoin="round">
                                <path d="M10 11h.01" />
                                <path d="M14 6h.01" />
                                <path d="M18 6h.01" />
                                <path d="M6.5 13.1h.01" />
                                <path d="M22 5c0 9-4 12-6 12s-6-3-6-12c0-2 2-3 6-3s6 1 6 3" />
                                <path d="M17.4 9.9c-.8.8-2 .8-2.8 0" />
                                <path
                                    d="M10.1 7.1C9 7.2 7.7 7.7 6 8.6c-3.5 2-4.7 3.9-3.7 5.6 4.5 7.8 9.5 8.4 11.2 7.4.9-.5 1.9-2.1 1.9-4.7" />
                                <path d="M9.1 16.5c.3-1.1 1.4-1.7 2.4-1.4" />
                            </svg>

                            <div class="grow">
                                <h4 class="text-white text-3xl text-cinzel-deco">
                                    {{ service.title }}
                                </h4>
                                <p class="mt-3 text-base text-neutral-200">
                                    {{ service.description }}
                                </p>
                            </div>
                        </div>
                        <!-- End Col -->

                        <div class="ps-16 lg:ps-0 mb-4">
                            <!-- List -->
                            <ul class="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-base">
                                <li v-for="item in service.items" class="flex items-center gap-x-3">
                                    <span class="size-1 bg-[#ff0] rounded-full"></span>
                                    <span class="text-neutral-200">
                                        {{ item }}
                                    </span>
                                </li>
                            </ul>
                            <!-- End List -->
                        </div>
                        <!-- End Col -->
                    </div>
                    <!-- End Grid -->

                    <!-- Slider -->
                    <ClientOnly>
                        <div data-hs-carousel='{
        "loadingClasses": "opacity-0",
        "dotsItemClasses": "hs-carousel-active:bg-blue-700 hs-carousel-active:border-blue-700 size-3 border border-gray-400 rounded-full cursor-pointer",
        "slidesQty": {
          "xs": 1,
          "sm": 2,
          "md": 3
        },
        "isDraggable": true
      }' class="relative">
                            <div class="hs-carousel w-full overflow-hidden">
                                <div class="relative min-h-50 -mx-1.5 lg:-mx-3">
                                    <!-- transition-transform duration-700 -->
                                    <div
                                        class="hs-carousel-body absolute top-0 bottom-0 start-0 flex flex-nowrap opacity-0 transition-transform duration-700">
                                        <!-- Slide -->
                                        <div v-for="image in service.images" class="hs-carousel-slide px-1.5 lg:px-3">
                                            <div class="h-50 bg-neutral-800 rounded-xl">
                                                <img class="size-full object-cover rounded-xl" :src="image">
                                            </div>
                                        </div>
                                        <!-- End Slide -->
                                    </div>
                                </div>
                            </div>

                            <!-- Footer -->
                            <div class="mt-5 flex flex-wrap justify-between gap-3">
                                <div>
                                    <!-- Link -->

                                    <!-- End Link -->
                                </div>

                                <div class="flex items-center gap-x-2 mt-4">
                                    <!-- Arrows -->
                                    <button type="button"
                                        class="hs-carousel-prev hs-carousel-disabled:opacity-50 hs-carousel-disabled:pointer-events-none inline-flex justify-center items-center w-12 h-8 border border-neutral-800 text-neutral-400 rounded-full hover:border-neutral-700 focus:outline-hidden focus:border-white cursor-pointer">
                                        <span class="text-2xl" aria-hidden="true">
                                            <svg class="shrink-0 size-5" xmlns="http://www.w3.org/2000/svg" width="24"
                                                height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                                <path d="m15 18-6-6 6-6"></path>
                                            </svg>
                                        </span>
                                        <span class="sr-only">Précédent</span>
                                    </button>
                                    <button type="button"
                                        class="hs-carousel-next hs-carousel-disabled:opacity-50 hs-carousel-disabled:pointer-events-none inline-flex justify-center items-center w-12 h-8 border border-neutral-800 text-neutral-400 rounded-full hover:border-neutral-700 focus:outline-hidden focus:border-white cursor-pointer">
                                        <span class="sr-only">Suivant</span>
                                        <span class="text-2xl" aria-hidden="true">
                                            <svg class="shrink-0 size-5" xmlns="http://www.w3.org/2000/svg" width="24"
                                                height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                                <path d="m9 18 6-6-6-6"></path>
                                            </svg>
                                        </span>
                                    </button>
                                    <!-- End Arrows -->
                                </div>
                            </div>
                            <!-- End Footer -->
                        </div>
                    </ClientOnly>
                    <!-- End Slider -->
                </div>
                <!-- End Service Listing -->
            </div>
            <!-- End Listing -->
        </div>
        <!-- End Services -->
    </div>
</template>

<script setup lang="ts">
onMounted(() => {
    window.setTimeout(() => {
        window.HSStaticMethods.autoInit()
    }, 300);
});
const services = ref([
    {
        icon: 'bourse',
        title: 'Aider les petits chanteurs (bourse d\'étude)',
        description: "Soutenez les Petits Chanteurs en leur offrant une bourse d'étude. Cette bourse permet au plus grand nombre d'accéder à la formation musicale et scolaire proposée par la Manécanterie.",
        items: [
            "Financer l'inscription",
            "Aider à l'achat de fournitures",
            "Soutenir les frais de déplacement",
            "Contribuer à l'achat des uniformes",
            "Offrir une aide pour les repas",
            "Aider pour l'hébergement",
            "Aider à l'achat d'un instrument",
            "Soutenir l'équipe éducative"
        ],
        images: [
            '/assets/images/pccb-276.jpg',
            '/assets/images/pccb-399.jpg',
            '/assets/images/photo_1.jpg',
            '/assets/images/photo_2.jpg',
        ]
    },
    {
        icon: 'concert',
        title: 'Organiser un concert',
        description: "Participez à l'organisation de concerts pour faire rayonner la musique des Petits Chanteurs à la Croix de Bois et offrir des expériences uniques au public.",
        items: [
            "Organiser un concert",
            "Lever des fonds",
            "Aider à la communication",
            "Financer un concert privé",
            "Contribuer à l'achat d'équipements",
            "Permettre l'enregistrement",
            "Aider à l'accueil des artistes",
            "Soutenir la logistique",
        ],
        images: [
            '/assets/images/pccb-276.jpg',
            '/assets/images/pccb-399.jpg',
            '/assets/images/photo_1.jpg',
            '/assets/images/photo_2.jpg',
        ]
    },
    {
        icon: 'creation',
        title: 'Dons pour créations musicales',
        description: "Aidez à la création de nouvelles œuvres musicales et à l'innovation artistique au sein du chœur. Permettre l'émergence de nouveaux projets.",
        items: [
            "Commande d'œuvres originales",
            "Résidence d'un compositeur",
            "Achat de partitions inédites",
            "Production d'un album",
            "Création de clips vidéo",
            "Ateliers d'écriture et de composition",
            "Diffusion numérique des créations",
            "Collaborations avec d'autres artistes"
        ],
        images: [
            '/assets/images/pccb-276.jpg',
            '/assets/images/pccb-399.jpg',
            '/assets/images/photo_1.jpg',
            '/assets/images/photo_2.jpg',
        ]
    }
]);
</script>