<template>
  <Teleport to="body">
    <Transition
      enter-active-class="transition-opacity duration-200"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition-opacity duration-200"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div
        v-if="modelValue"
        class="fixed inset-0 z-50 flex items-center justify-center bg-black/60"
        @click.self="close"
      >
        <div class="relative bg-white border-2 border-purple-600 rounded-2xl p-8 w-[480px] max-w-[90vw]">
          <button
            class="absolute top-4 right-5 text-purple-600 text-lg font-bold leading-none hover:opacity-60 transition-opacity"
            @click="close"
          >
            ✕
          </button>

          <div class="flex justify-center mb-6 text-purple-600">
            <LogoIcon />
          </div>

          <PopupForm
            v-if="!submitted"
            ref="formRef"
            :loading="loading"
            :error="apiError"
            @submit="handleSubmit"
          />
          <PopupSuccess v-else @close="close" />
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import LogoIcon from '~/assets/icons/logo.svg'
import { submitForm } from '~/api/services/form'
import { isApiError } from '~/api/errors'
import type { ContactMethod } from '~/api/types/form'

defineProps<{
  modelValue: boolean
}>()

const emit = defineEmits<{
  'update:modelValue': [value: boolean]
}>()

const submitted = ref(false)
const loading = ref(false)
const apiError = ref('')
const formRef = ref<{ reset: () => void } | null>(null)

function close() {
  emit('update:modelValue', false)
  setTimeout(() => {
    submitted.value = false
    apiError.value = ''
    formRef.value?.reset()
  }, 200)
}

async function handleSubmit(payload: { name?: string; method: ContactMethod; contact: string }) {
  loading.value = true
  apiError.value = ''
  try {
    await submitForm(payload)
    submitted.value = true
  }
  catch (e) {
    apiError.value = isApiError(e) ? e.message : 'Something went wrong. Please try again.'
  }
  finally {
    loading.value = false
  }
}
</script>
