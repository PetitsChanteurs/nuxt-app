<template>
    <!-- ========== HEADER ========== -->
    <header class="flex flex-wrap md:justify-start md:flex-nowrap z-50 w-full bg-white border-b border-gray-200">
        <nav
            class="relative max-w-7xl w-full mx-auto grid grid-cols-5 items-center justify-between py-2 px-4 sm:px-6 lg:px-8">
            <!-- Menu à gauche -->
            <div id="menu" class="flex flex-col col-span-2 md:flex-row md:items-center gap-0.5 md:gap-1">
                <div v-for="item in menu" :key="item.href" :item="item">
                    <!--
                    <BaseMenuDropdown v-if="item.items?.length > 0" :item="item" />
                    -->
                    <BaseMenuItem :item="item" />
                </div>
            </div>

            <!-- Logo au centre -->
            <div id="logo" class="flex justify-center items-center flex-1">
                <NuxtImg src="/assets/images/logo.png" height="80" alt="Logo" class="h-[80px] mx-auto" />
            </div>

            <!-- Boutons à droite -->
            <div id="bouton" class="flex flex-wrap col-span-2 justify-end items-center gap-x-1.5">
                <a class="py-[7px] px-3.5 inline-flex items-center font-medium text-sm rounded-lg border border-blue-950 bg-blue-950 text-white shadow-2xs hover:bg-blue-900 disabled:opacity-50 disabled:pointer-events-none"
                    href="#">
                    Les Gardiens de la Croix
                </a>
                <a class="py-[7px] px-3.5 inline-flex items-center font-medium text-sm rounded-lg bg-red-800 text-white hover:bg-red-900 focus:outline-hidden focus:bg-red-900 disabled:opacity-50 disabled:pointer-events-none"
                    href="#">
                    Nous soutenir
                </a>
            </div>
        </nav>
    </header>
    <!-- ========== END HEADER ========== -->

    <!-- Nav -->
    <nav class="bg-white dark:bg-neutral-900" v-if="menu[0].active || menu[1].active || menu[2].active">
        <div
            class="max-w-[85rem] w-full mx-auto sm:flex sm:flex-row sm:justify-between sm:items-center sm:gap-x-3 py-3 px-4 sm:px-6 lg:px-8">
            <div class="flex justify-between items-center gap-x-3">
                <div class="grow">
                    <span class="font-semibold whitespace-nowrap text-gray-800 dark:text-neutral-200">My project</span>
                </div>

                <button type="button"
                    class="hs-collapse-toggle sm:hidden py-1.5 px-2 inline-flex items-center font-medium text-xs rounded-md border border-gray-200 bg-white text-gray-800 shadow-2xs hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 focus:outline-hidden focus:bg-gray-100 dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
                    data-hs-collapse="#hs-nav-secondary" aria-controls="hs-nav-secondary"
                    aria-label="Toggle navigation">
                    Overview
                    <svg class="hs-dropdown-open:rotate-180 shrink-0 size-4 ms-1" xmlns="http://www.w3.org/2000/svg"
                        width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                        stroke-linecap="round" stroke-linejoin="round">
                        <path d="m6 9 6 6 6-6" />
                    </svg>
                </button>
            </div>

            <div id="hs-nav-secondary"
                class="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow sm:block">
                <div class="py-2 sm:py-0 flex flex-col sm:flex-row sm:justify-end gap-y-2 sm:gap-y-0 sm:gap-x-6">
                    <a class="font-medium text-sm text-blue-600 focus:outline-hidden focus:text-blue-600 dark:text-blue-500 dark:focus:text-blue-500"
                        href="#">Overview</a>
                    <a class="font-medium text-sm text-gray-800 hover:text-blue-600 focus:outline-hidden focus:text-blue-600 dark:text-neutral-200 dark:hover:text-blue-500 dark:focus:text-blue-500"
                        href="#">Features</a>
                    <a class="font-medium text-sm text-gray-800 hover:text-blue-600 focus:outline-hidden focus:text-blue-600 dark:text-neutral-200 dark:hover:text-blue-500 dark:focus:text-blue-500"
                        href="#">Platforms</a>
                    <a class="font-medium text-sm text-gray-800 hover:text-blue-600 focus:outline-hidden focus:text-blue-600 dark:text-neutral-200 dark:hover:text-blue-500 dark:focus:text-blue-500"
                        href="#">Pricing</a>
                </div>
            </div>
        </div>
    </nav>
    <!-- End Nav -->
</template>

<script lang="ts" setup>
import menu from "@/config/menu.fr.json";
</script>
