<script setup lang="ts">
import TutorialSidebar from './components/TutorialSidebar.vue'
import { useTheme } from './composables/useTheme'

const { theme, toggle } = useTheme()
</script>

<template>
  <TutorialSidebar />
  <div class="main-content">
    <header class="top-bar">
      <h1 class="site-title">Guía de Vue.js</h1>
      <button class="theme-toggle" @click="toggle" :title="theme === 'dark' ? 'Modo claro' : 'Modo oscuro'">
        {{ theme === 'dark' ? '☀' : '☾' }}
      </button>
    </header>
    <main>
      <router-view />
    </main>
  </div>
</template>

<style scoped>
.top-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid var(--border);
}

.site-title {
  font-size: 1.3rem;
  margin: 0;
  color: var(--text-heading);
}

.theme-toggle {
  font-size: 1.3rem;
  background: var(--card-bg);
  border: 1px solid var(--border);
  border-radius: 8px;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s;
  line-height: 1;
}

.theme-toggle:hover {
  border-color: var(--accent);
}
</style>
