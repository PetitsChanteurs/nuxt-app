<template>
    <!-- ========== HEADER ========== -->
    <header
        class="fixed top-0 inset-x-0 flex flex-wrap md:justify-start md:flex-nowrap z-48 lg:z-61 w-full bg-blue-50 text-sm py-2.5 dark:bg-neutral-900">
        <nav class="px-4 sm:px-5.5 flex basis-full items-center w-full mx-auto">
            <div class="w-full flex items-center gap-x-1.5">
                <ul class="flex items-center gap-1.5">
                    <li
                        class="inline-flex items-center relative text-gray-200 pe-1.5 last:pe-0 dark:text-neutral-200 dark:after:bg-neutral-700">
                        <NuxtImg class="shrink-0 inline-flex justify-center items-center h-12"
                            src="/assets/images/logo.png" height="80" alt="Logo" />

                        <div class="hidden sm:block ms-1">

                        </div>

                        <!-- Sidebar Toggle -->
                        <button type="button"
                            class="p-1.5 size-7.5 inline-flex items-center gap-x-1 text-xs rounded-md border border-transparent text-gray-500 hover:text-gray-800 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:text-gray-800 dark:text-neutral-500 dark:hover:text-neutral-400 dark:focus:text-neutral-400"
                            aria-haspopup="dialog" aria-expanded="false" aria-controls="hs-pro-sidebar"
                            data-hs-overlay="#hs-pro-sidebar">
                            <svg class="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                stroke-linecap="round" stroke-linejoin="round">
                                <rect width="18" height="18" x="3" y="3" rx="2" />
                                <path d="M15 3v18" />
                                <path d="m10 15-3-3 3-3" />
                            </svg>
                            <span class="sr-only">Sidebar Toggle</span>
                        </button>
                        <!-- End Sidebar Toggle -->
                    </li>

                    <li class="inline-flex items-center relative">
                        <a class="w-full flex items-center gap-x-2 py-2 ps-2.5 pe-8 text-sm text-gray-800 truncate rounded-lg hover:bg-gray-100/70 focus:outline-hidden focus:bg-gray-100/70 dark:hover:bg-neutral-700/50 dark:focus:bg-neutral-700/50 dark:text-neutral-200"
                            href="chat-details.html">
                            <span class="truncate">Espace parents</span>
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    </header>
    <!-- ========== END HEADER ========== -->

    <LayoutSidebar />

    <!-- ========== MAIN CONTENT ========== -->
    <main
        class="lg:hs-overlay-layout-open:ps-60 bg-gray-100 transition-all duration-300 lg:fixed lg:inset-0 pt-18 px-3 pb-3 dark:bg-neutral-900">
        <div
            class="h-[calc(100dvh-62px)] lg:h-full overflow-hidden flex flex-col bg-white border border-gray-200 shadow-xs rounded-lg dark:bg-neutral-800 dark:border-neutral-700">
            <!-- Body -->
            <div class="flex-1 flex flex-col overflow-y-auto [&::-webkit-scrollbar]:w-0">
                <div class="flex-1 flex flex-col lg:flex-row">
                    <div class="flex-1 min-w-0 flex flex-col border-e border-gray-200 dark:border-neutral-700 p-3">
                        <slot />
                    </div>
                    <!-- End Col -->
                </div>
            </div>
            <!-- End Body -->
        </div>
    </main>
    <!-- ========== END MAIN CONTENT ========== -->
</template>