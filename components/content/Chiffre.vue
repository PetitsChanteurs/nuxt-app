<template>
  <div class="py-5 px-0">
    <h4 class="text-base text-white bg-red-700 py-2 px-4 text-dosis">
      <NuxtLink class="cursor-pointer" :to="'#' + lien">
        <slot mdc-unwrap="p" />
      </NuxtLink>
    </h4>
    <div class="mt-2 sm:mt-3 text-3xl sm:text-2xl text-white">
      <slot name="titre" mdc-unwrap="p" />
    </div>
    <div class="mt-1 text-lg text-white">
      <slot name="sous-titre" mdc-unwrap="p" />
    </div>
  </div>
</template>

<script setup>
defineProps({
  lien: {
    type: String,
    required: true,
  },
});
</script>
