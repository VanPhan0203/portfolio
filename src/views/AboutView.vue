<script setup lang="ts">
// About view component
</script>

<template>
  <div class="min-h-screen flex flex-col items-center justify-center p-4">
    <div class="max-w-2xl w-full bg-white dark:bg-gray-800 shadow-lg rounded-lg p-8">
      <h1 class="text-3xl font-bold text-center text-gray-800 dark:text-white mb-6">
        About This Project
      </h1>
      <p class="text-lg text-gray-600 dark:text-gray-300 mb-4">
        This is a Vue.js application built with:
      </p>
      <ul class="list-disc pl-6 mb-6 text-gray-600 dark:text-gray-300">
        <li class="mb-2">Vue 3 with Composition API</li>
        <li class="mb-2">TypeScript for type safety</li>
        <li class="mb-2">Tailwind CSS for styling</li>
        <li class="mb-2">Vite for fast development and optimized builds</li>
        <li class="mb-2">Vue Router for navigation</li>
      </ul>
      <div class="flex justify-center">
        <router-link 
          to="/" 
          class="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
        >
          Back to Home
        </router-link>
      </div>
    </div>
  </div>
</template>
