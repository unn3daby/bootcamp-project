<template>
  <shared-container is="section" ref="section" class="lg:h-dvh py-10 px-5 flex flex-col lg:gap-30 text-white justify-between mx-0">
    <header class="flex items-center justify-between">
      <div>
        <LogoSvg class="w-10 h-10" />
      </div>

      <nav>nav</nav>
    </header>

    <div class="flex-1 flex relative lg:flex-row flex-col z-1 max-h-157">
      <div class="flex-1 flex flex-col justify-between">
        <div ref="leftContent" class="lg:mt-0 mt-10 lg:w-1/2">
          <h2 class="sm:text-[80px]/[80px] text-4xl uppercase font-bold mb-2">
            practice
            makes
            profit
          </h2>
          <p class="font-[Stolzl_Book] md:text-[20px] mb-4 pr-20">
            We provide effective solutions, tested and refined on our own productsand ad budgets
          </p>
          <CubeButton>
            <div class="mt-7 mb-6 mx-6">
              Get in touch
            </div>
          </CubeButton>
        </div>

        <div class="mt-10 lg:flex items-center gap-5 hidden">
          <button>
            <svgo-telegram class="w-10 h-10" />
          </button>
          <button>
            <svgo-inst class="w-10 h-10" />
          </button>
          <button>
            <svgo-linkedin class="w-10 h-10" />
          </button>
        </div>
      </div>
      <img class="lg:absolute lg:w-dvh max-w-190 -z-1 right-0 bottom-0" src="@/assets/imgs/snake-main.png" alt="snake-main">
    </div>
    <div>&nbsp</div>
  </shared-container>
</template>

<script setup lang="ts">
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import LogoSvg from '@/assets/icons/logo.svg';
import CubeButton from '~/components/shared/CubeButton.vue';
import { useAnimationsState } from '~/composables/animations';

const sectionRef = useTemplateRef('section');
const leftContentRef = useTemplateRef('leftContent');

onMounted(() => {
  if (useAnimationsState().isAnimationsDisabled.value) {
    return;
  }

  gsap.fromTo(
    leftContentRef.value,
    { xPercent: -100, opacity: 0 },
    { xPercent: 0, opacity: 1, duration: 0.8, ease: 'power2.out' },
  );

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: sectionRef.value?.$el,
      scroller: 'main',
      start: 'top bottom',
      end: 'bottom top',
      scrub: true,
    },
  });

  tl.fromTo(leftContentRef.value, { xPercent: -100, opacity: 0 }, { xPercent: 0, opacity: 1 });
  tl.to(leftContentRef.value, { xPercent: -100, opacity: 0 });
});

onUnmounted(() => {
  ScrollTrigger.getAll().forEach(t => t.kill());
});
</script>

<style scoped>

</style>
