<template>

    <!-- Hero -->
    <div class="relative overflow-hidden">
        <div class="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-10">
            <div class="max-w-4xl text-center mx-auto">
                <h1 class="block text-xl text-gray-800 sm:text-3xl md:text-4xl">
                    Hébergés et scolarisés à <span class="text-blue-800">Autun</span> en <span
                        class="text-red-800">Bourgogne</span>,
                </h1>
                <p class="mt-3 text-lg text-gray-800">
                    les Petits Chanteurs à la Croix de Bois vivent une expérience unique alliant excellence musicale,
                    éducation rigoureuse et vie fraternelle.
                </p>
            </div>

            <div class="mt-10 relative max-w-5xl mx-auto">
                <div
                    class="w-full object-cover h-96 sm:h-120 bg-[url('/assets/images/slss.jpg')] bg-no-repeat bg-center bg-cover rounded-xl">
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
                            Voir le reportage
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
        <NuxtLink v-for="item in maneItems"
            class="p-4 flex flex-col border border-gray-200 rounded-xl hover:border-gray-300 focus:outline-hidden focus:border-gray-300"
            :to="item.href" :key="item.title">
            <h4 class="font-medium truncate text-gray-800">
                {{ item.title }}
            </h4>
            <p class="text-sm truncate text-gray-500">
                {{ item.text }}
            </p>
            <div class="mt-4 shrink-0 w-full h-50 bg-gray-100 rounded-xl">
                <img v-if="item.image" class="size-full object-cover object-center rounded-xl" :src="item.image"
                    alt="Card Image">
            </div>
        </NuxtLink>
        <!-- End Card -->
    </div>
    <!-- End Grid -->

</template>

<script setup lang="ts">
// Liste des sous-rubriques de la manécanterie
const maneItems = [
    {
        title: "Admission & Devenir PCCB",
        text: "Comment rejoindre la manécanterie et devenir Petit Chanteur à la Croix de Bois.",
        href: "/la-manecanterie/admission-devenir-pccb",
        image: "/assets/images/pccb-399.jpg"
    },
    {
        title: "Formation artistique",
        text: "Un enseignement musical et vocal d’excellence.",
        href: "/la-manecanterie/formation-artistique",
        image: "/assets/images/chanter.jpg"
    },
    {
        title: "Formation spirituelle",
        text: "Un parcours spirituel et humain pour chaque chanteur.",
        href: "/la-manecanterie/formation-spirituelle",
        image: "/assets/images/spirituelle.jpg"
    },
    {
        title: "Internat",
        text: "La vie quotidienne et l’accompagnement en internat.",
        href: "/la-manecanterie/internat",
        image: "/assets/images/internat.jpeg"
    },
    {
        title: "Mission",
        text: "La mission et les valeurs portées par la manécanterie.",
        href: "/la-manecanterie/mission",
        image: "/assets/images/mission.jpeg"
    },
    {
        title: "Projet éducatif",
        text: "Le projet éducatif et pédagogique de la manécanterie.",
        href: "/la-manecanterie/projet-educatif",
        image: "/assets/images/chanter-2.jpg"
    },
    {
        title: "Scolarité",
        text: "L’accompagnement scolaire des Petits Chanteurs.",
        href: "/la-manecanterie/scolarite",
        image: "/assets/images/slss.jpg"
    }
]
</script>
