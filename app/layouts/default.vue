<template>
  <div class="relative h-dvh">
    <div class="absolute inset-0 -z-1">
      <div class="grid-layer" />
      <div class="gradient-mask-layer" />
    </div>

    <div class="h-full flex flex-col">
      <div class="flex justify-between p-4 md:hidden mb-8">
        <LogoIcon class="w-7 h-7 fill-white" />
        <div class="text-secondary font-bold uppercase underline">
          menu
        </div>
      </div>
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import LogoIcon from '@/assets/icons/logo.svg';
</script>

<style scoped>
.grid-layer {
  position: absolute;
  inset: 0;
  background: url('@/assets/imgs/bg-grid.svg') center center / cover no-repeat, var(--primary-gradient);
}

.gradient-mask-layer {
  position: absolute;
  inset: 0;
  background: var(--primary-gradient);
  mask-image: radial-gradient(ellipse 294px 183.5px at 90% 10%, transparent 0%, black 100%);
  -webkit-mask-image: radial-gradient(ellipse 294px 183.5px at 90% 10%, transparent 0%, black 100%);
}

@media (max-width: 768px) {
  .grid-layer {
    background: url('@/assets/imgs/bg-grid.svg') center center / cover no-repeat, var(--secondary-gradient);
  }

  .gradient-mask-layer {
    background: var(--secondary-gradient);
  }
}
</style>
