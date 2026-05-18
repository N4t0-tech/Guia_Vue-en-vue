<script setup lang="ts">
import CodeBlock from '../components/CodeBlock.vue'
import { useMouse } from '@vueuse/core'
import { useCounter } from '../composables/useCounter'

const { x, y } = useMouse()
const { count, double, increment, decrement, reset } = useCounter(10)

const codeComposable = `// composables/useCounter.ts
import { ref, computed } from 'vue'

export function useCounter(initialValue = 0) {
  const count = ref(initialValue)
  const double = computed(() => count.value * 2)

  function increment() { count.value++ }
  function decrement() { count.value-- }
  function reset() { count.value = initialValue }

  return { count, double, increment, decrement, reset }
}`

const codeUsage = `// Componente.vue
import { useCounter } from '../composables/useCounter'

const { count, double, increment } = useCounter(10)

// Template:
// {{ count }} — {{ double }}
// <button @click="increment">+</button>`

const codeMouse = `import { useMouse } from '@vueuse/core'

const { x, y } = useMouse()

// Template:
// Mouse: {{ x }}, {{ y }}`

const codeGuidelines = `// ✅ HACER: composables específicos
export function useUserAuth() { ... }

// ✅ HACER: aceptar parámetros reactivos
export function useSearch(query: Ref<string>) { ... }

// ✅ HACER: devolver refs para mantener reactividad
return { result, loading, error }

// ❌ NO HACER: lógica no reactiva
// ❌ NO HACER: efectos secundarios sin cleanup`
</script>

<template>
  <h1>Composables</h1>

  <p>
    Un <strong>composable</strong> es una función que usa la Composition API para
    encapsular lógica reactiva reutilizable. Es la forma de compartir lógica entre
    componentes sin mezclar responsabilidades.
  </p>

  <section>
    <h2>Crear un composable</h2>
    <p>La convención es nombrar los archivos con prefijo <code>use</code>. Pueden aceptar parámetros, tener estado interno y devolver cualquier valor reactivo.</p>

    <CodeBlock :code="codeComposable" lang="typescript" title="composables/useCounter.ts" />

    <CodeBlock :code="codeUsage" lang="vue" title="Uso en un componente" />

    <div class="demo">
      <div class="demo-title">Pruébalo — useCounter</div>
      <div style="display:flex;gap:0.5rem;align-items:center;flex-wrap:wrap">
        <button class="primary" @click="decrement">−</button>
        <span style="font-size:1.5rem;font-weight:700;min-width:2rem;text-align:center">{{ count }}</span>
        <button class="primary" @click="increment">+</button>
        <button class="secondary" @click="reset">Reset</button>
      </div>
      <p>Doble: <strong>{{ double }}</strong></p>
    </div>
  </section>

  <section>
    <h2>Composables externos — VueUse</h2>
    <p>
      <a href="https://vueuse.org" target="_blank" rel="noopener">VueUse</a> es una colección
      de cientos de composables listos para usar. El más famoso es <code>useMouse</code>,
      que rastrea la posición del mouse en tiempo real.
    </p>

    <CodeBlock :code="codeMouse" lang="typescript" title="useMouse de VueUse" />

    <div class="demo">
      <div class="demo-title">useMouse en vivo</div>
      <p>Posición del mouse: <strong>{{ x }}px</strong>, <strong>{{ y }}px</strong></p>
    </div>
  </section>

  <section>
    <h2>Buenas prácticas</h2>

    <CodeBlock :code="codeGuidelines" lang="typescript" title="Guías para composables" />

    <p>Los composables son ideales para:</p>
    <ul>
      <li>Peticiones HTTP (useFetch)</li>
      <li>Autenticación (useAuth, useUser)</li>
      <li>Formularios (useForm, useValidation)</li>
      <li>Eventos del navegador (useMouse, useScroll, useMediaQuery)</li>
      <li>Timers y polling (useInterval, useTimeout)</li>
      <li>Almacenamiento local (useLocalStorage)</li>
    </ul>
  </section>
</template>
