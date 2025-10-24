<template>
    <!-- Testimonials -->
    <div class="overflow-hidden bg-blue-900 dark:bg-neutral-950 rounded-2xl my-10">
        <div class="relative max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
            <!-- Grid -->
            <div class="grid sm:grid-cols-1 lg:grid-cols-2 gap-6">
                <!-- Card -->
                <div v-if="data && data.items" v-for="item in data.items" class="flex h-auto">
                    <div class="flex flex-col bg-white rounded-xl dark:bg-neutral-900">
                        <div class="flex-auto p-4 md:p-6">
                            <p class="text-base italic md:text-lg text-gray-800 dark:text-neutral-200">
                                « {{ item.text }} »
                            </p>
                        </div>

                        <div class="p-4 bg-gray-100 rounded-b-xl md:px-7 dark:bg-neutral-800">
                            <div class="flex items-center gap-x-3">
                                <div class="shrink-0">
                                    <p class="text-sm sm:text-base font-semibold text-gray-800 dark:text-neutral-200">
                                        {{ item.name }}
                                    </p>
                                    <p class="text-xs text-gray-500 dark:text-neutral-400">
                                        {{ item.role }}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- End Card -->
            </div>
            <!-- End Grid -->

        </div>
    </div>
    <!-- End Testimonials -->
</template>

<script setup lang="ts">
defineProps<{ data: any; }>();
</script>
