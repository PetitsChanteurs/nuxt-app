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
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-5 items-left">
                <div v-for="item in section.items" :key="item._id || item.date" @click="navigateTo(item.url)"
                    class="p-0 bg-white overflow-hidden items-left">
                    <BlockEvent :event="item" />
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