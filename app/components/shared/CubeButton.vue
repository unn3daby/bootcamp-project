<template>
  <button class="relative test">
    <div class="bg-secondary z-10 font-bold uppercase text-center border-b-1 border-l-1 p-4 tracking-[20%] relative test-triangles">
      <slot />
    </div>
  </button>
</template>

<script setup lang="ts">

</script>

<style scoped>
.test:after {
  content: "";
  position: absolute;
  background: var(--secondary);
  width: 100%;
  height: 100%;
  z-index: 0;
  right: -10px;
  top: -10px;
}

/* Левый верхний треугольник (заполняет верхний левый промежуток) */
.test-triangles:before {
  content: "";
  position: absolute;
  left: -1px;
  top: -10px;
  width: 0;
  height: 0;
  z-index: 5;
  border-bottom: 10px solid black;
  border-left: 10px solid transparent;
}

/* Правый нижний треугольник (заполняет нижний правый промежуток) */
.test-triangles:after {
  content: "";
  position: absolute;
  right: -10px;
  bottom: -1px;
  width: 0;
  height: 0;
  z-index: 5;
  border-top: 10px solid black;
  border-right: 10px solid transparent;
}
</style>
