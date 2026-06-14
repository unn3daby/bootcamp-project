<template>
  <shared-container is="section" class="lg:h-dvh py-10 px-5 flex flex-col text-white">
    <header class="flex items-center justify-between">
      <div>
        <LogoSvg class="w-10 h-10" />
      </div>

      <nav>nav</nav>
    </header>

    <div class="flex-1 flex lg:flex-row flex-col z-1">
      <div class="flex-1 flex flex-col justify-between">
        <div class="mt-40">
          <h2 class="md:text-[80px]/[80px] text-4xl uppercase font-bold mb-2">
            practice
            makes
            profit
          </h2>
          <p class="font-[Stolzl_Book] md:text-[20px] mb-4">
            We provide effective solutions, tested and refined on our own productsand ad budgets
          </p>
          <CubeButton>
            <div class="mt-7 mb-6 mx-6">
              Get in touch
            </div>
          </CubeButton>
        </div>

        <div class="lg:flex items-center gap-5 hidden">
          <svgo-telegram class="w-10 h-10" />
          <svgo-inst class="w-10 h-10" />
          <svgo-linkedin class="w-10 h-10" />
        </div>
      </div>

      <div class="flex-1 relative flex justify-end">
        <img class="lg:absolute -z-1 -left-30 top-0 lg:w-dvh max-w-238 w-[550px]" src="@/assets/imgs/snake-main.png" alt="snake-main">
      </div>
    </div>
  </shared-container>
</template>

<script setup lang="ts">
import LogoSvg from '@/assets/icons/logo.svg';
import CubeButton from '~/components/shared/CubeButton.vue';
</script>

<style scoped>

</style>
