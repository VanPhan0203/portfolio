<script setup lang="ts">
import { ref } from 'vue'
import FeatureCard from '../components/FeatureCard.vue'

const title = ref('Vue + TypeScript + Tailwind CSS')
const features = [
  {
    title: 'Vue 3',
    description: 'Leverage the power of Vue 3 with Composition API for better code organization and reusability.',
    icon: '⚡'
  },
  {
    title: 'TypeScript',
    description: 'Enjoy type safety and better developer experience with TypeScript integration.',
    icon: '🔒'
  },
  {
    title: 'Tailwind CSS',
    description: 'Build beautiful UIs quickly with the utility-first CSS framework.',
    icon: '🎨'
  },
  {
    title: 'Vite',
    description: 'Lightning fast development server and optimized production builds.',
    icon: '🚀'
  }
]

const count = ref(0)
const increment = () => {
  count.value++
}
</script>

<template>
  <main class="py-12 px-4">
    <div class="max-w-6xl mx-auto">
      <div class="text-center mb-16">
        <h1 class="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-6">
          {{ title }}
        </h1>
        <p class="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
          A modern web application template built with Vue 3, TypeScript, and Tailwind CSS.
        </p>
        <div class="flex flex-wrap justify-center gap-4">
          <router-link 
            to="/about" 
            class="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
          >
            About
          </router-link>
          <a 
            href="https://vuejs.org" 
            target="_blank" 
            class="px-6 py-3 bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-800 dark:text-white font-medium rounded-lg transition-colors"
          >
            Learn Vue
          </a>
        </div>
      </div>
      
      <!-- Interactive counter example -->
      <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8 mb-12 max-w-md mx-auto text-center">
        <h2 class="text-2xl font-bold mb-4 text-gray-800 dark:text-white">Interactive Counter</h2>
        <p class="text-4xl font-bold mb-6 text-blue-600 dark:text-blue-400">{{ count }}</p>
        <button 
          @click="increment" 
          class="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
        >
          Increment
        </button>
      </div>
      
      <!-- Features section -->
      <h2 class="text-3xl font-bold text-center mb-8 text-gray-800 dark:text-white">Features</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <FeatureCard 
          v-for="(feature, index) in features" 
          :key="index"
          :title="feature.title"
          :description="feature.description"
          :icon="feature.icon"
        />
      </div>
    </div>
  </main>
</template>
