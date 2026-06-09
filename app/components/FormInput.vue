<template>
  <div class="flex flex-col gap-1">
    <input
      :value="modelValue"
      :placeholder="placeholder"
      :class="[
        'w-full bg-white border rounded-xl px-4 py-3 text-sm outline-none transition-colors',
        error
          ? 'border-red-500 focus:border-red-500'
          : 'border-gray-300 focus:border-purple-600'
      ]"
      @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
    />
    <span v-if="error" class="text-red-500 text-xs px-1">{{ error }}</span>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  modelValue: string
  placeholder?: string
  error?: string
}>()

defineEmits<{
  'update:modelValue': [value: string]
}>()
</script>
