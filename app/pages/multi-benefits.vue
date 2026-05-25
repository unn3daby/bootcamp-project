<template>
  <section class="h-dvh bg-(image:--main-gradient) p-10 flex text-primary">
    <div class="flex-1 mt-40">
      <h3 class="text-4xl font-bold">
        Хочешь <span class="text-secondary">гарантировать</span> результат — контролируй всё сам
      </h3>
      <p>
        Поэтому мы собрали фултайм-команду, выстроили собственную инфраструктуру
        под каждую задачу, и каждый день обкатываем её в нише sweepstakes
      </p>
    </div>
    <div class="flex flex-1 flex-col">
      <h2 class="text-secondary text-right uppercase text-4xl font-bold">
        multi-benefits
      </h2>

      <div class="flex flex-col gap-1">
        <multi-benefits-item v-for="i in 3" :key="i">
          123
        </multi-benefits-item>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">

</script>

<style scoped>
</style>
