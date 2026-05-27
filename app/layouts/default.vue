<template>
  <div class="relative dvh">
    <div class="absolute inset-0 -z-1">
      <div class="grid-layer" />
      <div class="gradient-mask-layer" />
    </div>
    <div>
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
.grid-layer {
  position: absolute;
  inset: 0;
  background: url('~/assets/imgs/bg-grid.png') center center / cover no-repeat, var(--primary-gradient);
}

.gradient-mask-layer {
  position: absolute;
  inset: 0;
  background: var(--primary-gradient);
  mask-image: radial-gradient(ellipse 294px 183.5px at 90% 10%, transparent 0%, black 100%);
  -webkit-mask-image: radial-gradient(ellipse 294px 183.5px at 90% 10%, transparent 0%, black 100%);
}

@media (max-width: 1024px) {
  .grid-layer {
    background: url('~/assets/imgs/bg-grid.png') center center / cover no-repeat, var(--secondary-gradient);
  }

  .gradient-mask-layer {
    background: var(--secondary-gradient);
  }
}
</style>
