<script setup>
defineProps({
    
})
</script>

<template>
  <div class="absolute size-full flex flex-col justify-center items-center drop-shadow-xl">
    <div class="p-0.5 bg-gradient-to-b from-amber-400 to-yellow-950 rounded-lg cursor-pointer" @click="">
      <div class="p-0.5 bg-gradient-to-b from-yellow-800 to-yellow-950 rounded-lg">
        <div class="p-1 bg-gradient-to-b from-emerald-400 to-emerald-950 rounded-lg">
          <div class="w-64 h-16 bg-gradient-to-r flex flex-col justify-center rounded-lg
          from-emerald-800 via-emerald-500 to-emerald-800 
          hover:from-emerald-600 hover:via-emerald-400 hover:to-emerald-600">
            <p class="w-fit h-fit mx-auto">Играть Play </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>