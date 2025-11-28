<template>
  <div class="mt-7 max-w-3xl m-auto bg-white">
    <div class="p-4 sm:p-7">
      <div class="text-center">
        <h1 class="block text-xl text-blue-700">Espace sécurisé</h1>
        <p class="mt-2 text-sm text-gray-600">
          Entrez votre adresse email pour recevoir un lien de connexion.
          <!--
          <a class="text-blue-600 decoration-2 hover:underline focus:outline-hidden focus:underline font-medium"
            href="/creer-un-compte">
            Créer un compte
          </a>
          -->
        </p>
      </div>

      <div class="mt-5 mb-10">
        <!-- Form -->
        <form @submit.prevent="login">
          <div class="grid gap-y-4">
            <!-- Form Group -->
            <div>
              <label for="email" class="block text-sm mb-2">Adresse email</label>
              <div class="relative">
                <input v-model="email" type="email" required id="email" name="email" placeholder="Votre email"
                  class="py-2.5 sm:py-3 px-4 block w-full border-gray-200 rounded-lg sm:text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                  aria-describedby="email-error" />
                <div class="hidden absolute inset-y-0 end-0 pointer-events-none pe-3">
                  <svg class="size-5 text-red-500" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"
                    aria-hidden="true">
                    <path
                      d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                  </svg>
                </div>
              </div>
              <p class="hidden text-xs text-red-600 mt-2" id="email-error">Vous devez entrer une adresse email valide.
              </p>
            </div>
            <!-- End Form Group -->

            <button type="submit"
              class="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-hidden focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none">Recevoir
              mon lien de connexion</button>
          </div>
          <p v-if="message">{{ message }}</p>
        </form>
        <!-- End Form -->
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const supabase = useSupabaseClient()

const email = ref('')
const message = ref('')

async function login() {
  const { error } = await supabase.auth.signInWithOtp({ email: email.value })
  message.value = error ? 'Erreur : ' + error.message : 'Vérifiez votre boîte mail !'
}
</script>