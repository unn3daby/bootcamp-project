<template>
  <h2 class="font-bold xl:text-[50px] lg:text-[42px] text-[32px] leading-none mb-4">
    <SharedHighlightedWords :text :highlighted />
  </h2>
</template>

<script setup lang="ts">
const { text, highlighted = [] } = defineProps<{ text: string, highlighted?: string[] }>();
</script>

<style scoped>

</style>
