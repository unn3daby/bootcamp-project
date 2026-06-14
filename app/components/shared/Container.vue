<template>
  <component :is class="w-full md:max-w-360" :class="{ 'mx-auto': !noAutoMargin }">
    <slot />
  </component>
</template>

<script lang="ts" setup>
const { is = 'div' } = defineProps<{ is?: keyof HTMLElementTagNameMap, noAutoMargin?: boolean }>();
</script>
