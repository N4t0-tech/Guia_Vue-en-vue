import{t as e}from"./CodeBlock-DSd9V9-T.js";import{d as t,g as n,h as r,p as i,t as a,v as o,w as s,y as c}from"./index-DuKBGh4e.js";var l=`import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')`,u=`<script setup lang="ts">
import { ref } from 'vue'

const count = ref(0)
<\/script>

<template>
  <button @click="count++">
    Clics: {{ count }}
  </button>
</template>`,d=a(c({__name:`01-Introduccion`,setup(a){return(a,c)=>(s(),r(t,null,[c[3]||=n(`<h1 data-v-18c4e4d6>Introducción a Vue.js</h1><section data-v-18c4e4d6><h2 data-v-18c4e4d6>¿Qué es Vue?</h2><p data-v-18c4e4d6> Vue (pronunciado /vjuː/, como &quot;view&quot;) es un <strong data-v-18c4e4d6>framework progresivo</strong> de JavaScript para construir interfaces de usuario. A diferencia de otros frameworks monolíticos, Vue está diseñado para ser adoptable gradualmente — puedes usarlo para un pequeño widget en una página existente o para construir una SPA (Single Page Application) completa. </p></section><section data-v-18c4e4d6><h2 data-v-18c4e4d6>Características principales</h2><ul data-v-18c4e4d6><li data-v-18c4e4d6><strong data-v-18c4e4d6>Reactividad</strong> — Los cambios en los datos se reflejan automáticamente en la UI.</li><li data-v-18c4e4d6><strong data-v-18c4e4d6>Componentes</strong> — Cada parte de la interfaz es un componente reutilizable y encapsulado.</li><li data-v-18c4e4d6><strong data-v-18c4e4d6>Virtual DOM</strong> — Actualizaciones eficientes del DOM real.</li><li data-v-18c4e4d6><strong data-v-18c4e4d6>Composition API</strong> — Lógica reactiva organizada por funcionalidad (recomendada).</li><li data-v-18c4e4d6><strong data-v-18c4e4d6>Single-File Components</strong> — Template, script y estilos en un solo archivo <code data-v-18c4e4d6>.vue</code>.</li><li data-v-18c4e4d6><strong data-v-18c4e4d6>Ecosistema oficial</strong> — Vue Router, Pinia, Devtools, Vite.</li></ul></section><section data-v-18c4e4d6><h2 data-v-18c4e4d6>Estructura del proyecto</h2><p data-v-18c4e4d6>Así se ve un proyecto creado con <code data-v-18c4e4d6>npm create vue@latest</code>:</p><div class="card" data-v-18c4e4d6><pre data-v-18c4e4d6><code data-v-18c4e4d6>beautyskin-front/
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
└── package.json</code></pre></div></section>`,4),i(`section`,null,[c[0]||=i(`h2`,null,`Cómo funciona Vue`,-1),c[1]||=i(`p`,null,`Toda app de Vue comienza creando una instancia y montándola en un elemento HTML:`,-1),o(e,{code:l,lang:`typescript`,title:`main.ts`}),c[2]||=i(`p`,null,`Luego, los componentes definen la UI usando tres secciones:`,-1),o(e,{code:u,lang:`vue`,title:`Componente básico`})]),c[4]||=n(`<section data-v-18c4e4d6><h2 data-v-18c4e4d6>¿Qué aprenderás en esta guía?</h2><ol data-v-18c4e4d6><li data-v-18c4e4d6><strong data-v-18c4e4d6>Composition API</strong> — ref, reactive, computed, watch</li><li data-v-18c4e4d6><strong data-v-18c4e4d6>Componentes</strong> — props, emits, slots</li><li data-v-18c4e4d6><strong data-v-18c4e4d6>Directivas</strong> — v-if, v-for, v-model y más</li><li data-v-18c4e4d6><strong data-v-18c4e4d6>Vue Router</strong> — navegación entre páginas</li><li data-v-18c4e4d6><strong data-v-18c4e4d6>Pinia</strong> — estado global</li><li data-v-18c4e4d6><strong data-v-18c4e4d6>Peticiones HTTP</strong> — consumir APIs</li><li data-v-18c4e4d6><strong data-v-18c4e4d6>Ciclo de vida</strong> — hooks y montaje</li><li data-v-18c4e4d6><strong data-v-18c4e4d6>Estilos</strong> — scoped, global, variables</li><li data-v-18c4e4d6><strong data-v-18c4e4d6>Composables</strong> — lógica reutilizable</li><li data-v-18c4e4d6><strong data-v-18c4e4d6>Formularios</strong> — binding y validación</li><li data-v-18c4e4d6><strong data-v-18c4e4d6>Despliegue</strong> — build y publicación</li></ol><p class="next-hint" data-v-18c4e4d6>→ Usá el menú lateral para navegar entre capítulos.</p></section>`,1)],64))}}),[[`__scopeId`,`data-v-18c4e4d6`]]);export{d as default};