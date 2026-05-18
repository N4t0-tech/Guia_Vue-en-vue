<script setup lang="ts">
import CodeBlock from '../components/CodeBlock.vue'

const codeCreateApp = `import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')`

const codeComponent = `<script setup lang="ts">
import { ref } from 'vue'

const count = ref(0)
<\/script>

<template>
  <button @click="count++">
    Clics: {{ count }}
  </button>
</template>`
</script>

<template>
  <h1>Introducción a Vue.js</h1>

  <section>
    <h2>¿Qué es Vue?</h2>
    <p>
      Vue (pronunciado /vjuː/, como "view") es un <strong>framework progresivo</strong> de JavaScript
      para construir interfaces de usuario. A diferencia de otros frameworks monolíticos, Vue está
      diseñado para ser adoptable gradualmente — puedes usarlo para un pequeño widget en una página
      existente o para construir una SPA (Single Page Application) completa.
    </p>
  </section>

  <section>
    <h2>Características principales</h2>
    <ul>
      <li><strong>Reactividad</strong> — Los cambios en los datos se reflejan automáticamente en la UI.</li>
      <li><strong>Componentes</strong> — Cada parte de la interfaz es un componente reutilizable y encapsulado.</li>
      <li><strong>Virtual DOM</strong> — Actualizaciones eficientes del DOM real.</li>
      <li><strong>Composition API</strong> — Lógica reactiva organizada por funcionalidad (recomendada).</li>
      <li><strong>Single-File Components</strong> — Template, script y estilos en un solo archivo <code>.vue</code>.</li>
      <li><strong>Ecosistema oficial</strong> — Vue Router, Pinia, Devtools, Vite.</li>
    </ul>
  </section>

  <section>
    <h2>Estructura del proyecto</h2>
    <p>Así se ve un proyecto creado con <code>npm create vue@latest</code>:</p>

    <div class="card">
<pre><code>beautyskin-front/
├── index.html              &lt;-- Entry point HTML
├── vite.config.ts          &lt;-- Configuración de Vite
├── tsconfig.json           &lt;-- Configuración de TypeScript
├── public/
│   └── favicon.ico
├── src/
│   ├── main.ts             &lt;-- Punto de entrada JS
│   ├── App.vue             &lt;-- Componente raíz
│   ├── assets/             &lt;-- CSS, imágenes, etc.
│   ├── components/         &lt;-- Componentes reutilizables
│   ├── views/              &lt;-- Vistas/páginas
│   ├── router/             &lt;-- Configuración de rutas
│   ├── stores/             &lt;-- Estado global con Pinia
│   └── composables/        &lt;-- Lógica reactiva reutilizable
└── package.json</code></pre>
    </div>
  </section>

  <section>
    <h2>Cómo funciona Vue</h2>
    <p>Toda app de Vue comienza creando una instancia y montándola en un elemento HTML:</p>

    <CodeBlock :code="codeCreateApp" lang="typescript" title="main.ts" />

    <p>Luego, los componentes definen la UI usando tres secciones:</p>

    <CodeBlock :code="codeComponent" lang="vue" title="Componente básico" />
  </section>

  <section>
    <h2>¿Qué aprenderás en esta guía?</h2>
    <ol>
      <li><strong>Composition API</strong> — ref, reactive, computed, watch</li>
      <li><strong>Componentes</strong> — props, emits, slots</li>
      <li><strong>Directivas</strong> — v-if, v-for, v-model y más</li>
      <li><strong>Vue Router</strong> — navegación entre páginas</li>
      <li><strong>Pinia</strong> — estado global</li>
      <li><strong>Peticiones HTTP</strong> — consumir APIs</li>
      <li><strong>Ciclo de vida</strong> — hooks y montaje</li>
      <li><strong>Estilos</strong> — scoped, global, variables</li>
      <li><strong>Composables</strong> — lógica reutilizable</li>
      <li><strong>Formularios</strong> — binding y validación</li>
      <li><strong>Despliegue</strong> — build y publicación</li>
    </ol>
    <p class="next-hint">→ Usá el menú lateral para navegar entre capítulos.</p>
  </section>
</template>

<style scoped>
.next-hint {
  margin-top: 2rem;
  padding: 1rem;
  background: var(--card-bg);
  border-radius: 8px;
  border: 1px solid var(--border);
  text-align: center;
  font-style: italic;
}
</style>
