<template>
  <component :is class="w-full md:max-w-360 mx-auto">
    <slot />
  </component>
</template>

<script lang="ts" setup>
const { is = 'div' } = defineProps<{ is?: keyof HTMLElementTagNameMap }>();
</script>
