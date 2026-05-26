<template>
  <section class="min-h-dvh bg-(image:--main-gradient) p-10 flex flex-col text-primary">
    <h2 class="text-secondary text-right uppercase text-4xl font-bold">
      multi-benefits
    </h2>

    <div class="flex-1 flex flex-col justify-center">
      <h3 class="text-4xl font-bold mb-2 max-w-1/2">
        Хочешь <span class="text-secondary">гарантировать</span> результат — контролируй всё сам
      </h3>

      <div class="flex gap-8 justify-between">
        <div class="max-w-1/2">
          Поэтому мы собрали фултайм-команду, выстроили собственную инфраструктуру
          под каждую задачу, и каждый день обкатываем её в нише sweepstakes
        </div>

        <div class="flex flex-col gap-4">
          <multi-benefits-card v-for="i in 3" :key="i">
            Драйвим аутсорс-проекты за аутсорс-проекты в любых нишах — от iGaming и дейтинга до e-commerce и рекрутинга
          </multi-benefits-card>
        </div>
      </div>
    </div>

    <div>
      carousel
    </div>
  </section>
</template>

<script setup lang="ts">

</script>

<style scoped>
</style>
