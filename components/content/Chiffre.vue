<template>
  <div class="py-5 px-0">
    <h4 class="text-lg font-semibold text-red-700 dark:text-neutral-200">
      <slot />
    </h4>
    <p class="mt-2 sm:mt-3 text-2xl sm:text-xl text-black text-cinzel">
      <slot name="titre" />
    </p>
    <p class="mt-1 text-lg text-black dark:text-neutral-500">
      <slot name="sous-titre" />
    </p>
  </div>
</template>
