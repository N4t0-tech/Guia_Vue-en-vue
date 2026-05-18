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

function handleNav() {
  emit('close')
}
</script>

<template>
  <aside class="sidebar" :class="{ open }">
    <div class="sidebar-header">
      <span class="logo">&gt;_ VUE</span>
      <span class="subtitle">root@guide:~$</span>
      <button class="close-btn" @click="emit('close')" title="Cerrar">✕</button>
    </div>
    <div class="sidebar-divider">
      <span class="divider-line" />
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
        <span class="nav-prompt">&gt;</span>
        {{ chapter.label }}
      </a>
    </nav>
    <div class="sidebar-footer">
      <a href="https://vuejs.org" target="_blank" rel="noopener" class="footer-link">$ man vue</a>
      <span class="footer-version">vue@3</span>
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
  color: var(--accent);
}

.logo {
  font-size: 1.3rem;
  font-weight: 700;
  color: var(--accent);
}

.subtitle {
  font-size: 0.7rem;
  color: var(--text-dim);
  margin-top: 2px;
}

.sidebar-divider {
  padding: 0 1.5rem 0.8rem;
}

.divider-line {
  display: block;
  height: 1px;
  background: repeating-linear-gradient(
    90deg,
    var(--border) 0,
    var(--border) 4px,
    transparent 4px,
    transparent 8px
  );
}

.sidebar-nav {
  flex: 1;
  padding: 0;
}

.nav-item {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  padding: 0.6rem 1.5rem;
  color: var(--text);
  font-size: 0.8rem;
  text-decoration: none;
  transition: all 0.1s;
  border-left: 2px solid transparent;
  opacity: 0.7;
}

.nav-prompt {
  font-size: 0.7rem;
  color: var(--text-dim);
  width: 0.8rem;
  visibility: hidden;
}

.nav-item:hover {
  opacity: 1;
  background: var(--bg-soft);
  color: var(--accent);
}

.nav-item:hover .nav-prompt {
  visibility: visible;
  color: var(--accent);
}

.nav-item.active {
  color: var(--accent);
  border-left-color: var(--accent);
  background: var(--bg-soft);
  opacity: 1;
}

.nav-item.active .nav-prompt {
  visibility: visible;
  color: var(--accent);
}

.sidebar-footer {
  padding: 1rem 1.5rem;
  border-top: 1px solid var(--border);
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
}

.footer-link {
  font-size: 0.75rem;
  color: var(--text-dim);
}

.footer-link:hover {
  color: var(--accent);
  text-shadow: none;
}

.footer-version {
  font-size: 0.65rem;
  color: var(--text-dim);
  opacity: 0.4;
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
