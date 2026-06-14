<template>
  <div class="relative">
    <div class="fixed h-dvh inset-0 -z-1">
      <div class="grid-layer" />
      <div class="gradient-mask-layer" :class="{ faded: isLayoutFaded }" />
    </div>
    <div>
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useLayoutFading } from '~/composables/layout';

const { isLayoutFaded } = useLayoutFading();
</script>

<style scoped>
@property --cx {
  syntax: "<percentage>";
  inherits: false;
  initial-value: 20%;
}

@property --cy {
  syntax: "<percentage>";
  inherits: false;
  initial-value: 20%;
}

.grid-layer {
  position: absolute;
  inset: 0;
  background: url('~/assets/imgs/bg-grid.png') center center / cover no-repeat, var(--primary-gradient);
}

.gradient-mask-layer {
  transition: filter 0.5s;

  position: absolute;
  inset: 0;
  background: var(--primary-gradient);
  mask-image: radial-gradient(50vmin circle at var(--cx) var(--cy),
    rgba(0,0,0,0.4) 0%,
    rgba(0,0,0,0.6) 30%,
    black 80%
  );
  -webkit-mask-image: radial-gradient(50vmin circle at var(--cx) var(--cy),
    rgba(0,0,0,0.4) 0%,
    rgba(0,0,0,0.6) 30%,
    black 80%
  );
  animation: wander-x 43s linear infinite, wander-y 51s linear infinite;
  will-change: mask-image;
}

.gradient-mask-layer.faded {
  filter: brightness(0.25);

  mask-image: radial-gradient(
      50vmin circle at var(--cx) var(--cy),
      rgba(0, 0, 0, 0.85) 0%,   /* почти чёрный (5% прозрачности) */
      black 100%                /* полностью чёрный (0% прозрачности) */
  );
  -webkit-mask-image: radial-gradient(
      50vmin circle at var(--cx) var(--cy),
      rgba(0, 0, 0, 0.85) 0%,
      black 100%
  );
}

@keyframes wander-x {
  0%   { --cx: 15%; }
  12%  { --cx: 68%; }
  27%  { --cx: 42%; }
  40%  { --cx: 85%; }
  55%  { --cx: 22%; }
  68%  { --cx: 75%; }
  82%  { --cx: 50%; }
  93%  { --cx: 30%; }
  100% { --cx: 15%; }
}

@keyframes wander-y {
  0%   { --cy: 20%; }
  15%  { --cy: 65%; }
  30%  { --cy: 35%; }
  48%  { --cy: 80%; }
  62%  { --cy: 15%; }
  78%  { --cy: 55%; }
  90%  { --cy: 72%; }
  100% { --cy: 20%; }
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
