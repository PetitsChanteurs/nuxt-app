<template>
    <!-- Card -->
    <div class="group flex flex-col">
        <div class="relative">
            <div class="h-48 w-auto overflow-hidden rounded-2xl">
                <img class="size-full object-cover rounded-2xl" src="/assets/bg/event.jpg" alt="">
            </div>

            <div class="pt-4">
                <h3 class="font-medium md:text-lg text-black">
                    {{ props.event.ville }}
                </h3>

                <p class="mt-2 font-semibold text-black">
                    {{ props.event.datetime }}
                </p>
            </div>
        </div>

        <div class="mb-2 mt-4 text-sm">
            <!-- List -->
            <div class="flex flex-col">
                <!-- Item -->
                <div class="py-3 border-t border-gray-200 dark:border-neutral-700">
                    <div class="grid grid-cols-2 gap-2">
                        <div>
                            <span class="font-medium text-black">Lieu du concert :</span>
                        </div>

                        <div class="text-end">
                            <span class="text-black">{{ props.event.lieu }}</span>
                        </div>
                    </div>
                </div>
                <!-- End Item -->

            </div>
            <!-- End List -->
        </div>

        <div class="mt-auto">
            <a class="py-2 px-3 w-full inline-flex justify-center items-center gap-x-2 text-sm font-medium text-nowrap rounded-xl border border-transparent bg-blue-900 text-white hover:bg-blue-950 focus:outline-hidden focus:bg-yellow-500 transition disabled:opacity-50 disabled:pointer-events-none"
                target="_blank" :href="props.event.url">
                Réserver des places
            </a>
        </div>
    </div>
    <!-- End Card -->
</template>

<script setup lang="ts">
const props = defineProps<{
    event: {
        title: string;
        ville: string;
        lieu: string;
        datetime: string;
        url: string;
        type: string;
        widget?: string;
    };
}>();
</script>