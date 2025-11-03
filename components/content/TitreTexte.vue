<template>
    <div class="mb-5 md:pb-0">
        <h3 class="text-xl lg:text-1xl text-red-800 dark:text-neutral-200">
            <slot name="titre" />
        </h3>
        <h2 class="text-cinzel text-2xl lg:text-3xl text-blue-900 dark:text-neutral-200 mt-2">
            <slot name="sous-titre" />
        </h2>
        <div class="flex flex-col gap-y-3 text-gray-500 dark:text-neutral-500 mt-3">
            <slot />
        </div>
    </div>
</template>