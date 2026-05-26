<template>
  <div class="text-secondary overflow-hidden">
    <div class="md:border-y-[3px] border-y flex tape">
      <div v-for="i in 2" :key="i" class="flex shrink-0">
        <div
          v-for="j in 4"
          :key="j"
          class="md:text-7xl text-4xl  font-thin py-1 flex uppercase whitespace-nowrap items-center"
        >
          <LogoIcon src="@/assets/icons/logo.svg" alt="logo" class="shrink-0 md:w-16 md:h-16 w-8 h-8 mx-12" />
          <span>Dream big earn bigger!</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import LogoIcon from '@/assets/icons/logo.svg';
</script>

<style scoped>
.tape {
  animation: tape 20s linear infinite;
  width: fit-content;
}

@keyframes tape {
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-50%);
  }
}
</style>
