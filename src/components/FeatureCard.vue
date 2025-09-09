<script setup lang="ts">
defineProps<{
  title: string;
  description: string;
  icon?: string;
}>();
</script>

<template>
  <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 transition-all hover:shadow-lg">
    <div v-if="icon" class="text-3xl mb-4 text-blue-600 dark:text-blue-400">{{ icon }}</div>
    <h3 class="text-xl font-semibold mb-2 text-gray-800 dark:text-white">{{ title }}</h3>
    <p class="text-gray-600 dark:text-gray-300">{{ description }}</p>
  </div>
</template>
