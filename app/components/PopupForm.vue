<template>
  <div>
    <p class="text-sm text-gray-400 mb-4">Fields with an asterisk (*) are mandatory</p>

    <input
      v-model="form.name"
      type="text"
      placeholder="Your Name"
      class="w-full border border-gray-300 rounded-lg px-4 py-2.5 mb-3 text-sm focus:outline-none focus:border-purple-600"
    />

    <div class="flex gap-2 mb-6">
      <div class="relative w-1/2">
        <select
          v-model="form.method"
          class="w-full appearance-none border border-gray-300 rounded-lg px-3 py-2.5 pr-8 text-sm focus:outline-none focus:border-purple-600 bg-white"
          :class="form.method ? 'text-gray-900' : 'text-gray-400'"
        >
          <option value="" disabled>Contact Method*</option>
          <option value="telegram">Telegram</option>
          <option value="whatsapp">WhatsApp</option>
          <option value="email">Email</option>
        </select>
        <div class="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 text-xs">▼</div>
      </div>

      <input
        v-model="form.contact"
        type="text"
        placeholder="Your Contact*"
        class="w-1/2 border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-purple-600"
      />
    </div>

    <p v-if="error" class="text-red-500 text-sm mb-3 text-center">{{ error }}</p>

    <div class="flex justify-center">
      <button
        :disabled="loading"
        class="bg-[#FEE97D] hover:bg-[#f5dc5a] font-halvar font-bold px-10 py-2 rounded-md text-sm transition-colors disabled:opacity-50"
        @click="handleSubmit"
      >
        Submit
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import type { ContactMethod } from '~/api/types/form'

defineProps<{
  loading: boolean
  error: string
}>()

const emit = defineEmits<{
  submit: [payload: { name?: string; method: ContactMethod; contact: string }]
}>()

const form = reactive({
  name: '',
  method: '' as ContactMethod | '',
  contact: '',
})

function handleSubmit() {
  if (!form.method || !form.contact) return
  emit('submit', {
    name: form.name || undefined,
    method: form.method as ContactMethod,
    contact: form.contact,
  })
}

defineExpose({ reset: () => {
  form.name = ''
  form.method = ''
  form.contact = ''
}})
</script>
