<template>
    <!-- Hero -->
    <div class="pt-20 max-w-6xl px-4 sm:px-6 lg:px-8 mx-auto">
        <div class="pt-10 md:pt-20 pb-14 md:pb-20">
            <!-- Heading -->
            <div class="mb-10 mx-auto text-center">
                <h1 class="text-blue-800 text-3xl md:text-4xl">
                    Devenez Gardien <span class="text-red-800">de la Croix</span>
                </h1>

                <p class="mt-5 max-w-3xl mx-auto text-lg md:text-xl text-gray-800">
                    Et contribuez à la Mission des Petits Chanteurs à la Croix de Bois comme Missionnaires de la Paix et
                    Ambassadeurs de la France dans le monde.
                </p>
            </div>
            <!-- End Heading -->

            <div class="w-full h-64 md:h-104 bg-gray-100 rounded-xl">
                <img class="size-full object-cover rounded-xl" src="/assets/images/pccb-399-cropped.jpg"
                    alt="Hero Image">
            </div>
        </div>

        <!-- Title Description -->
        <div class="max-w-6xl px-4 sm:px-6 lg:px-8 mx-auto">
            <!-- Grid -->
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-10">
                <div class="lg:pe-[20%] ">
                    <h2 class="text-4xl md:text-5xl text-gray-800 leading-16">
                        Devenir <span class="text-blue-900">Gardien</span><br /><span class="text-red-800"> de la
                            Croix</span>
                        c'est :
                    </h2>
                </div>
                <!-- End Col -->

                <div class="space-y-5 text-lg mb-10">
                    <p class="text-gray-500">
                        <span class="text-bold text-red-800">Soutenir</span> une oeuvre éducative et missionnaire et
                        permettre à
                        de
                        jeunes talents de bénéficier d’une formation humaine, spirituelle
                        et musicale unique.
                    </p>
                    <p class="text-gray-500">
                        <span class="text-bold text-red-800">Faire vivre</span> une insitution centenaire qui représente
                        la France et ses valeurs dans le
                        monde entier et permettre de continuer la mission d'Ambassadeurs de la Paix dans le monde.
                    </p>
                    <p class="text-gray-500">
                        <span class="text-bold text-red-800">Faire un don</span> déductible de l'IR, de l'IS et de
                        l'IFI grâce à notre Fondation sous l’égide de la Fondation pour la Sauvegarde de l’Art Français.
                    </p>
                </div>
                <!-- End Col -->
            </div>
            <!-- End Grid -->
        </div>
        <!-- End Title Description -->

    </div>
    <!-- End Hero -->

    <BlockGardienServices />

    <!-- Projects -->
    <div class="">
        <div class="max-w-5xl px-4 xl:px-0 py-10 lg:py-20 mx-auto">
            <!-- Title -->
            <div class="max-w-3xl mb-10 lg:mb-14">
                <h2 class="text-blue-950 text-2xl md:text-4xl md:leading-tight">Nos projets</h2>
                <p class="mt-1 text-lg text-black">Découvrez nos prochaines Missions et celles qui ont le plus
                    besoin de
                    votre soutien.</p>
            </div>
            <!-- End Title -->

            <!-- Card Grid -->
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">

                <!-- Card -->
                <div v-for="project in projects" :key="project.title"
                    :class="'group p-4 md:p-6 h-full flex flex-col ' + project.class + ' border border-neutral-700 lg:border-transparent rounded-xl transition-all duration-300 lg:hover:border-[#ff0] lg:hover:-rotate-5 focus:outline-hidden lg:focus:border-[#ff0] lg:focus:-rotate-5'"
                    href="#">
                    <svg class="size-8 mb-5 text-white" width="86" height="86" viewBox="0 0 86 86" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path d="M43 5L86 81H0L43 5Z" fill="currentColor" />
                    </svg>

                    <h4 class="mt-5 text-xl text-white">
                        {{ project.title }}
                    </h4>

                    <p class="mt-2 text-white">
                        {{ project.description }}
                    </p>
                    <div class="pt-5 flex flex-row">
                        <div class="">
                            <a href="/nous-soutenir"
                                class="py-[7px] px-3.5 inline-flex items-center font-medium text-sm rounded-lg bg-white text-red-800 hover:bg-red-900 focus:outline-hidden hover:text-white focus:bg-red-900 disabled:opacity-50 disabled:pointer-events-none">
                                Soutenir ce projet </a>
                        </div>
                        <div class="right-0 ml-auto text-right">
                            <p class="text-[13px]/4">
                                <span class="font-semibold text-white">{{ project.progress }}%</span> <span
                                    class="text-white">de</span>
                                <span class="font-semibold text-white"> 100%</span> <span
                                    class="text-white">complété</span>
                            </p>

                            <!-- Legend Indicator -->
                            <div class="mt-2 flex items-center gap-2">
                                <div class="flex items-center gap-1">
                                    <span
                                        :class="project.progress > 20 ? 'shrink-0 w-5 h-2 inline-block bg-white rounded-full' : 'shrink-0 w-5 h-2 inline-block bg-gray-500 rounded-full'"></span>
                                    <span
                                        :class="project.progress > 40 ? 'shrink-0 w-5 h-2 inline-block bg-white rounded-full' : 'shrink-0 w-5 h-2 inline-block bg-gray-500 rounded-full'"></span>
                                    <span
                                        :class="project.progress > 60 ? 'shrink-0 w-5 h-2 inline-block bg-white rounded-full' : 'shrink-0 w-5 h-2 inline-block bg-gray-500 rounded-full'"></span>
                                    <span
                                        :class="project.progress > 80 ? 'shrink-0 w-5 h-2 inline-block bg-white rounded-full' : 'shrink-0 w-5 h-2 inline-block bg-gray-500 rounded-full'"></span>
                                    <span
                                        :class="project.progress == 100 ? 'shrink-0 w-5 h-2 inline-block bg-white rounded-full' : 'shrink-0 w-5 h-2 inline-block bg-gray-500 rounded-full'"></span>
                                </div>
                            </div>
                            <!-- End Legend Indicator -->
                        </div>
                    </div>
                </div>
                <!-- End Card -->

            </div>
            <!-- End Card Grid -->
        </div>
    </div>
    <!-- End Projects -->

    <!-- Pricing -->
    <div class="bg-neutral-900 bg-linear-to-b from-blue-900 to-transparent">
        <div class="max-w-5xl px-4 xl:px-0 py-10 lg:pt-20 mx-auto">
            <!-- Title -->
            <div class="max-w-3xl mb-10 lg:mb-14">
                <h2 class="text-white text-2xl md:text-4xl md:leading-tight">Devenez gardien de la croix
                </h2>
                <p class="mt-2 text-white text-lg">Et découvrez les avantages exclusifs qui vous sont réservés.</p>
            </div>
            <!-- End Title -->

            <!-- Grid -->
            <div class="xl:-mx-6 flex flex-col">
                <div v-for="price in pricing" :key="price.title"
                    class="relative after:absolute after:top-0 after:inset-x-4 md:after:inset-x-6 after:border-t after:border-neutral-700 first:after:border-t-0 py-3">
                    <!-- Pricing Card -->
                    <div
                        class="p-4 md:p-6 relative border border-transparent rounded-xl hover:border-red-800 before:absolute before:inset-0 before:rounded-b-xl before:bg-linear-to-b hover:before:from-transparent hover:before:via-transparent hover:before:to-red-800/10 before:via-80% before:opacity-0 hover:before:opacity-100">
                        <a class="after:absolute after:inset-0 after:z-1" href="#"></a>

                        <!-- Grid -->
                        <div class="grid grid-cols-1 lg:grid-cols-2 gap-y-5 gap-x-8">
                            <div>
                                <div class="mb-3 flex items-start gap-x-1">
                                    <span class="text-[#fff] text-3xl md:text-4xl">
                                        {{ price.value }} €
                                    </span>
                                    <span class="mb-1 self-end text-xs text-neutral-400">
                                        /mois
                                    </span>
                                </div>

                                <h4 class="text-2xl text-white">
                                    {{ price.title }}
                                </h4>

                                <p class="text-base mt-2 text-neutral-200">
                                    {{ price.description }}
                                </p>

                                <a href="/nous-soutenir"
                                    class="py-[7px] mt-4 px-3.5 inline-flex items-center font-medium text-sm rounded-lg bg-white text-blue-900 hover:bg-blue-900 focus:outline-hidden hover:text-white focus:bg-blue-900 disabled:opacity-50 disabled:pointer-events-none">
                                    Devenir Gardien de la Croix </a>

                            </div>
                            <!-- End Col -->

                            <div>
                                <!-- List -->
                                <ul class="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-sm">
                                    <li v-for="item in price.items" class="flex items-center gap-x-3">
                                        <span class="size-1 bg-[#ff0] rounded-full"></span>
                                        <span class="text-neutral-200 text-base">
                                            {{ item }}
                                        </span>
                                    </li>
                                </ul>
                                <!-- End List -->
                            </div>
                            <!-- End Col -->
                        </div>
                        <!-- End Grid -->
                    </div>
                    <!-- End Pricing Card -->
                </div>
            </div>
            <!-- End Grid -->
        </div>
    </div>
    <!-- End Pricing -->

</template>

<script type="ts" setup>
definePageMeta({ layout: 'default-full' })
const projects = [
    {
        title: 'Mission en Afrique',
        class: 'bg-blue-900',
        description: 'Soutenez une mission de 3 semaines en Afrique avec concerts et visite d\'écoles.',
        progress: 35,
    },
    {
        title: 'Album DUO',
        class: 'bg-red-800',
        description: 'Aidez-nous à produire un nouvel album studio avec des grandes voix françaises.',
        progress: 45,
    },
    {
        title: 'Bourses 2026',
        class: 'bg-blue-900',
        description: 'Participer à la scolarité pour aider des Petits Chanteurs pour l\'année 2026.',
        progress: 60,
    },
    {
        title: 'Documentaire',
        class: 'bg-red-800',
        description: 'Aidez à la réalisation d\'un documentaire sur la vie et les coulisses des Petits Chanteurs à la Croix de Bois.',
        progress: 25,
    },
    {
        title: 'Tournée Européenne',
        class: 'bg-blue-900',
        description: 'Participez à la première grande tournée européenne des Petits Chanteurs, avec des concerts dans 8 pays.',
        progress: 15,
    }, {
        title: 'Chœur Solidaire',
        class: 'bg-green-800',
        description: 'Soutenez la création d\'un programme musical solidaire pour intervenir dans les hôpitaux et maisons de retraite.',
        progress: 5,
    },
];
const pricing = [
    {
        title: 'Aspirant Gardien',
        value: '50',
        description: 'Premier niveau des gardiens de la croix.',
        items: [
            'Bulletin d\'information régulier',
            'Accès à des contenus exclusifs',
            'Participation à des événements spéciaux',
            '2 invitations par an au concert proche de chez vous',
        ],
    },
    {
        title: 'Gardien',
        value: '500',
        description: 'Deuxième niveau des gardiens de la croix.',
        items: [
            'Bulletin d\'information régulier',
            'Accès à des contenus exclusifs',
            'Participation à des événements spéciaux',
            '10 invitations par an au concert proche de chez vous',
            'Pin\'s des Gardiens',
        ],
    },
    {
        title: 'Grand Gardien',
        value: '2000',
        description: 'Niveau ultime des gardiens de la croix.',
        items: [
            'Bulletin d\'information régulier',
            'Accès à des contenus exclusifs',
            'Participation à des événements spéciaux',
            '50 invitations par an au concert proche de chez vous',
            'Pin\'s des Grands Gardiens',
            'Rencontre annuelle avec le groupe',
            'Accès VIP aux coulisses lors des concerts',
            'Organisation d\'un concert annuel privé pour vous et vos invités dans le lieu de votre choix',
        ],
    },
];
</script>