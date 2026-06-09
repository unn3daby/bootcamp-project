<template>
  <footer class="flex items-center justify-between px-16 py-6 bg-black">
    <nav class="flex items-center gap-8">
      <a
        href="https://instagram.com"
        target="_blank"
        rel="noopener noreferrer"
        class="font-halvar font-bold text-sm text-yellow-400 underline underline-offset-4 hover:opacity-70 transition-opacity uppercase tracking-wider"
      >
        Instagram
      </a>
      <a
        href="https://t.me"
        target="_blank"
        rel="noopener noreferrer"
        class="font-halvar font-bold text-sm text-yellow-400 underline underline-offset-4 hover:opacity-70 transition-opacity uppercase tracking-wider"
      >
        Telegram
      </a>
      <a
        href="https://linkedin.com"
        target="_blank"
        rel="noopener noreferrer"
        class="font-halvar font-bold text-sm text-yellow-400 underline underline-offset-4 hover:opacity-70 transition-opacity uppercase tracking-wider"
      >
        LinkedIn
      </a>
    </nav>

    <button
      class="font-halvar font-bold text-sm text-yellow-400 underline underline-offset-4 hover:opacity-70 transition-opacity uppercase tracking-wider flex items-center gap-1"
      @click="scrollToTop"
    >
      Scroll to top
      <span class="text-base">↑</span>
    </button>
  </footer>
</template>

<script setup lang="ts">
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>
