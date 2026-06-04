<template>
  <div class="min-h-screen bg-gray-900 flex items-center justify-center p-8">
    <div class="bg-white rounded-2xl border-2 border-purple-600 p-8 w-120">
      <div class="flex flex-col gap-3 mb-6">
        <FormInput
          v-model="form.name"
          placeholder="First Name*"
          :error="errors.name"
        />
        <FormInput
          v-model="form.contact"
          placeholder="Your Contact*"
          :error="errors.contact"
        />
        <FormSelect
          v-model="form.method"
          placeholder="Contact Method*"
          :options="contactOptions"
          :error="errors.method"
        />
      </div>

      <AppButton variant="yellow" @click="submit">Apply</AppButton>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'

const form = reactive({ name: '', contact: '', method: '' })
const errors = reactive({ name: '', contact: '', method: '' })

const contactOptions = [
  { value: 'telegram', label: 'Telegram' },
  { value: 'whatsapp', label: 'WhatsApp' },
  { value: 'email', label: 'Email' },
]

function validate() {
  errors.name = form.name ? '' : 'This field is required'
  errors.contact = form.contact ? '' : 'This field is required'
  errors.method = form.method ? '' : 'Please select a contact method'
  return !errors.name && !errors.contact && !errors.method
}

function submit() {
  if (!validate()) return
  alert('Form submitted!')
}
</script>
