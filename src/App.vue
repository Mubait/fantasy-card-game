<script setup>
import ButtonPlay1 from "./components/ButtonPlay1.vue"
import Intro from "./pages/Intro.vue";
import Auth from "./pages/Auth.vue"

import { ref, watch, provide, computed, onMounted } from 'vue'

import {Howl} from 'howler'



let soundImgUrl = ref("audio-on.png")

const sound = new Howl({
  src: ['/audio/2.mp3'],
  autoplay: true,
  loop: true,
  volume: 0.5,
});

let soundAction = async () => {
  if(sound.playing()) {
    soundImgUrl.value = "audio-off.png"
    sound.pause();
  }
  else{
    soundImgUrl.value = "audio-on.png"
    sound.play();
  }
}



onMounted(() => {
})
</script>

<template>
  <RouterView />

  <img @click="soundAction" class="absolute w-10 h-12 right-0 bottom-0 mb-1 mr-2 cursor-pointer" :src="soundImgUrl" alt="audio"/>
</template>


