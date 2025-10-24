import { AllCommunityModule, ModuleRegistry, themeQuartz, iconSetQuartzLight } from 'ag-grid-community'; 
import { defineNuxtPlugin } from '#app';
import { AgGridVue } from 'ag-grid-vue3';

export default defineNuxtPlugin((nuxtApp) => {
ModuleRegistry.registerModules([AllCommunityModule]);
  nuxtApp.vueApp.component('AgGridVue', AgGridVue);
});
