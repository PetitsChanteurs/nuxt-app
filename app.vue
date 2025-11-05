<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
    <MusicFlow :hidePlaylistPopup="true" :options="{}" />
  </div>
</template>

<script setup lang="ts">
import "vue-music-flow/dist/vue-music-flow.css";
import { MusicFlow, useMusicFlow, type TMusicFlow } from "vue-music-flow";

onMounted(() => {
  if (process.client) {
    const { onPlayAsPlaylist, isTrackPlaying } = useMusicFlow();
    onPlayAsPlaylist(tracks, tracks[0]);
  }
});

const tracks: TMusicFlow[] = [
  {
    id: 1,
    audio:
      "https://seven-cdn.s3.eu-west-3.amazonaws.com/pccb/audio/Comme%20un%20chant%20d%27Espe%CC%81rance%20%5B2019%5D/01.%20Encore%20un%20soir.mp3",
    title: "Encore un soir",
    artist: "Les Petits Chanteurs à la Croix de Bois",
    artwork: "https://seven-cdn.s3.eu-west-3.amazonaws.com/pccb/audio/Comme%20un%20chant%20d%27Espe%CC%81rance%20%5B2019%5D/cover.jpg",
    album: "Comme un chant d'espérance",
    original: {
      source:
        "https://ik.imagekit.io/ltdassets/public/audio/edm/all-world-music/",
    },
  },
  {
    id: 2,
    audio:
      "https://seven-cdn.s3.eu-west-3.amazonaws.com/pccb/audio/Chantons%20Noe%CC%88l%20%21%20%282021%29%20%5BMP3%5D/09.%20Carol%20of%20the%20Bells.mp3",
    title: "Carol of the Bells",
    artist: "Les Petits Chanteurs à la Croix de Bois",
    artwork: "https://seven-cdn.s3.eu-west-3.amazonaws.com/pccb/audio/Chantons%20Noe%CC%88l%20%21%20%282021%29%20%5BMP3%5D/cover.jpg",
    album: "Chantons Noël !",
    original: {
      source:
        "https://ik.imagekit.io/ltdassets/public/audio/edm/all-world-music/",
    },
  },
  {
    id: 3,
    audio:
      "https://seven-cdn.s3.eu-west-3.amazonaws.com/pccb/audio/Il%20Etait%20Une%20Fois%20%5B2011%5D/09.%20Musique%20Universelle.mp3",
    title: "Musique Universelle",
    artist: "Les Petits Chanteurs à la Croix de Bois",
    artwork: "https://seven-cdn.s3.eu-west-3.amazonaws.com/pccb/audio/Il%20Etait%20Une%20Fois%20%5B2011%5D/cover.jpg",
    album: "Il Etait Une Fois",
    original: {
      source:
        "https://ik.imagekit.io/ltdassets/public/audio/edm/all-world-music/",
    },
  },
  {
    id: 4,
    audio:
      "https://seven-cdn.s3.eu-west-3.amazonaws.com/pccb/audio/Comme%20un%20chant%20d%27Espe%CC%81rance%20%5B2019%5D/02.%20Ave%20Maria%20de%20Caccini.mp3",
    title: "Ave Maria de Caccini",
    artist: "Les Petits Chanteurs à la Croix de Bois",
    artwork: "https://seven-cdn.s3.eu-west-3.amazonaws.com/pccb/audio/Comme%20un%20chant%20d%27Espe%CC%81rance%20%5B2019%5D/cover.jpg",
    album: "Comme un chant d'espérance",
    original: {
      source:
        "https://ik.imagekit.io/ltdassets/public/audio/edm/all-world-music/",
    },
  },
];
</script>
