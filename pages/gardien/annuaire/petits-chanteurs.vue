<template>
    <div class="text-start">
        <h2 class="mb-4">Petits chanteurs</h2>
        <button @click="openCreateModal" class="mb-4 px-4 py-2 bg-blue-600 text-white rounded">Créer un petit
            chanteur</button>
        <ag-grid-vue class="ag-theme-alpine" style="width: 100%; height: 500px;" :rowData="rowData" :theme="agGridTheme"
            :columnDefs="columnDefs" :defaultColDef="defaultColDef" :animateRows="true" />

        <!-- Modal de création -->
        <div v-if="showModal" class="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
            <div class="bg-white p-6 rounded shadow w-96">
                <h3 class="mb-4">Créer un petit chanteur</h3>
                <form @submit.prevent="createChanteur">
                    <div class="mb-2"><input v-model="form.given" placeholder="Nom" class="w-full border px-2 py-1"
                            required /></div>
                    <div class="mb-2"><input v-model="form.familyBirth" placeholder="Prénom"
                            class="w-full border px-2 py-1" required /></div>
                    <!--
                    <div class="mb-2"><input v-model="form.classe" placeholder="Classe"
                            class="w-full border px-2 py-1" /></div>
                    <div class="mb-2"><input v-model="form.pupitre" placeholder="Pupitre"
                            class="w-full border px-2 py-1" /></div>
                    <div class="mb-2"><input v-model="form.chambre" placeholder="Chambre"
                            class="w-full border px-2 py-1" /></div>
                    <div class="mb-2"><input v-model="form.responsable1" placeholder="Responsable 1"
                            class="w-full border px-2 py-1" /></div>
                    <div class="mb-2"><input v-model="form.responsable2" placeholder="Responsable 2"
                            class="w-full border px-2 py-1" /></div>
                            -->
                    <div class="flex justify-end gap-2 mt-4">
                        <button type="button" @click="showModal = false"
                            class="px-3 py-1 bg-gray-300 rounded">Annuler</button>
                        <button type="submit" class="px-3 py-1 bg-blue-600 text-white rounded">Créer</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
definePageMeta({ layout: 'admin' })

import { ref, onMounted } from 'vue'
import { AgGridVue } from 'ag-grid-vue3'
import { createClient } from '@supabase/supabase-js'
import { agGridTheme } from '@/constant/ag-grid-theme'

const supabaseUrl = 'https://uytfceisncldycvaikft.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV5dGZjZWlzbmNsZHljdmFpa2Z0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjA3NzE1NDgsImV4cCI6MjA3NjM0NzU0OH0.Pg5Ji_yf4oqeAhkxdsqorNyivU-nBCyPMkrezK9b0fI';
const supabase = createClient(supabaseUrl, supabaseKey)

interface Chanteur {
    given: string
    familyBirth: string
    /*
    classe: string
    pupitre: string
    chambre: string
    responsable1: string
    responsable2: string
    */
}

const rowData = ref<Chanteur[]>([])
const showModal = ref(false)
const form = ref<Chanteur>({
    given: '',
    familyBirth: ''
    /*,
    classe: '',
    pupitre: '',
    chambre: '',
    responsable1: '',
    responsable2: ''
    */
})

const columnDefs = [
    { headerName: 'Nom', field: 'familyBirth', sortable: true, filter: true },
    { headerName: 'Prénom', field: 'given', sortable: true, filter: true }
    /*,
    { headerName: 'Classe', field: 'classe', sortable: true, filter: true },
    { headerName: 'Pupitre', field: 'pupitre', sortable: true, filter: true },
    { headerName: 'Chambre', field: 'chambre', sortable: true, filter: true },
    { headerName: 'Responsable 1', field: 'responsable1', sortable: true, filter: true },
    { headerName: 'Responsable 2', field: 'responsable2', sortable: true, filter: true }
     */
]
const defaultColDef = { resizable: true }

function openCreateModal() {
    showModal.value = true
    form.value = {
        given: '',
        familyBirth: ''
        /*,
        classe: '',
        pupitre: '',
        chambre: '',
        responsable1: '',
        responsable2: ''*/
    }
}

async function fetchChanteurs() {
    const { data, error } = await supabase.from('PetitsChanteurs').select('*')
    if (!error && Array.isArray(data)) rowData.value = data as Chanteur[]
}

async function createChanteur() {
    const { error } = await supabase.from('PetitsChanteurs').insert([form.value])
    if (!error) {
        showModal.value = false
        await fetchChanteurs()
    }
}

onMounted(fetchChanteurs)
</script>
