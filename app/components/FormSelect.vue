<template>
  <div class="relative flex flex-col gap-1" ref="containerRef">
    <button
      type="button"
      :class="[
        'w-full bg-white border rounded-xl px-4 py-3 text-sm outline-none transition-colors flex items-center justify-between',
        error
          ? 'border-red-500'
          : isOpen ? 'border-purple-600' : 'border-gray-300'
      ]"
      @click="isOpen = !isOpen"
    >
      <span :class="modelValue ? 'text-gray-900' : 'text-gray-400'">
        {{ selectedLabel || placeholder }}
      </span>
      <svg
        :class="['transition-transform duration-200 text-purple-600', isOpen ? 'rotate-180' : '']"
        width="12" height="8" viewBox="0 0 12 8" fill="none"
      >
        <path d="M1 1L6 6L11 1" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
      </svg>
    </button>

    <Transition
      enter-active-class="transition duration-150"
      enter-from-class="opacity-0 -translate-y-1"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-150"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-1"
    >
      <div
        v-if="isOpen"
        class="absolute top-full left-0 right-0 z-10 mt-1 bg-white border border-purple-600 rounded-xl overflow-hidden"
      >
        <div class="max-h-48 overflow-y-auto scrollbar-purple">
          <button
            v-for="option in options"
            :key="option.value"
            type="button"
            class="w-full text-left px-4 py-2.5 text-sm hover:bg-purple-50 transition-colors"
            @click="select(option)"
          >
            {{ option.label }}
          </button>
        </div>
      </div>
    </Transition>

    <span v-if="error" class="text-red-500 text-xs px-1">{{ error }}</span>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'

export interface SelectOption {
  value: string
  label: string
}

const props = defineProps<{
  modelValue: string
  placeholder?: string
  options: SelectOption[]
  error?: string
}>()

const emit = defineEmits<{
  'update:modelValue': [value: string]
}>()

const isOpen = ref(false)
const containerRef = ref<HTMLElement | null>(null)

const selectedLabel = computed(
  () => props.options.find(o => o.value === props.modelValue)?.label ?? ''
)

function select(option: SelectOption) {
  emit('update:modelValue', option.value)
  isOpen.value = false
}

function handleOutsideClick(e: MouseEvent) {
  if (containerRef.value && !containerRef.value.contains(e.target as Node)) {
    isOpen.value = false
  }
}

onMounted(() => document.addEventListener('click', handleOutsideClick))
onUnmounted(() => document.removeEventListener('click', handleOutsideClick))
</script>

<style scoped>
.scrollbar-purple::-webkit-scrollbar {
  width: 4px;
}
.scrollbar-purple::-webkit-scrollbar-track {
  background: transparent;
}
.scrollbar-purple::-webkit-scrollbar-thumb {
  background: #9333ea;
  border-radius: 9999px;
}
</style>
