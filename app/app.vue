<template>
  <div class="min-h-screen bg-gray-900 flex items-center justify-center">
    <button
      class="bg-yellow-400 hover:bg-yellow-500 font-bold px-8 py-3 rounded-full transition-colors"
      @click="isOpen = true"
    >
      Open Popup
    </button>

    <Popup v-model="isOpen" />
  </div>
</template>

<script setup lang="ts">
const isOpen = ref(false)
</script>
