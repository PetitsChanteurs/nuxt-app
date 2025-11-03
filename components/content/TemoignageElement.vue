<template>

    <div class="flex h-auto">
        <div class="flex flex-col bg-white rounded-xl dark:bg-neutral-900">
            <div class="flex-auto p-4 md:p-6">
                <div class="text-base italic md:text-lg text-gray-800 dark:text-neutral-200">
                    «
                    <slot name="texte" /> »
                </div>
            </div>

            <div class="p-4 bg-gray-100 rounded-b-xl md:px-7 dark:bg-neutral-800">
                <div class="flex items-center gap-x-3">
                    <div class="shrink-0">
                        <div class="text-sm sm:text-base font-semibold text-gray-800 dark:text-neutral-200">
                            <slot name="nom" />
                        </div>
                        <div class="text-xs text-gray-500 dark:text-neutral-400">
                            <slot name="lieu" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>