<template>
    <div>
        <div class="editorjs w-full" ref="htmlelement"></div>
    </div>
</template>
<script setup>
import EditorJS from '@editorjs/editorjs';
import EmbedTool from '@editorjs/embed';
import ListTool from '@editorjs/list';
import ImageTool from '@editorjs/image';
//import VideoTool from './editorjs/video.js';
import { onMounted, onUnmounted, ref, watch } from 'vue';

const htmlelement = ref(null);
const modelValue = ref({});
const props = defineProps({
    content: {
        type: [Object, String],
        default: null,
    },
    placeholder: String,
    readOnly: Boolean,
})

const emit = defineEmits(['update:modelValue'])

let editor;
let updatingModel = false;

watch(() => props.content, (newVal) => {
    modelValue.value = newVal;
    if (!updatingModel) {
        modelToView();
    }
}, { immediate: true })

// model -> view
function modelToView() {
    if (!editor) return;
    if (!modelValue.value) { return; }
    if (typeof modelValue.value === 'string') {
        editor.blocks.renderFromHTML(modelValue.value);
        return;
    }
    editor.render(modelValue.value);
}

// view -> model
function viewToModel(api, event) {
    if (props.readOnly) { return; }
    updatingModel = true;
    editor.save().then((outputData) => {
        console.log(event, 'Saving completed: ', outputData)
        emit('update:modelValue', outputData);
    }).catch((error) => {
        console.log(event, 'Saving failed: ', error)
    }).finally(() => {
        updatingModel = false;
    })
}

// Méthodes pour les boutons
function viewToModelClick() {
    viewToModel(null, 'manual')
}
function modelToViewClick() {
    modelToView()
}

onMounted(() => {
    editor = new EditorJS({
        holder: htmlelement.value,
        placeholder: props.placeholder,
        inlineToolbar: ['bold', 'italic', 'link'],
        tools: {
            embed: EmbedTool,
            list: ListTool,
            image: ImageTool,
            //            video: VideoTool,
        },
        readOnly: props.readOnly,
        minHeight: 'auto',
        data: props.modelValue,
        onReady: modelToView,
        onChange: viewToModel,
    })
})

onUnmounted(() => {
    editor.destroy()
})
</script>