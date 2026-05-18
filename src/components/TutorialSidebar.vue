<script setup lang="ts">
import { useRoute } from 'vue-router'
import { computed } from 'vue'

const route = useRoute()

const chapters = [
  { path: '/introduccion', label: '1. Introducción' },
  { path: '/composition-api', label: '2. Composition API' },
  { path: '/componentes', label: '3. Componentes' },
  { path: '/directivas', label: '4. Directivas' },
  { path: '/router', label: '5. Vue Router' },
  { path: '/pinia', label: '6. Pinia' },
  { path: '/peticiones', label: '7. Peticiones HTTP' },
  { path: '/ciclo-vida', label: '8. Ciclo de vida' },
  { path: '/estilos', label: '9. Estilos' },
  { path: '/composables', label: '10. Composables' },
  { path: '/formularios', label: '11. Formularios' },
  { path: '/despliegue', label: '12. Despliegue' }
]

const activeClass = (path: string) => ({
  active: route.path === path
})
</script>

<template>
  <aside class="sidebar">
    <div class="sidebar-header">
      <span class="logo">Vue</span>
      <span class="subtitle">Tutorial</span>
    </div>
    <nav class="sidebar-nav">
      <a
        v-for="chapter in chapters"
        :key="chapter.path"
        :href="chapter.path"
        class="nav-item"
        :class="activeClass(chapter.path)"
      >
        {{ chapter.label }}
      </a>
    </nav>
    <div class="sidebar-footer">
      <a href="https://vuejs.org" target="_blank" rel="noopener" class="footer-link">Documentación oficial</a>
      <span class="footer-version">Vue 3</span>
    </div>
  </aside>
</template>

<style scoped>
.sidebar {
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  width: var(--sidebar-width);
  background: var(--sidebar-bg);
  border-right: 1px solid var(--border);
  display: flex;
  flex-direction: column;
  z-index: 100;
  overflow-y: auto;
}

.sidebar-header {
  padding: 1.5rem;
  border-bottom: 1px solid var(--border);
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.logo {
  font-size: 1.5rem;
  font-weight: 800;
  color: var(--accent);
  letter-spacing: -1px;
}

.subtitle {
  font-size: 0.85rem;
  color: var(--text);
  opacity: 0.7;
}

.sidebar-nav {
  flex: 1;
  padding: 0.8rem 0;
}

.nav-item {
  display: block;
  padding: 0.7rem 1.5rem;
  color: var(--text);
  font-size: 0.9rem;
  text-decoration: none;
  transition: all 0.15s;
  border-left: 3px solid transparent;
}

.nav-item:hover {
  background: var(--bg-soft);
  color: var(--accent);
}

.nav-item.active {
  color: var(--accent);
  border-left-color: var(--accent);
  background: var(--bg-soft);
  font-weight: 600;
}

.sidebar-footer {
  padding: 1rem 1.5rem;
  border-top: 1px solid var(--border);
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
}

.footer-link {
  font-size: 0.8rem;
  color: var(--text);
  opacity: 0.6;
}

.footer-link:hover {
  opacity: 1;
  color: var(--accent);
}

.footer-version {
  font-size: 0.75rem;
  color: var(--text);
  opacity: 0.4;
}

@media (max-width: 768px) {
  .sidebar {
    display: none;
  }
}
</style>
