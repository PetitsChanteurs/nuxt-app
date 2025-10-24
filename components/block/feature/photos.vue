<template>
    <!-- Features -->
    <div class="max-w-[85rem] px-0 py-5 lg:py-7 mx-auto">
        <!-- Grid -->
        <div class="lg:grid lg:grid-cols-12 gap-8 lg:gap-16 lg:items-center">

            <!-- Start Col -->
            <div class="mt-5 sm:mt-10 lg:mt-0 lg:col-span-6 order-1 md:order-2">
                <div class="space-y-6 sm:space-y-8">
                    <!-- Title -->
                    <div class="space-y-2 md:space-y-4">
                        <h3 class="text-xl lg:text-2xl text-red-700 dark:text-neutral-200">
                            {{ data.subtitle }}
                        </h3>
                        <h2 class="text-cinzel text-2xl lg:text-4xl text-blue-900 dark:text-neutral-200">
                            {{ data.title }}
                        </h2>
                        <div class="flex flex-col gap-y-3 text-gray-500 dark:text-neutral-500" v-html="data.text">
                        </div>
                    </div>
                    <!-- End Title -->
                </div>
            </div>
            <!-- End Col -->

            <!-- Start Col -->
            <div class="lg:col-span-6 overflow-hidden order-2 md:order-1">
                <!-- Grid -->
                <div class="mt-10 flex gap-8 sm:justify-start lg:mt-0 lg:pl-0">
                    <div class="w-44 flex-none space-y-8 pt-16 sm:pt-0">
                        <div class="relative">
                            <img :src="'/assets/images/' + data.images[0]" alt=""
                                class="aspect-[3/2] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg">
                            <div
                                class="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10">
                            </div>
                        </div>
                        <div class="relative">
                            <img :src="'/assets/images/' + data.images[1]" alt=""
                                class="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg">
                            <div
                                class="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10">
                            </div>
                        </div>
                    </div>
                    <div class="mr-auto w-44 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-12">
                        <div class="relative">
                            <img :src="'/assets/images/' + data.images[2]" alt=""
                                class="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg">
                            <div
                                class="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10">
                            </div>
                        </div>
                        <div class="relative">
                            <img :src="'/assets/images/' + data.images[3]" alt=""
                                class="aspect-[3/2] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg">
                            <div
                                class="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10">
                            </div>
                        </div>
                    </div>
                    <div
                        class="ml-auto w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-34 xl:order-none xl:pt-80">
                        <div class="relative">
                            <img :src="'/assets/images/' + data.images[4]" alt=""
                                class="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg">
                            <div
                                class="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10">
                            </div>
                        </div>
                    </div>
                </div>
                <!-- End Grid -->
            </div>
            <!-- End Col -->

        </div>
        <!-- End Grid -->
    </div>
    <!-- End Features -->
</template>

<script lang="ts" setup>
const props = defineProps({
    data: {
        type: Object,
        required: true
    }
});
</script>
