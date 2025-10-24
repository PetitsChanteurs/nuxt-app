<template>
    <!-- List -->
    <div>
        <div v-for="section in props.data" :key="section.title"
            class="mt-3 pb-12 mb-12 border-b border-gray-200 md:last:pb-0 md:last:mb-0 md:last:border-b-0 dark:border-neutral-700">
            <!-- Heading -->
            <div class="mb-4 flex items-center gap-2">
                <div class="grow">
                    <h2 class="text-xl font-medium text-gray-800 dark:text-neutral-200">
                        {{ section.title }}
                    </h2>
                </div>
            </div>
            <!-- End Heading -->

            <!-- Grid -->
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-3 lg:gap-5 items-left">
                <div v-for="item in section.items" :key="item._id || item.date" @click="navigateTo(item.url)"
                    class="p-0 bg-white h-[560px] overflow-hidden items-left">
                    <iframe :src="item.widget" class="w-full h-full border-0 overflow-hidden" allowtransparency="true"
                        style="width: 100%; height: 100%; border: none;" allow="encrypted-media"></iframe>
                    <!--
                        <div>
                            <h2 class="font-medium text-cinzel text-xl text-gray-800 dark:text-neutral-200">
                                {{ item.day }} - {{ item.city }}
                            </h2>
                            <ul class="mt-1">
                                <li class="text-lg text-gray-500 dark:text-neutral-500">{{ item.place }}
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h2 class="font-medium text-sm text-gray-800 dark:text-neutral-200">
                                {{ item.date }}
                            </h2>
                        </div>
                        -->
                </div>
                <!-- End Card -->
            </div>
            <!-- End Grid -->
        </div>
        <!-- End Item -->
    </div>
    <!-- End List -->
</template>

<script setup lang="ts">
const props = defineProps<{ data: any[]; }>();
</script>