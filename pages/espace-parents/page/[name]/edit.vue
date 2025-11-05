<template>
    <!-- Body -->
    <div
        class="bg-white flex-1 flex flex-col lg:overflow-hidden lg:overflow-y-hidden overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-neutral-700 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500 dark:bg-neutral-800">
        <div class="flex-1 flex flex-col min-h-0">
            <div class="shrink-0">
                <div
                    class="w-[750px] h-full flex flex-col border-b lg:border-b-0 lg:border-e border-gray-200 dark:border-neutral-700">
                    <!-- Tab -->
                    <div class="p-4">
                        <!-- Nav Tab -->
                        <nav class="inline-flex gap-1 p-0.5 w-full relative bg-gray-100 rounded-lg dark:bg-neutral-900/50"
                            aria-label="Tabs" role="tablist" aria-orientation="horizontal">
                            <button type="button"
                                class="hs-tab-active:bg-white hs-tab-active:shadow-sm hs-tab-active:focus:text-gray-800 py-2 px-3 w-full inline-flex justify-center items-center gap-x-2 text-sm text-gray-800 rounded-md disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden dark:text-neutral-200 dark:hs-tab-active:bg-neutral-700 dark:hs-tab-active:focus:text-neutral-200 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden active"
                                id="hs-pro-tabs-bb-item-content" aria-selected="true"
                                data-hs-tab="#hs-pro-tabs-bb-content" aria-controls="hs-pro-tabs-bb-content" role="tab">
                                Content
                            </button>
                            <button type="button"
                                class="hs-tab-active:bg-white hs-tab-active:shadow-sm hs-tab-active:focus:text-gray-800 py-2 px-3 w-full inline-flex justify-center items-center gap-x-2 text-sm text-gray-800 rounded-md disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden dark:text-neutral-200 dark:hs-tab-active:bg-neutral-700 dark:hs-tab-active:focus:text-neutral-200 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden "
                                id="hs-pro-tabs-bb-item-settings" aria-selected="false"
                                data-hs-tab="#hs-pro-tabs-bb-settings" aria-controls="hs-pro-tabs-bb-settings"
                                role="tab">
                                Settings
                            </button>
                            <button type="button"
                                class="hs-tab-active:bg-white hs-tab-active:shadow-sm hs-tab-active:focus:text-gray-800 py-2 px-3 w-full inline-flex justify-center items-center gap-x-2 text-sm text-gray-800 rounded-md disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden dark:text-neutral-200 dark:hs-tab-active:bg-neutral-700 dark:hs-tab-active:focus:text-neutral-200 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden "
                                id="hs-pro-tabs-bb-item-seo" aria-selected="false" data-hs-tab="#hs-pro-tabs-bb-seo"
                                aria-controls="hs-pro-tabs-bb-seo" role="tab">
                                SEO
                            </button>
                        </nav>
                        <!-- End Nav Tab -->
                    </div>
                    <!-- End Tab -->

                    <div
                        class="p-4 pb-10 flex-1 lg:overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-neutral-700 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500">
                        <!-- Tab Content -->
                        <div id="hs-pro-tabs-bb-content" role="tabpanel" aria-labelledby="hs-pro-tabs-bb-item-content">
                            <!-- Form Group -->
                            <form>
                                <div class="flex flex-col gap-y-5">
                                    <!-- Textarea -->
                                    <div class="relative">
                                        <label for="hs-pro-apdptt"
                                            class="block mb-2 font-medium text-sm text-gray-800 dark:text-neutral-200">
                                            Post title
                                        </label>

                                        <textarea id="hs-pro-apdptt"
                                            class="max-h-36 p-3 pe-32 block w-full bg-white border-gray-200 md:text-sm leading-4 rounded-lg resize-none focus:outline-hidden focus:border-indigo-700 focus:ring-indigo-700 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:text-neutral-400 dark:border-neutral-700 dark:focus:border-neutral-600 dark:focus:ring-neutral-600 dark:placeholder-neutral-500 overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-neutral-700 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500"
                                            rows="1" data-hs-textarea-auto-height='{"defaultHeight": 42}'></textarea>
                                    </div>
                                    <!-- End Textarea -->

                                    <!-- Textarea Input -->
                                    <div>
                                        <label
                                            class="block mb-2 font-medium text-sm text-gray-800 dark:text-neutral-200">
                                            Contenu
                                        </label>

                                        <!-- Tiptap -->
                                        <div id="hs-editor-tiptap">
                                            <ClientOnly>
                                                <BlockEditorJs @update:modelValue='updateContent' :content="content" />
                                            </ClientOnly>
                                        </div>
                                        <!-- End Tiptap -->
                                    </div>
                                    <!-- End Textarea Input -->
                                </div>
                            </form>
                            <!-- End Form Group -->
                        </div>
                        <!-- End Tab Content -->

                        <!-- Tab Content -->
                        <div id="hs-pro-tabs-bb-settings" class="hidden" role="tabpanel"
                            aria-labelledby="hs-pro-tabs-bb-item-settings">
                            <!-- Content Settings Form -->
                            <div class="flex flex-col gap-y-5">
                                <!-- Item -->
                                <div>
                                    <label class="block mb-2 font-medium text-sm text-gray-800 dark:text-neutral-200">
                                        Tags
                                    </label>

                                    <!-- Select -->
                                    <div class="relative w-full">
                                        <select id="hs-pro-select-tags" multiple data-hs-select='{
                      "placeholder": "Select option...",
                      "wrapperClasses": "hs-select-active:ring-1 hs-select-active:ring-indigo-700 hs-select-active:border-indigo-700 pe-9 rounded-lg flex items-center flex-wrap text-nowrap w-full text-start text-sm bg-white border border-gray-200 shadow-2xs dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-400 hs-select-active:dark:outline-hidden hs-select-active:dark:ring-1 hs-select-active:dark:ring-neutral-600 hs-select-active:dark:border-neutral-600",
                      "toggleTag": "<button type=\"button\" aria-expanded=\"false\"></button>",
                      "toggleClasses": "hs-select-disabled:pointer-events-none hs-select-disabled:opacity-50 relative flex text-nowrap w-full cursor-pointer bg-white border border-gray-200 rounded-lg text-start text-sm focus:bg-gray-100 dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400",
                      "dropdownClasses": "mt-2 z-50 w-full max-h-72 p-1 space-y-0.5 bg-white rounded-lg overflow-hidden overflow-y-auto shadow-xl dark:bg-neutral-900",
                      "optionClasses": "hs-selected:bg-gray-100 dark:hs-selected:bg-neutral-800 py-2 px-3 w-full text-sm text-gray-800 cursor-pointer hover:bg-gray-100 rounded-lg focus:outline-hidden focus:bg-gray-100 dark:bg-neutral-900 dark:hover:bg-neutral-800 dark:text-neutral-200 dark:focus:bg-neutral-800",
                      "mode": "tags",
                      "tagsClasses": "relative ps-0.5 pe-9 min-h-9.5 flex items-center flex-wrap text-nowrap w-full border border-gray-200 rounded-lg text-start text-sm focus:border-indigo-700 focus:ring-indigo-700 dark:bg-neutral-900 dark:text-neutral-400",
                      "tagsItemTemplate": "<div class=\"flex flex-nowrap items-center relative z-1 border border-dashed border-gray-300 rounded-sm py-0.5 ps-2 pe-1 mx-1 my-0.5 dark:bg-neutral-800 dark:border-neutral-600\"><div class=\"whitespace-nowrap\" data-title></div><div class=\"inline-flex shrink-0 justify-center items-center size-4.5 ms-2 rounded-sm text-gray-800 bg-gray-200 hover:bg-gray-300 focus:outline-hidden focus:ring-2 focus:ring-neutral-400 text-sm dark:bg-neutral-700 dark:hover:bg-neutral-600 dark:text-neutral-400 cursor-pointer\" data-remove><svg class=\"shrink-0 size-3\" xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M18 6 6 18\"/><path d=\"m6 6 12 12\"/></svg></div></div>",
                      "tagsInputClasses": "py-2 sm:py-[9px] ps-3 pe-7 grow order-1 sm:text-sm cursor-pointer border-transparent bg-transparent rounded-lg focus:ring-transparent focus-visible:outline-hidden dark:bg-neutral-800 dark:text-neutral-400 dark:placeholder:text-neutral-400",
                      "optionTemplate": "<div class=\"flex items-center\"><div class=\"size-8 me-2\" data-icon></div><div><div class=\"text-sm text-gray-800 dark:text-neutral-200\" data-title></div><div class=\"text-xs text-gray-500 dark:text-neutral-500\" data-description></div></div><div class=\"ms-auto\"><span class=\"hidden hs-selected:block\"><svg class=\"shrink-0 size-4\" xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" viewBox=\"0 0 16 16\"><path d=\"M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z\"/></svg></span></div></div>",
                      "extraMarkup": "<div class=\"absolute top-1/2 end-2 cursor-pointer -translate-y-1/2\"><svg class=\"shrink-0 size-4 text-gray-500 dark:text-neutral-500\" xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"m6 9 6 6 6-6\"/></svg></div>"
                    }' class="hidden">
                                            <option value="">Choose</option>
                                            <option value="article">Article</option>
                                            <option value="tutorial">Tutorial</option>
                                            <option value="case-study">Case Study</option>
                                            <option value="release-note">Release Note</option>
                                            <option value="update">Update</option>
                                            <option value="news">News</option>
                                        </select>
                                    </div>
                                    <!-- End Select -->
                                </div>
                                <!-- End Item -->

                                <!-- Item -->
                                <div>
                                    <label class="block mb-2 font-medium text-sm text-gray-800 dark:text-neutral-200">
                                        Post access
                                    </label>

                                    <!-- Select -->
                                    <div class="relative group">
                                        <select data-hs-select='{
                      "placeholder": "Start time",
                      "toggleTag": "<button type=\"button\" aria-expanded=\"false\"></button>",
                      "toggleClasses": "hs-select-disabled:pointer-events-none hs-select-disabled:opacity-50 relative py-2 sm:py-2.5 ps-3 pe-7 w-full flex gap-x-2 text-nowrap text-gray-80 bg-white border border-gray-200 ring-1 ring-transparent rounded-lg text-start sm:text-sm focus:outline-hidden focus:border-indigo-700 focus:ring-indigo-700 dark:bg-neutral-800 dark:text-neutral-200 dark:border-neutral-700 dark:focus:border-neutral-600 dark:focus:ring-neutral-600",
                      "dropdownClasses": "mt-2 z-50 w-full max-h-60 p-1 space-y-0.5 overflow-hidden overflow-y-auto bg-white rounded-xl shadow-xl [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-neutral-700 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500 dark:bg-neutral-900",
                      "optionClasses": "hs-selected:bg-gray-100 dark:hs-selected:bg-neutral-800 py-2 px-3 w-full text-sm text-gray-800 cursor-pointer hover:bg-gray-100 rounded-md focus:outline-hidden focus:bg-gray-100 dark:text-neutral-200 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800",
                      "optionTemplate": "<div class=\"flex justify-between items-center w-full\"><span data-title></span><span class=\"hidden hs-selected:block\"><svg class=\"shrink-0 size-3.5 text-gray-800 dark:text-neutral-200\" xmlns=\"http:.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><polyline points=\"20 6 9 17 4 12\"/></svg></span></div>",
                      "extraMarkup": "<div class=\"absolute top-1/2 end-2 cursor-pointer -translate-y-1/2\"><svg class=\"shrink-0 size-4 text-gray-500 dark:text-neutral-500\" xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"m6 9 6 6 6-6\"/></svg></div>"
                    }' class="hidden">
                                            <option value="">Choose</option>
                                            <option value="public" selected>Public</option>
                                            <option value="private">Private</option>
                                            <option value="protected">Protected</option>
                                            <option value="draft">Draft</option>
                                            <option value="scheduled">Scheduled</option>
                                            <option value="archived">Archived</option>
                                            <option value="trashed">Trashed</option>
                                        </select>
                                    </div>
                                    <!-- End Select -->
                                </div>
                                <!-- End Item -->
                            </div>
                            <!-- End Content Settings Form -->
                        </div>
                        <!-- End Tab Content -->

                        <!-- Tab Content -->
                        <div id="hs-pro-tabs-bb-seo" class="hidden" role="tabpanel"
                            aria-labelledby="hs-pro-tabs-bb-item-seo">
                            <!-- List Group -->
                            <ul class="divide-y divide-gray-200 dark:divide-neutral-700">
                                <!-- List Item -->
                                <li class="py-6 first:pt-2 last:pb-2">
                                    <div class="animate-pulse">
                                        <div class="flex items-center gap-x-2">
                                            <div class="shrink-0">
                                                <span
                                                    class="shrink-0 size-7 block bg-gray-200 rounded-md dark:bg-neutral-700"></span>
                                            </div>

                                            <div class="grow">
                                                <p class="h-4 bg-gray-200 rounded-md dark:bg-neutral-700"
                                                    style="width: 10%;"></p>
                                            </div>
                                        </div>

                                        <ul class="mt-3 space-y-3">
                                            <li class="h-4 bg-gray-200 rounded-md dark:bg-neutral-700"
                                                style="width: 25%;"></li>
                                            <li class="w-full h-4 bg-gray-200 rounded-md dark:bg-neutral-700"></li>
                                            <li class="w-full h-4 bg-gray-200 rounded-md dark:bg-neutral-700"></li>
                                        </ul>
                                    </div>
                                </li>
                                <!-- End List Item -->

                                <!-- List Item -->
                                <li class="py-6 first:pt-2 last:pb-2">
                                    <div class="animate-pulse">
                                        <div class="flex items-center gap-x-2">
                                            <div class="shrink-0">
                                                <span
                                                    class="shrink-0 size-7 block bg-gray-200 rounded-md dark:bg-neutral-700"></span>
                                            </div>

                                            <div class="grow">
                                                <p class="h-4 bg-gray-200 rounded-md dark:bg-neutral-700"
                                                    style="width: 10%;"></p>
                                            </div>
                                        </div>

                                        <ul class="mt-3 space-y-3">
                                            <li class="h-4 bg-gray-200 rounded-md dark:bg-neutral-700"
                                                style="width: 25%;"></li>
                                            <li class="w-full h-4 bg-gray-200 rounded-md dark:bg-neutral-700"></li>
                                            <li class="w-full h-4 bg-gray-200 rounded-md dark:bg-neutral-700"></li>
                                        </ul>
                                    </div>
                                </li>
                                <!-- End List Item -->

                                <!-- List Item -->
                                <li class="py-6 first:pt-2 last:pb-2">
                                    <div class="animate-pulse">
                                        <div class="flex items-center gap-x-2">
                                            <div class="shrink-0">
                                                <span
                                                    class="shrink-0 size-7 block bg-gray-200 rounded-md dark:bg-neutral-700"></span>
                                            </div>

                                            <div class="grow">
                                                <p class="h-4 bg-gray-200 rounded-md dark:bg-neutral-700"
                                                    style="width: 10%;"></p>
                                            </div>
                                        </div>

                                        <ul class="mt-3 space-y-3">
                                            <li class="h-4 bg-gray-200 rounded-md dark:bg-neutral-700"
                                                style="width: 25%;"></li>
                                            <li class="w-full h-4 bg-gray-200 rounded-md dark:bg-neutral-700"></li>
                                            <li class="w-full h-4 bg-gray-200 rounded-md dark:bg-neutral-700"></li>
                                        </ul>
                                    </div>
                                </li>
                                <!-- End List Item -->

                                <!-- List Item -->
                                <li class="py-6 first:pt-2 last:pb-2">
                                    <div class="animate-pulse">
                                        <div class="flex items-center gap-x-2">
                                            <div class="shrink-0">
                                                <span
                                                    class="shrink-0 size-7 block bg-gray-200 rounded-md dark:bg-neutral-700"></span>
                                            </div>

                                            <div class="grow">
                                                <p class="h-4 bg-gray-200 rounded-md dark:bg-neutral-700"
                                                    style="width: 10%;"></p>
                                            </div>
                                        </div>

                                        <ul class="mt-3 space-y-3">
                                            <li class="h-4 bg-gray-200 rounded-md dark:bg-neutral-700"
                                                style="width: 25%;"></li>
                                            <li class="w-full h-4 bg-gray-200 rounded-md dark:bg-neutral-700"></li>
                                            <li class="w-full h-4 bg-gray-200 rounded-md dark:bg-neutral-700"></li>
                                        </ul>
                                    </div>
                                </li>
                                <!-- End List Item -->
                            </ul>
                            <!-- End List Group -->
                        </div>
                        <!-- End Tab Content -->
                    </div>
                </div>
            </div>
            <!-- End Col -->
        </div>
    </div>
    <!-- End Body -->
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