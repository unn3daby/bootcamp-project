<template>
  <h2 class="font-bold xl:text-[50px] lg:text-[42px] text-[32px] leading-none mb-4">
    <!-- итерируемся по массиву слов и навешиваем text-secondary, если слово есть в множестве -->
    <template v-for="(word, i) in words" :key="i">
      <span
        v-if="highlightSet.has(word.toLowerCase())"
        class="text-secondary"
      >
        {{ word }}
      </span>

      <span v-else>
        {{ word }}
      </span>

      <!-- расставлем пробелы после слов, в конце оставляем пустую строку -->
      {{ i < words.length - 1 ? ' ' : '' }}
    </template>
  </h2>
</template>

<script setup lang="ts">
const { text, highlighted = [] } = defineProps<{ text: string, highlighted?: string[] }>();
const words = computed(() => text.split(' '));

const highlightSet = computed(() =>
  new Set(highlighted.map(word => word.toLowerCase())),
);
</script>

<style scoped>

</style>
