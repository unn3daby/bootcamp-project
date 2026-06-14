<template>
  <section ref="section" class="flex justify-center items-center px-5 min-h-dvh lg:h-dvh overflow-x-hidden">
    <shared-container class="flex flex-col h-full justify-center font-bold text-white">
      <shared-section-title class="mb-5">
        multi-tasks
      </shared-section-title>

      <div class="flex-1 flex flex-col lg:max-h-157 lg:flex-row lg:justify-center lg:items-center gap-6">
        <div class="main-card block-item p-4 h-full flex-2 flex flex-col justify-between items-center rounded-lg">
          <div class="text-[20px]">
            <shared-highlighted-words :text="cardsInfo?.description ?? ''" :highlighted="['in-house', 'team']" />
          </div>

          <img class="lg:max-w-140 max-w-90" src="@/assets/imgs/snake-diamond.png" alt="snake-diamond">
        </div>

        <div class="block-item gap-6 h-full flex-1 flex flex-col">
          <sections-multi-tasks-card v-for="(card, index) in tiles.slice(0, 2)" :key="index" class="flex-1">
            <sections-multi-tasks-card-title>
              {{ card.title }}
            </sections-multi-tasks-card-title>

            <p>
              {{ card.text }}
            </p>
          </sections-multi-tasks-card>
        </div>

        <div class="block-item gap-6 h-full flex-1 flex flex-col">
          <sections-multi-tasks-card v-for="(card, index) in tiles.slice(2, 6)" :key="index">
            <sections-multi-tasks-card-title>
              {{ card.title }}
            </sections-multi-tasks-card-title>

            <p>
              {{ card.text }}
            </p>
          </sections-multi-tasks-card>
        </div>
      </div>
    </shared-container>
  </section>
</template>

<script setup lang="ts">
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { getTasks } from '~/api/services';
import { useAnimationsState } from '~/composables/animations';
import { useLayoutFading } from '~/composables/layout';

const sectionRef = useTemplateRef('section');

const { data: cardsInfo } = useAsyncData(
  'multi-tasks',
  getTasks,
);

const tiles = computed(() => cardsInfo.value?.tiles ?? []);

function startAnimation(blocks: HTMLElement[]) {
  gsap.to(blocks, {
    opacity: 1,
    x: 0,
    duration: 0.75,
    stagger: 0.5,
    ease: 'power2.out',
  });
}

onMounted(() => {
  if (useAnimationsState().isAnimationsDisabled.value)
    return;

  const blocks = gsap.utils.toArray<HTMLElement>('.block-item');

  ScrollTrigger.create({
    trigger: sectionRef.value,
    start: 'top bottom',
    scroller: 'main',
    once: true,
    onEnter: () => startAnimation(blocks),
  });

  const { fadeLayout, unfadeLayout } = useLayoutFading();
  ScrollTrigger.create({
    trigger: sectionRef.value,
    start: '80% bottom',
    end: 'bottom 20%',
    scroller: 'main',
    onEnter: fadeLayout,
    onEnterBack: fadeLayout,
    onLeave: unfadeLayout,
    onLeaveBack: unfadeLayout,
  });
});

onUnmounted(() => {
  ScrollTrigger.getAll().forEach(t => t.kill());
});
</script>

<style scoped>
.block-item {
  opacity: 0;
  transform: translateX(100%);
}

.main-card {
  background: var(--main-card-gradient);
}

@media (max-width: 1080px) {
  .block-item {
    opacity: 1;
    transform: translateX(0);
  }
}
</style>
