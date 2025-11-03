<template>
    <div class="audio-player flex items-center bg-black/70 rounded-lg p-2 px-4 gap-2 text-white shadow-lg">
        <button @click="prevTrack" aria-label="Précédent" class="px-2 py-1 hover:text-yellow-400">
            <svg width="20" height="20" fill="currentColor" viewBox="0 0 20 20">
                <path d="M7.5 10L15 15V5l-7.5 5zm-2.5 5V5h2v10h-2z" />
            </svg>
        </button>
        <button @click="togglePlay" aria-label="Lecture/Pause" class="px-2 py-1 hover:text-yellow-400">
            <svg v-if="!isPlaying" width="20" height="20" fill="currentColor" viewBox="0 0 20 20">
                <path d="M6 4l12 6-12 6V4z" />
            </svg>
            <svg v-else width="20" height="20" fill="currentColor" viewBox="0 0 20 20">
                <path d="M6 4h4v12H6V4zm4 0h4v12h-4V4z" />
            </svg>
        </button>
        <button @click="nextTrack" aria-label="Suivant" class="px-2 py-1 hover:text-yellow-400">
            <svg width="20" height="20" fill="currentColor" viewBox="0 0 20 20">
                <path d="M12.5 10L5 5v10l7.5-5zm2.5 5V5h-2v10h2z" />
            </svg>
        </button>
        <span class="ml-2 text-sm truncate max-w-[120px]">{{ currentTrackName }}</span>
        <audio ref="audio" :src="playlist[currentTrack]" @ended="nextTrack" @play="isPlaying = true"
            @pause="isPlaying = false"></audio>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const playlist = [
    'https://seven-cdn.s3.eu-west-3.amazonaws.com/pccb/audio/01%20-%20Jingle%20Bells.mp3',
    'https://seven-cdn.s3.eu-west-3.amazonaws.com/pccb/audio/02%20-%20Mille%20Colombes.mp3',
    'https://seven-cdn.s3.eu-west-3.amazonaws.com/pccb/audio/03%20-%20Encore%20Un%20Soir.mp3'
]
const trackNames = [
    'Jingle Bells',
    'Mille Colombes',
    'Encore un soir'
]
const currentTrack = ref(0)
const isPlaying = ref(false)
const audio = ref<HTMLAudioElement | null>(null)

const currentTrackName = computed(() => trackNames[currentTrack.value])

function play() {
    audio.value?.play()
}
function pause() {
    audio.value?.pause()
}
function togglePlay() {
    if (!audio.value) return
    if (isPlaying.value) {
        pause()
    } else {
        play()
    }
}
function nextTrack() {
    if (!audio.value) return
    isPlaying.value = false
    pause()
    audio.value.currentTime = 0
    currentTrack.value = (currentTrack.value + 1) % playlist.length
    audio.value.load()
    if (!isPlaying.value) {
        audio.value.oncanplay = () => {
            play()
            if (audio.value) audio.value.oncanplay = null
        }
    }
}
function prevTrack() {
    if (!audio.value) return
    isPlaying.value = false
    pause()
    audio.value.currentTime = 0
    currentTrack.value = (currentTrack.value - 1 + playlist.length) % playlist.length
    audio.value.load()
    if (!isPlaying.value) {
        audio.value.oncanplay = () => {
            play()
            if (audio.value) audio.value.oncanplay = null
        }
    }
}
</script>

<style scoped>
.audio-player {
    min-width: 220px;
    max-width: 320px;
}
</style>
