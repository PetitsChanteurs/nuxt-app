<template>
    <!-- ========== HEADER ========== -->
    <header class="fixed flex flex-wrap md:justify-start md:flex-nowrap z-50 w-full bg-white border-b border-gray-200">
        <nav
            class="relative h-22 max-w-7xl w-full mx-auto grid grid-cols-5 items-center justify-between py-2 px-4 sm:px-6 lg:px-8">
            <!-- Menu à gauche -->
            <div id="menu" class="flex flex-col col-span-2 md:flex-row md:items-center gap-0.5 md:gap-1">
                <div class="hidden md:flex" v-for="item in menu" :key="item.href" :item="item">
                    <!--
                    <BaseMenuDropdown v-if="item.items?.length > 0" :item="item" />
                    -->
                    <BaseMenuItem :item="item" />
                </div>
            </div>

            <!-- Logo au centre -->
            <div id="logo" class="flex justify-center items-center flex-1">
                <NuxtLink to="/">
                    <NuxtImg src="/assets/images/logo.png" alt="Logo" class="h-auto w-auto max mx-auto" />
                </NuxtLink>
            </div>

            <!-- Boutons à droite -->
            <div id="bouton" class="hidden md:flex flex flex-wrap col-span-2 justify-end items-center gap-x-1.5">
                <NuxtLink
                    class="py-[7px] px-3.5 inline-flex items-center font-medium text-sm rounded-lg border border-blue-950 bg-blue-950 text-white shadow-2xs hover:bg-blue-900 disabled:opacity-50 disabled:pointer-events-none"
                    to="/les-gardiens-de-la-croix">
                    Les Gardiens de la Croix
                </NuxtLink>
                <NuxtLink
                    class="py-[7px] px-3.5 inline-flex items-center font-medium text-sm rounded-lg bg-red-800 text-white hover:bg-red-900 focus:outline-hidden focus:bg-red-900 disabled:opacity-50 disabled:pointer-events-none"
                    to="/nous-soutenir">
                    Nous soutenir
                </NuxtLink>
            </div>

            <!-- Collapse Button -->
            <div id="bouton" class="md:hidden flex flex-wrap col-span-2 justify-end items-center gap-x-1.5">
                <button type="button"
                    class="hs-collapse-toggle md:hidden relative size-9 flex justify-center items-center font-medium text-sm rounded-lg border border-gray-200 text-gray-800 hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:border-neutral-700 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
                    id="hs-header-base-collapse" aria-expanded="false" aria-controls="hs-header-base"
                    aria-label="Toggle navigation" data-hs-collapse="#hs-header-base">
                    <svg class="hs-collapse-open:hidden size-4" xmlns="http://www.w3.org/2000/svg" width="24"
                        height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                        stroke-linecap="round" stroke-linejoin="round">
                        <line x1="3" x2="21" y1="6" y2="6" />
                        <line x1="3" x2="21" y1="12" y2="12" />
                        <line x1="3" x2="21" y1="18" y2="18" />
                    </svg>
                    <svg class="hs-collapse-open:block shrink-0 hidden size-4" xmlns="http://www.w3.org/2000/svg"
                        width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                        stroke-linecap="round" stroke-linejoin="round">
                        <path d="M18 6 6 18" />
                        <path d="m6 6 12 12" />
                    </svg>
                    <span class="sr-only">Afficher la navigation</span>
                </button>
            </div>
            <!-- End Collapse Button -->
        </nav>
        <!-- Collapse -->
        <div id="hs-header-base" class="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow "
            aria-labelledby="hs-header-base-collapse">
            <div
                class="overflow-hidden overflow-y-auto max-h-[75vh] [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-neutral-700 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500">
                <div class="py-2 md:py-0  flex flex-col md:flex-row md:items-center gap-0.5 md:gap-1">
                    <div class="grow">
                        <div class="flex flex-col md:flex-row md:justify-end md:items-center gap-0.5 md:gap-1">
                            <div v-for="item in menu" :key="item.href">
                                <NuxtLink v-if="item.items"
                                    class="p-2 flex items-center text-sm rounded-lg focus:outline-hidden focus:bg-gray-100 dark:bg-neutral-700 dark:text-neutral-200 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
                                    :to="item.href" aria-current="page" @click="closeMenu()">
                                    <svg class="shrink-0 size-4 me-3 md:me-2 block md:hidden"
                                        xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                        fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round">
                                        <path d="m3 10 2.5-2.5L3 5" />
                                        <path d="m3 19 2.5-2.5L3 14" />
                                        <path d="M10 6h11" />
                                        <path d="M10 12h11" />
                                        <path d="M10 18h11" />
                                    </svg>
                                    {{ item.title }}
                                </NuxtLink>
                            </div>
                        </div>
                    </div>

                    <div class="my-2 md:my-0 md:mx-2">
                        <div class="w-full h-px md:w-px md:h-4 bg-gray-100 md:bg-gray-300 dark:bg-neutral-700"></div>
                    </div>

                    <!-- Button Group -->
                    <div class="px-2 flex flex-wrap items-center gap-x-1.5">
                        <NuxtLink
                            class="py-[7px] px-3.5 inline-flex items-center font-medium text-sm rounded-lg border border-blue-950 bg-blue-950 text-white shadow-2xs hover:bg-blue-900 disabled:opacity-50 disabled:pointer-events-none"
                            to="/les-gardiens-de-la-croix" @click="closeMenu()">
                            Les Gardiens de la Croix
                        </NuxtLink>
                        <NuxtLink
                            class="py-[7px] px-3.5 inline-flex items-center font-medium text-sm rounded-lg bg-red-800 text-white hover:bg-red-900 focus:outline-hidden focus:bg-red-900 disabled:opacity-50 disabled:pointer-events-none"
                            to="/nous-soutenir" @click="closeMenu()">
                            Nous soutenir
                        </NuxtLink>
                    </div>
                    <!-- End Button Group -->
                </div>
            </div>
        </div>
        <!-- End Collapse -->
    </header>
    <!-- ========== END HEADER ========== -->
</template>

<script lang="ts" setup>
import menu from "@/config/menu.fr.json";

function closeMenu() {
    const collapse = document.getElementById('hs-header-base-collapse');
    if (collapse) collapse.classList.remove('open');

    const header = document.getElementById('hs-header-base');
    if (header) {
        header.classList.remove('open');
        header.classList.add('hidden');
    }
}
</script>
