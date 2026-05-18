<script setup lang="ts">
import { ref } from 'vue'
import TutorialSidebar from './components/TutorialSidebar.vue'
import SkeletonPage from './components/SkeletonPage.vue'
import { useTheme } from './composables/useTheme'

const { theme, toggle } = useTheme()
const sidebarOpen = ref(false)

function toggleSidebar() {
  sidebarOpen.value = !sidebarOpen.value
}

function closeSidebar() {
  sidebarOpen.value = false
}
</script>

<template>
  <div class="overlay" :class="{ open: sidebarOpen }" @click="closeSidebar" />
  <TutorialSidebar :open="sidebarOpen" @close="closeSidebar" />
  <div class="main-content">
    <header class="top-bar">
      <div class="top-bar-left">
        <button class="menu-btn" @click="toggleSidebar" title="Menú">
          <span class="hamburger" :class="{ open: sidebarOpen }">
            <span></span><span></span><span></span>
          </span>
        </button>
        <h1 class="site-title">Guía de Vue.js</h1>
      </div>
      <button class="theme-toggle" @click="toggle">
        {{ theme === 'dark' ? 'light' : 'dark' }}
      </button>
    </header>
    <main>
      <router-view v-slot="{ Component }">
        <Transition name="page" mode="out-in">
          <component :is="Component">
            <template #fallback>
              <SkeletonPage />
            </template>
          </component>
        </Transition>
      </router-view>
    </main>
  </div>
</template>

<style scoped>
.top-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  padding-bottom: 0.8rem;
  border-bottom: 1px solid var(--border);
}

.top-bar-left {
  display: flex;
  align-items: center;
  gap: 0.8rem;
}

.menu-btn {
  display: none;
  background: transparent;
  border: 1px solid var(--border);
  width: 36px;
  height: 36px;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  padding: 0;
}

.hamburger {
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: 16px;
}

.hamburger span {
  display: block;
  width: 100%;
  height: 1.5px;
  background: var(--text);
  transition: all 0.3s;
}

.hamburger.open span:nth-child(1) {
  transform: translateY(5.5px) rotate(45deg);
}

.hamburger.open span:nth-child(2) {
  opacity: 0;
}

.hamburger.open span:nth-child(3) {
  transform: translateY(-5.5px) rotate(-45deg);
}

.site-title {
  font-size: 1.1rem;
  margin: 0;
  color: var(--text-heading);
  white-space: nowrap;
  font-weight: 600;
}

.theme-toggle {
  font-size: 0.7rem;
  background: transparent;
  border: 1px solid var(--border);
  padding: 0.3rem 0.8rem;
  color: var(--text-dim);
  cursor: pointer;
  transition: all 0.15s;
  text-transform: lowercase;
}

.theme-toggle:hover {
  border-color: var(--text-heading);
  color: var(--text-heading);
}

.page-enter-active,
.page-leave-active {
  transition: opacity 0.15s ease;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
}

@media (max-width: 768px) {
  .menu-btn {
    display: flex;
  }

  .site-title {
    font-size: 0.9rem;
  }
}
</style>
