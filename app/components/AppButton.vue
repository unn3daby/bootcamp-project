<template>
  <button
    :type="type"
    :disabled="disabled"
    :class="[
      'font-halvar font-bold px-10 py-3 rounded-xl transition-colors disabled:opacity-50 w-full',
      variant === 'yellow'
        ? 'bg-[#FEE97D] hover:bg-[#f5dc5a] text-black'
        : 'bg-purple-600 hover:bg-purple-700 text-white'
    ]"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
withDefaults(defineProps<{
  variant?: 'yellow' | 'purple'
  type?: 'button' | 'submit'
  disabled?: boolean
}>(), {
  variant: 'yellow',
  type: 'button',
  disabled: false,
})
</script>
