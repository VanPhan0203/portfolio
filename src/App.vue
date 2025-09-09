<script setup lang="ts">
// App component
</script>

<template>
  <div class="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
    <header class="bg-white dark:bg-gray-800 shadow">
      <nav class="container mx-auto px-4 py-4 flex justify-between items-center">
        <div class="text-xl font-bold">Vue + TS + Tailwind</div>
        <div class="space-x-4">
          <router-link to="/" class="hover:text-blue-600 dark:hover:text-blue-400">Home</router-link>
          <router-link to="/about" class="hover:text-blue-600 dark:hover:text-blue-400">About</router-link>
        </div>
      </nav>
    </header>
    
    <main>
      <router-view />
    </main>
    
    <footer class="bg-white dark:bg-gray-800 shadow-inner py-6">
      <div class="container mx-auto px-4 text-center text-sm text-gray-600 dark:text-gray-400">
        &copy; {{ new Date().getFullYear() }} Vue + TypeScript + Tailwind App
      </div>
    </footer>
  </div>
</template>
