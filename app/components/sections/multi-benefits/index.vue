<template>
  <section ref="section" class="h-dvh flex flex-col overflow-hidden text-white">
    <container class="flex flex-col lg:h-157">
      <shared-section-title class="p-10 mb-10">
        multi-benefits
      </shared-section-title>

      <div class="flex lg:flex-row flex-col gap-8">
        <div ref="leftContent" class="lg:pl-10 lg:p-0 p-4 relative z-2">
          <shared-title class="lg:pr-10" :text="benefitsInfo?.title ?? ''" :highlighted="['guaranteed', 'гарантировать']" />
          <p class="xl:text-[20px] lg:pr-80">
            {{ benefitsInfo?.description }}
          </p>
        </div>

        <div class="overflow-x-clip lg:hidden my-10">
          <benefits-carousel class="rotate-1" />
        </div>

        <div ref="rightContent" class="with-img p-4 text-md relative flex flex-col gap-4 xl:min-w-150 lg:pr-10 lg:p-0 lg:mt-20 xl:mt-30 xl:text-xl">
          <benefits-card v-for="(card, i) in benefitsInfo?.benefits" :key="i" class="relative z-1">
            {{ card }}
          </benefits-card>
        </div>
      </div>
    </container>

    <div class="hidden lg:flex flex-1 flex-col justify-end overflow-x-clip">
      <benefits-carousel class="rotate-2 mb-12" />
    </div>
  </section>
</template>

<script setup lang="ts">
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { getBenefits } from '~/api/services';
import { useAnimationsState } from '~/composables/animations';

const { data: benefitsInfo } = useAsyncData(
  'benefits',
  getBenefits,
);

const sectionRef = useTemplateRef('section');
const rightContentRef = useTemplateRef('rightContent');
const leftContentRef = useTemplateRef('leftContent');

onMounted(() => {
  if (useAnimationsState().isAnimationsDisabled.value) {
    return;
  }

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: sectionRef.value,
      scroller: 'main',
      start: 'top bottom',
      end: 'bottom top',
      scrub: true,
    },
  });

  tl.fromTo(leftContentRef.value, { xPercent: -100, opacity: 0 }, { xPercent: 0, opacity: 1 });
  tl.fromTo(rightContentRef.value, { xPercent: 100, opacity: 0 }, { xPercent: 0, opacity: 1 }, 0);
  tl.to(leftContentRef.value, { xPercent: -100, opacity: 0 });
  tl.to(rightContentRef.value, { xPercent: 100, opacity: 0 }, '<');
});

onUnmounted(() => {
  ScrollTrigger.getAll().forEach(t => t.kill());
});
</script>

<style scoped>
.with-img:before {
  content: "";
  width: 390px;
  height: 390px;
  position: absolute;
  background: url("../../../assets/imgs/snake-benefits.png") center center/cover no-repeat;
  left: 0;
  transform: scaleX(-1) translateX(100%);
  z-index: 0;
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
