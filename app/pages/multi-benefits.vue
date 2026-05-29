<template>
  <section class="flex-1 h-dvh flex flex-col text-white">
    <div class="flex flex-col lg:h-157 max-w-350 lg:mx-auto lg:overflow-visible overflow-y-auto">
      <h2 class="text-secondary p-10 mb-10 text-right uppercase text-4xl font-bold hidden lg:block">
        multi-benefits
      </h2>

      <div class="flex lg:flex-row flex-col gap-8">
        <div class="lg:pl-10 lg:p-0 p-4">
          <benefits-title class="lg:pr-10" :text="benefitsInfo?.title ?? ''" :highlighted="['guaranteed', 'гарантировать']" />
          <p class="xl:text-[20px] lg:pr-80">
            {{ benefitsInfo?.description }}
          </p>
        </div>

        <div class="overflow-x-clip lg:hidden my-10">
          <benefits-carousel class="rotate-1" />
        </div>

        <div class="flex flex-col gap-4 xl:min-w-150 lg:pr-10 lg:p-0 p-4 relative xl:mt-30 lg:mt-20 with-img xl:text-xl text-md">
          <benefits-card v-for="(card, i) in benefitsInfo?.benefits" :key="i">
            {{ card }}
          </benefits-card>
        </div>
      </div>
    </div>

    <div class="hidden lg:flex flex-1  flex-col justify-end overflow-x-clip">
      <benefits-carousel class="rotate-2 mb-12" />
    </div>
  </section>
</template>

<script setup lang="ts">
import { getBenefits } from '~/api/services';

const { data: benefitsInfo } = useAsyncData(
  'benefits',
  getBenefits,
);
</script>

<style scoped>
.with-img:before {
  content: "";
  width: 390px;
  height: 390px;
  position: absolute;
  background: url("@/assets/imgs/snake-benefits.png") center center/cover no-repeat;
  left: 0;
  transform: scaleX(-1) translateX(100%);
  z-index: -1;
}

@media (max-width: 1280px) {
  .with-img:before {
    width: 290px;
    height: 290px;
    top: 10%;
  }
}

@media (max-width: 1024px) {
  .with-img:before {
    display: none;
  }
}
</style>
