<template>
  <div class="py-5 px-0">
    <h4 class="text-lg font-semibold text-red-800">
      <NuxtLink class="cursor-pointer" :to="'#' + lien">
        <slot />
      </NuxtLink>
    </h4>
    <div class="mt-2 sm:mt-3 text-2xl sm:text-xl text-black text-cinzel">
      <slot name="titre" />
    </div>
    <div class="mt-1 text-lg text-black">
      <slot name="sous-titre" />
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
