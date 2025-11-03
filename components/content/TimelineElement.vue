<template>
    <div>
        <div class="flex items-center gap-x-1.5 mb-2 text-xl text-cinzel text-red-800 dark:text-neutral-200">
            <svg class="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M20 6 9 17l-5-5" />
            </svg>
            <slot name="date" />
        </div>

        <!-- Progress -->
        <div class="flex w-full h-1 bg-gray-200 rounded-sm overflow-hidden dark:bg-neutral-700" role="progressbar"
            aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
            <div class="flex flex-col justify-center rounded-sm overflow-hidden bg-blue-900 text-xs text-white text-center whitespace-nowrap transition duration-500 dark:bg-neutral-200"
                style="width: 100%"></div>
        </div>
        <!-- End Progress -->

        <div class="p-2 ">
            <h3 class="mb-1 text-lg font-black text-black dark:text-neutral-400">
                <slot name="titre" />
            </h3>
            <div class="leading-6 text-base text-gray-800 dark:text-neutral-200">
                <slot name="texte" />
            </div>
        </div>
    </div>
</template>