<template>
  <button
    type="button"
    class="group relative tracking-[20%] inline-flex bg-transparent uppercase cursor-pointer font-medium text-(--secondary)"
  >
    <svg
      class="absolute inset-0 w-full h-full block pointer-events-none"
      viewBox="0 0 333 85"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
    >
      <path
        class="fill-current group-hover:fill-black"
        d="M1.25 83.25V9.85855L21.2683 1.25H331.25V77.5855L321.73 83.25H1.25Z"
      />
      <path
        class="stroke-black group-hover:stroke-(--secondary)"
        d="M331.25 1.25V77.5855L321.73 83.25H1.25V9.85855L21.2683 1.25H331.25Z
           M1.25 9.85855H321.73
           M321.73 83.25V9.85855
           M321.73 9.85855C325.448 7.27775 331.25 1.25 331.25 1.25"
        stroke-width="2.5"
        stroke-linejoin="round"
        vector-effect="non-scaling-stroke"
        fill="none"
      />
    </svg>
    <span class="relative z-10 text-xl font-semibold text-black whitespace-nowrap leading-tight pointer-events-none group-hover:text-(--secondary)">
      <slot />
    </span>
  </button>
</template>

<script setup lang="ts">
</script>
