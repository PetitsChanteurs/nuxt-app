<template>
    <ClientOnly>
        <BlockEditorJs @update:modelValue='updateContent' :content="content" />
    </ClientOnly>
</template>

<script setup lang="ts">
definePageMeta({ layout: 'admin' })
function updateContent(content: any) {
    console.log("Content updated:", content);
}
let content = {
    time: 1552744582955,
    blocks: [
        {
            type: "image",
            data: {
                url: "https://cdn.pixabay.com/photo/2017/09/01/21/53/blue-2705642_1280.jpg"
            }
        }
    ],
    version: "2.11.10"
};
</script>