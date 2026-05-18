<script setup lang="ts">
import { ref, onMounted, onUnmounted, onUpdated, onBeforeMount } from 'vue'
import CodeBlock from '../components/CodeBlock.vue'

const codeHooks = `import { onMounted, onUnmounted, onUpdated } from 'vue'

onMounted(() => {
  console.log('Componente montado')
  // API calls, event listeners, timers
})

onUnmounted(() => {
  console.log('Componente desmontado')
  // Cleanup: remover listeners, cancelar timers
})

onUpdated(() => {
  console.log('Componente actualizado')
  // DOM actualizado
})`



// Demo: Timer que cuenta los segundos de vida del componente
const seconds = ref(0)
let intervalId: ReturnType<typeof setInterval>

onMounted(() => {
  intervalId = setInterval(() => {
    seconds.value++
  }, 1000)
})

onUnmounted(() => {
  clearInterval(intervalId)
})

// Componente condicional
const showTimer = ref(true)

// Lifecycle log
const logs = ref<string[]>([])

onMounted(() => {
  logs.value.push('⏺ onMounted — componente listo')
})

onUpdated(() => {
  logs.value.push('🔄 onUpdated — DOM actualizado')
})
</script>

<template>
  <h1>Ciclo de vida</h1>

  <p>
    Cada componente Vue pasa por una serie de etapas desde que se crea hasta que se destruye.
    Los <strong>lifecycle hooks</strong> te permiten ejecutar código en momentos específicos:
    al montarse, al actualizarse o al desmontarse.
  </p>

  <section>
    <h2>Hooks principales</h2>

    <div class="card">
<pre><code>onBeforeMount → onMounted → (cambios) → onUpdated → (desmontaje) → onUnmounted
        ↑
  setup()</code></pre>
    </div>

    <ul>
      <li><code>onBeforeMount</code> — justo antes de renderizar el componente</li>
      <li><code>onMounted</code> — el componente ya está en el DOM</li>
      <li><code>onUpdated</code> — el DOM se actualizó por cambios reactivos</li>
      <li><code>onUnmounted</code> — el componente se eliminó del DOM (cleanup)</li>
    </ul>

    <CodeBlock :code="codeHooks" lang="typescript" title="Lifecycle hooks" />
  </section>

  <section>
    <h2>Demo: Timer con ciclo de vida</h2>
    <p>
      Este timer usa <code>onMounted</code> para iniciar un contador y
      <code>onUnmounted</code> para limpiarlo cuando el componente se oculta.
      Sin el cleanup, el intervalo seguiría ejecutándose en memoria incluso
      después de que el componente desaparezca.
    </p>

    <div class="demo">
      <div class="demo-title">Ciclo de vida en acción</div>

      <button class="primary" @click="showTimer = !showTimer">
        {{ showTimer ? 'Ocultar timer' : 'Mostrar timer' }}
      </button>

      <div v-if="showTimer" class="card" style="margin-top:1rem">
        <p style="font-size:2rem;font-weight:700;text-align:center">
          {{ seconds }}s
        </p>
        <p style="text-align:center;font-size:0.85rem;opacity:0.6">
          Segundos desde que el componente se montó
        </p>
      </div>

      <div v-if="!showTimer" style="margin-top:1rem">
        <p>⏹ Timer detenido y cleanup ejecutado (intervalo cancelado)</p>
      </div>
    </div>
  </section>

  <section>
    <h2>Resumen de uso común</h2>
    <table class="card" style="width:100%;border-collapse:collapse">
      <thead>
        <tr style="border-bottom:1px solid var(--border)">
          <th style="padding:0.5rem;text-align:left">Hook</th>
          <th style="padding:0.5rem;text-align:left">Cuándo usarlo</th>
        </tr>
      </thead>
      <tbody>
        <tr style="border-bottom:1px solid var(--border)">
          <td style="padding:0.5rem"><code>onMounted</code></td>
          <td style="padding:0.5rem">Fetch de datos, event listeners, timers, integración con librerías externas</td>
        </tr>
        <tr>
          <td style="padding:0.5rem"><code>onUnmounted</code></td>
          <td style="padding:0.5rem">Limpiar timers, remover event listeners, cancelar subscriptions</td>
        </tr>
      </tbody>
    </table>
  </section>
</template>
