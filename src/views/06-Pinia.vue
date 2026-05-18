<script setup lang="ts">
import CodeBlock from '../components/CodeBlock.vue'
import { useCounterStore } from '../stores/counter'

const store = useCounterStore()

const codeStore = `import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  const double = computed(() => count.value * 2)

  function increment() { count.value++ }
  function decrement() { count.value-- }
  function reset() { count.value = 0 }

  return { count, double, increment, decrement, reset }
})`

const codeComponent = `import { useCounterStore } from './stores/counter'

const store = useCounterStore()

// En el template:
// {{ store.count }}
// {{ store.double }}
// <button @click="store.increment()">+</button>`

const codeSetup = `import { createPinia } from 'pinia'

const app = createApp(App)
app.use(createPinia())
app.mount('#app')`
</script>

<template>
  <h1>Pinia — Estado global</h1>

  <p>
    Pinia es la biblioteca oficial de estado global para Vue. Reemplaza a Vuex con una API
    más simple y con soporte nativo de TypeScript. Te permite compartir estado entre cualquier
    componente de la app sin pasarlo por props.
  </p>

  <section>
    <h2>Instalación y configuración</h2>

    <CodeBlock code="npm install pinia" lang="bash" title="Instalación" />
    <CodeBlock :code="codeSetup" lang="typescript" title="main.ts" />
  </section>

  <section>
    <h2>Crear un Store</h2>
    <p>Un store se define con <code>defineStore</code>. Usá la Composition API dentro del store para tener estado, getters y acciones.</p>

    <CodeBlock :code="codeStore" lang="typescript" title="stores/counter.ts" />

    <CodeBlock :code="codeComponent" lang="vue" title="Uso en un componente" />
  </section>

  <section>
    <h2>Demo interactiva</h2>
    <p>Este contador está sincronizado globalmente. Abrí esta misma página en otra pestaña y verás el mismo valor compartido (Pinia lo mantiene en memoria mientras la app viva).</p>

    <div class="demo">
      <div class="demo-title">Contador global con Pinia</div>

      <div style="display:flex;gap:1rem;align-items:center;flex-wrap:wrap">
        <button class="primary" @click="store.decrement()">−</button>
        <span style="font-size:2rem;font-weight:700;min-width:3rem;text-align:center">{{ store.count }}</span>
        <button class="primary" @click="store.increment()">+</button>
        <button class="secondary" @click="store.reset()">Reset</button>
      </div>

      <p style="margin-top:0.5rem">El doble es: <strong>{{ store.double }}</strong></p>
    </div>

    <div class="demo">
      <div class="demo-title">Mismo store, otro componente</div>
      <p>Valor actual: <strong>{{ store.count }}</strong></p>
      <button class="primary" @click="store.increment()">+1 desde aquí</button>
    </div>
  </section>

  <section>
    <h2>¿Cuándo usar Pinia?</h2>
    <ul>
      <li>Estado compartido entre múltiples componentes no relacionados</li>
      <li>Datos del usuario autenticado</li>
      <li>Carrito de compras</li>
      <li>Preferencias de la app</li>
      <li>Cache de datos del servidor</li>
    </ul>
    <p>Si el estado solo lo usa un componente o una familia cercana, un <code>ref</code> local o un composable son suficientes.</p>
  </section>
</template>
