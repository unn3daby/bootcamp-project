<template>
  <section class="flex-1 h-dvh flex flex-col text-white">
    <div class="flex flex-col lg:h-157 max-w-350 lg:mx-auto lg:overflow-visible overflow-y-auto">
      <h2 class="text-secondary p-10 mb-10 text-right uppercase text-4xl font-bold hidden lg:block">
        multi-benefits
      </h2>

      <div class="flex lg:flex-row flex-col">
        <div class="lg:px-10 lg:p-0 p-4">
          <h2 class="font-bold xl:text-[50px] lg:text-[42px] text-[32px] leading-none mb-4">
            Results can only be <span class="text-secondary">guaranteed</span> when you control every step
          </h2>
          <p class="xl:text-[20px] lg:pr-40">
            That's why we built
            a full-time in-house team and custom infrastructure – tailored
            for every task, tested daily
            in the sweepstakes vertical
          </p>
        </div>

        <div class="overflow-x-clip lg:hidden my-10">
          <multi-benefits-carousel class="rotate-1" />
        </div>

        <div class="flex flex-col gap-4 lg:pr-10 lg:p-0 p-4 relative xl:mt-30 lg:mt-20 with-img xl:text-xl text-md">
          <multi-benefits-card>
            We take on outsourced projects across
            any niche — from iGaming and dating
            to e-commerce and recruitment
          </multi-benefits-card>
          <multi-benefits-card>
            We don't learn at the client's expense
          </multi-benefits-card>
          <multi-benefits-card>
            We use what works — proven again and again
          </multi-benefits-card>
        </div>
      </div>
    </div>

    <div class="hidden lg:flex flex-1  flex-col justify-end overflow-x-clip">
      <multi-benefits-carousel class="rotate-2 mb-12" />
    </div>
  </section>
</template>

<script setup lang="ts">
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
