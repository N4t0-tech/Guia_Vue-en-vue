<script setup lang="ts">
import { useRoute } from 'vue-router'

defineProps<{
  open: boolean
}>()

const emit = defineEmits<{
  close: []
}>()

const route = useRoute()

const chapters = [
  { path: '/introduccion', label: 'Introducción' },
  { path: '/composition-api', label: 'Composition API' },
  { path: '/componentes', label: 'Componentes' },
  { path: '/directivas', label: 'Directivas' },
  { path: '/router', label: 'Vue Router' },
  { path: '/pinia', label: 'Pinia' },
  { path: '/peticiones', label: 'Peticiones HTTP' },
  { path: '/ciclo-vida', label: 'Ciclo de vida' },
  { path: '/estilos', label: 'Estilos' },
  { path: '/composables', label: 'Composables' },
  { path: '/formularios', label: 'Formularios' },
  { path: '/despliegue', label: 'Despliegue' },
  { path: '/setup-proyecto', label: 'Setup del proyecto' },
  { path: '/variables-entorno', label: 'Variables de entorno' },
  { path: '/provide-inject', label: 'Provide / Inject' },
  { path: '/transiciones', label: 'Transiciones' },
  { path: '/app-ejemplo', label: 'App de ejemplo' },
  { path: '/app-movil', label: 'App móvil con Capacitor' }
]

const activeClass = (path: string) => ({
  active: route.path === path
})

function handleNav() {
  emit('close')
}
</script>

<template>
  <aside class="sidebar" :class="{ open }">
    <div class="sidebar-header">
      <span class="logo">vue</span>
      <span class="subtitle">guía</span>
      <button class="close-btn" @click="emit('close')" title="Cerrar">✕</button>
    </div>
    <nav class="sidebar-nav">
      <a
        v-for="chapter in chapters"
        :key="chapter.path"
        :href="chapter.path"
        class="nav-item"
        :class="activeClass(chapter.path)"
        @click="handleNav"
      >
        {{ chapter.label }}
      </a>
    </nav>
    <div class="sidebar-footer">
      <a href="https://vuejs.org" target="_blank" rel="noopener" class="footer-link">vuejs.org</a>
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
  padding: 1.5rem 1.5rem 0.8rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.close-btn {
  display: none;
  margin-left: auto;
  background: none;
  border: none;
  color: var(--text);
  font-size: 1rem;
  cursor: pointer;
  padding: 0.2rem 0.5rem;
}

.close-btn:hover {
  opacity: 0.7;
}

.logo {
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--text-heading);
  text-transform: lowercase;
}

.subtitle {
  font-size: 0.75rem;
  color: var(--text-dim);
}

.sidebar-nav {
  flex: 1;
  padding: 0.5rem 0;
}

.nav-item {
  display: block;
  padding: 0.45rem 1.5rem;
  color: var(--text);
  font-size: 0.8rem;
  text-decoration: none;
  transition: all 0.1s;
  border-left: 2px solid transparent;
}

.nav-item:hover {
  color: var(--text-heading);
}

.nav-item.active {
  color: var(--text-heading);
  border-left-color: var(--text-heading);
  font-weight: 500;
}

.sidebar-footer {
  padding: 1rem 1.5rem;
  border-top: 1px solid var(--border);
}

.footer-link {
  font-size: 0.75rem;
  color: var(--text-dim);
}

.footer-link:hover {
  color: var(--text-heading);
  opacity: 1;
}

@media (max-width: 768px) {
  .sidebar {
    transform: translateX(-100%);
    transition: transform 0.3s ease;
  }

  .sidebar.open {
    transform: translateX(0);
  }

  .close-btn {
    display: block;
  }
}
</style>
