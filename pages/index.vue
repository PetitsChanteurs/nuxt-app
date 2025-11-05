<template>
    <!-- Hero -->
    <div class="px-0">
        <div class="h-120 md:h-[80dvh] flex flex-col rounded-2xl relative overflow-hidden">
            <video class="absolute inset-0 w-full h-full object-cover rounded-2xl"
                src="https://www.pccb.fr/wp-content/uploads/2025/09/video-pccb.mp4" autoplay muted loop
                playsinline></video>
            <div class="relative z-10 mt-auto w-2/3 md:max-w-lg ps-5 pb-5 md:ps-10 md:pb-10">
                <h1 class="text-xl md:text-2xl lg:text-4xl text-white">
                    Les ambassadeurs <br />de la paix
                </h1>
            </div>
        </div>
    </div>
    <!-- End Hero -->

    <!-- Listing -->
    <div class="max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-24 mx-auto">
        <div class="mb-6 sm:mb-10 max-w-2xl text-center mx-auto">
            <h1 class="font-medium text-black text-3xl sm:text-4xl">
                Prochains concerts
            </h1>
        </div>

        <!-- Card Grid -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            <BlockEvent v-for="event in events" :key="event._id" :event="event" />
        </div>
        <!-- End Card Grid -->

        <div class="mt-10 lg:mt-20 text-center">
            <NuxtLink
                class="relative inline-block font-medium md:text-lg text-black before:absolute before:bottom-0.5 before:start-0 before:-z-1 before:w-full before:h-1 before:bg-red-800 hover:before:bg-black focus:outline-hidden focus:before:bg-black"
                to="/le-choeur/concerts">
                Voir tous les concerts
            </NuxtLink>
        </div>
    </div>
    <!-- End Listing -->

    <BlockCitation title="Une aventure humaine et spirituelle"
        text="Depuis plus d’un siècle, les Petits Chanteurs à la Croix de Bois font résonner leurs voix cristallines à travers le monde. À Autun, ces jeunes unissent exigence musicale, élan spirituel et vie fraternelle pour porter un message d’espérance et de beauté universelle." />

    <!-- Contact -->
    <div class="max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-24 mx-auto">
        <div class="mb-6 sm:mb-10 max-w-2xl text-center mx-auto">
            <h2 class="font-medium text-black text-2xl sm:text-4xl">
                Contact
            </h2>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 lg:items-center gap-6 md:gap-8 lg:gap-12">
            <div class="aspect-w-16 aspect-h-6 lg:aspect-h-14 overflow-hidden bg-gray-100 rounded-2xl">
                <img class="group-hover:scale-105 group-focus:scale-105 transition-transform duration-500 ease-in-out object-cover rounded-2xl"
                    src="/assets/images/pccb-399.jpg" alt="Image de Contact">
            </div>
            <!-- End Col -->

            <div class="space-y-8 lg:space-y-16">
                <div>
                    <h3 class="mb-5 text-black">
                        Notre adresse
                    </h3>

                    <!-- Grid -->
                    <div class="grid sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-12">
                        <div class="flex gap-4">
                            <svg class="shrink-0 size-5 text-gray-500 dark:text-neutral-500"
                                xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                                stroke-linejoin="round">
                                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                                <circle cx="12" cy="10" r="3"></circle>
                            </svg>

                            <div class="grow">
                                <p class="text-sm text-gray-600">
                                    France
                                </p>
                                <address class="mt-1 text-black not-italic">
                                    7 Rue Saint Germain<br>
                                    71400 AUTUN
                                </address>
                            </div>
                        </div>
                    </div>
                    <!-- End Grid -->
                </div>

                <div>
                    <h3 class="mb-5 text-black">
                        Nos contacts
                    </h3>

                    <!-- Grid -->
                    <div class="grid sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-12">
                        <div class="flex gap-4">
                            <svg class="shrink-0 size-5 text-gray-500" xmlns="http://www.w3.org/2000/svg" width="24"
                                height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"
                                stroke-linecap="round" stroke-linejoin="round">
                                <path
                                    d="M21.2 8.4c.5.38.8.97.8 1.6v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V10a2 2 0 0 1 .8-1.6l8-6a2 2 0 0 1 2.4 0l8 6Z">
                                </path>
                                <path d="m22 10-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 10"></path>
                            </svg>

                            <div class="grow">
                                <p class="text-sm text-gray-600">
                                    Contact général
                                </p>
                                <p>
                                    <a class="relative inline-block font-medium text-black before:absolute before:bottom-0.5 before:start-0 before:-z-1 before:w-full before:h-1 before:bg-red-500 hover:before:bg-black focus:outline-hidden focus:before:bg-black"
                                        href="mailto:contact@pccb.fr">
                                        contact@pccb.fr
                                    </a>
                                </p>
                            </div>
                        </div>

                        <div class="flex gap-4">
                            <svg class="shrink-0 size-5 text-gray-500 dark:text-neutral-500"
                                xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round">
                                <path
                                    d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                            </svg>

                            <div class="grow">
                                <p class="text-sm text-gray-600">
                                    Infos recrutement
                                </p>
                                <p>
                                    <NuxtLink
                                        class="relative inline-block font-medium text-black before:absolute before:bottom-0.5 before:start-0 before:-z-1 before:w-full before:h-1 before:bg-red-500 hover:before:bg-black focus:outline-hidden focus:before:bg-black"
                                        to="/la-manecanterie/admission-devenir-pccb">
                                        Formulaire de contact
                                    </NuxtLink>
                                </p>
                            </div>
                        </div>
                    </div>
                    <!-- End Grid -->
                </div>
            </div>
            <!-- End Col -->
        </div>
    </div>
    <!-- End Contact -->
</template>

<script setup lang="ts">
import AudioPlayer from '@/components/base/AudioPlayer.vue'
/*
useSeoMeta({
    title: home.value?.title,
    description: home.value?.description
})
*/

// Récupérer les événements depuis le contenu
const { data: events } = await useAsyncData(() => queryCollection('events').limit(6).all())

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
