<template>
    <div
        class="sommaire w-full rounded-2xl p-0 px-5 py-5 my-5 mx-auto bg-neutral-900 bg-linear-to-b from-blue-900 to-transparent">
        <div class="px-0 text-xl text-white leading-10">
            <slot name="introduction" mdc-unwrap="p" />
        </div>
        <div class="grid gap-2 grid-cols-2 lg:grid-cols-4 lg:gap-4">
            <slot name="elements" mdc-unwrap="p" />
        </div>
    </div>
</template>
