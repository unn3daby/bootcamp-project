<template>
  <section class="flex-1 flex flex-col text-white mb-10">
    <div class="relative h-full max-h-220 max-w-360 flex flex-col md:mx-auto">
      <div class="flex-1 flex flex-col mb-10 md:flex-row md:gap-10">
        <div class="px-4 md:p-10 mb-10 md:mb-0 md:w-1/2 md:flex md:flex-col md:justify-center">
          <h2 class="font-bold text-[32px] md:text-[50px] leading-none mb-4">
            Results can only be <span class="text-secondary">guaranteed</span> when you control every step
          </h2>
          <p class="sm:text-[20px]">
            That's why we built
            a full-time in-house team and custom infrastructure – tailored
            for every task, tested daily
            in the sweepstakes vertical
          </p>
        </div>

        <div class="overflow-x-clip md:hidden mb-10">
          <multi-benefits-carousel class="rotate-1" />
        </div>

        <div class="px-4 md:p-10 md:w-1/2 md:flex md:flex-col md:justify-between">
          <h2 class="text-secondary text-right uppercase text-4xl font-bold hidden md:block mb-4">
            multi-benefits
          </h2>
          <div class="flex flex-col gap-4">
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
    </div>
    <div class="overflow-x-clip hidden md:block">
      <multi-benefits-carousel class="rotate-1" />
    </div>
  </section>
</template>

<script setup lang="ts">
</script>
