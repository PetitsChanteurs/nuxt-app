<template>
    <!-- ========== HEADER ========== -->
    <header class="fixed flex flex-wrap md:justify-start md:flex-nowrap z-50 w-full bg-white border-b border-gray-200">
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
                <NuxtLink to="/">
                    <NuxtImg src="/assets/images/logo.png" alt="Logo" class="h-full w-auto max mx-auto" />
                </NuxtLink>
            </div>

            <!-- Boutons à droite -->
            <div id="bouton" class="flex flex-wrap col-span-2 justify-end items-center gap-x-1.5">
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
        </nav>
    </header>
    <!-- ========== END HEADER ========== -->
</template>

<script lang="ts" setup>
import menu from "@/config/menu.fr.json";
</script>
