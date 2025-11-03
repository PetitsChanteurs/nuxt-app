<template>
    <!-- Testimonials -->
    <div class="py-10 md:py-16 lg:py-20 bg-blue-100">
        <div class="px-4 sm:px-6 lg:px-8">
            <!-- Grid -->
            <div class="grid grid-cols-1 md:grid-cols-2 md:items-center">
                <div class="relative h-80 md:h-150 bg-gray-100 rounded-2xl">
                    <img class="absolute inset-0 size-full object-cover rounded-2xl" src="/assets/images/pccb-276.jpg"
                        alt="Testimonials Image">
                </div>
                <!-- End Col -->

                <div class="pt-10 md:p-10">
                    <blockquote class="max-w-4xl mx-auto">
                        <p class="mb-6 md:text-lg text-cinzel">
                            {{ props.title }}
                        </p>

                        <p class="text-xl sm:text-2xl lg:text-3xl lg:leading-normal text-gray-800">
                            « {{ props.text }} »
                        </p>

                        <footer class="mt-6 md:mt-10">
                            <div class="border-neutral-700">
                                <button type="button"
                                    class="group inline-flex items-center gap-x-3 text-gray-800 text-lg focus:outline-hidden disabled:opacity-50 disabled:pointer-events-none cursor-pointer"
                                    aria-haspopup="dialog" aria-expanded="false"
                                    aria-controls="hs-vertically-centered-modal"
                                    data-hs-overlay="#hs-vertically-centered-modal">
                                    <span
                                        class="size-10 md:size-12 flex flex-col justify-center items-center bg-black text-white rounded-full group-hover:scale-105 group-focus:scale-105 transition-transform duration-300 ease-in-out">
                                        <svg class="shrink-0 size-5" xmlns="http://www.w3.org/2000/svg" width="16"
                                            height="16" fill="currentColor" viewBox="0 0 16 16">
                                            <path
                                                d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393" />
                                        </svg>
                                    </span>
                                    Voir le reportage
                                </button>
                            </div>
                        </footer>
                    </blockquote>
                </div>
                <!-- End Col -->
            </div>
            <!-- End Grid -->
        </div>


        <div id="hs-vertically-centered-modal"
            class="hs-overlay hidden size-full fixed top-0 start-0 z-80 overflow-x-hidden overflow-y-auto pointer-events-none"
            role="dialog" tabindex="-1" aria-labelledby="hs-vertically-centered-modal-label">
            <div
                class="hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 mt-0 opacity-0 ease-out transition-all sm:max-w-lg sm:w-full m-3 sm:mx-auto min-h-[calc(100%-56px)] flex items-center">
                <div
                    class="w-full flex flex-col bg-white border border-gray-200 shadow-2xs rounded-xl pointer-events-auto">
                    <div class="flex justify-between items-center py-3 px-4 border-b border-gray-200">
                        <h3 id="hs-vertically-centered-modal-label" class="font-bold text-gray-800">
                            Les Petits Chanteurs à la Croix de Bois
                        </h3>
                        <button type="button"
                            class="size-8 inline-flex justify-center items-center gap-x-2 rounded-full border border-transparent bg-gray-100 text-gray-800 hover:bg-gray-200 focus:outline-hidden focus:bg-gray-200 disabled:opacity-50 disabled:pointer-events-none"
                            aria-label="Fermer" data-hs-overlay="#hs-vertically-centered-modal">
                            <span class="sr-only">Fermer</span>
                            <svg class="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                stroke-linecap="round" stroke-linejoin="round">
                                <path d="M18 6 6 18"></path>
                                <path d="m6 6 12 12"></path>
                            </svg>
                        </button>
                    </div>
                    <div class="p-4 overflow-y-auto">
                        <video ref="reportageVideo" class="w-full h-auto rounded-lg" controls>
                            <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4">
                            Votre navigateur ne prend pas en charge la balise vidéo.
                        </video>
                    </div>
                </div>
            </div>
        </div>

    </div>
    <!-- End Testimonials -->
</template>

<script lang="ts" setup>

import { onMounted, ref } from 'vue';

const props = defineProps<{
    title: string;
    text: string;
}>();

const reportageVideo = ref<HTMLVideoElement | null>(null);

onMounted(() => {
    // HS Overlay utilise l'événement 'hidden' sur le modal
    const modal = document.getElementById('hs-vertically-centered-modal');
    if (modal) {
        modal.addEventListener('hidden.hs.overlay', () => {
            if (reportageVideo.value) {
                reportageVideo.value.pause();
                reportageVideo.value.currentTime = 0;
            }
        });
    }
});
</script>
