<template>
  <div class="text-center py-4">
    <h2 class="font-halvar font-bold text-xl uppercase tracking-wide mb-4">
      WE HAVE RECEIVED YOUR APPLICATION!
    </h2>
    <p class="text-gray-600 mb-8 leading-relaxed">
      We will process your request<br />and get in touch with you
    </p>
    <button
      class="bg-[#FEE97D] hover:bg-[#f5dc5a] font-halvar font-bold px-10 py-2 rounded-md text-sm transition-colors"
      @click="$emit('close')"
    >
      Done
    </button>
  </div>
</template>

<script setup lang="ts">
defineEmits<{ close: [] }>()
</script>
