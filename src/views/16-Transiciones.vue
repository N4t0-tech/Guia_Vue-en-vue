<script setup lang="ts">
import { ref } from 'vue'
import CodeBlock from '../components/CodeBlock.vue'

const codeFade = `.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}`

const codeTransition = `<button @click="show = !show">Toggle</button>

<Transition name="fade">
  <p v-if="show">Hola Vue!</p>
</Transition>`

const codeSlide = `.slide-enter-active,
.slide-leave-active {
  transition: all 0.3s ease;
}
.slide-enter-from {
  transform: translateX(20px);
  opacity: 0;
}
.slide-leave-to {
  transform: translateX(-20px);
  opacity: 0;
}`

const codeMode = `<Transition name="slide" mode="out-in">
  <p :key="page">{{ page }}</p>
</Transition>`

const codeGroup = `.list-enter-active,
.list-leave-active {
  transition: all 0.4s ease;
}
.list-enter-from {
  opacity: 0;
  transform: translateX(30px);
}
.list-leave-to {
  opacity: 0;
  transform: translateX(-30px);
}`

const codeTransitionGroup = `<TransitionGroup name="list" tag="ul">
  <li v-for="item in items" :key="item.id">
    {{ item.text }}
  </li>
</TransitionGroup>`

const show = ref(true)
const page = ref('Página 1')
const items = ref([
  { id: 1, text: 'TypeScript' },
  { id: 2, text: 'Vue 3' },
  { id: 3, text: 'Vite' }
])
let nextId = 4

const animType = ref<'fade' | 'slide'>('fade')

function addItem() {
  items.value.push({ id: nextId++, text: `Item ${nextId - 1}` })
}

function removeItem() {
  if (items.value.length > 0) {
    items.value = items.value.slice(0, -1)
  }
}

function swapPage() {
  page.value = page.value === 'Página 1' ? 'Página 2' : 'Página 1'
}
</script>

<template>
  <h1>Transiciones y animaciones</h1>

  <p>
    Vue ofrece dos componentes para animar elementos: <code>&lt;Transition&gt;</code>
    para un solo elemento y <code>&lt;TransitionGroup&gt;</code> para listas.
    Solo definís clases CSS y Vue aplica/remueve los nombres en el momento exacto.
  </p>

  <section>
    <h2>&lt;Transition&gt; — Elemento individual</h2>
    <p>Animá la aparición/desaparición de un elemento con <code>v-if</code>/<code>v-show</code>.</p>

    <CodeBlock :code="codeFade" lang="css" title="CSS: fade" />
    <CodeBlock :code="codeTransition" lang="html" title="Template" />

    <div class="demo">
      <div class="demo-title">Pruébalo</div>
      <div style="display:flex;gap:0.5rem;margin-bottom:1rem">
        <button class="primary" @click="show = !show">{{ show ? 'Ocultar' : 'Mostrar' }}</button>
        <button class="secondary" @click="animType = animType === 'fade' ? 'slide' : 'fade'">
          Modo: {{ animType }}
        </button>
      </div>

      <Transition :name="animType">
        <div v-if="show" class="card" style="text-align:center;font-size:1.2rem;margin-bottom:0">
          <p style="margin:0">{{ animType === 'fade' ? '✨ Fade' : '➡ Slide' }}</p>
        </div>
      </Transition>
    </div>
  </section>

  <section>
    <h2>Modo <code>out-in</code></h2>
    <p>Cuando un elemento reemplaza a otro, usá <code>mode="out-in"</code> para que el primero salga antes de que entre el segundo.</p>

    <CodeBlock :code="codeSlide" lang="css" title="CSS: slide" />
    <CodeBlock :code="codeMode" lang="html" title="Template con mode='out-in'" />

    <div class="demo">
      <div class="demo-title">Pruébalo</div>
      <button class="primary" @click="swapPage" style="margin-bottom:1rem">Cambiar página</button>
      <Transition name="slide" mode="out-in">
        <div class="card" :key="page" style="text-align:center;margin-bottom:0">
          <p style="margin:0;font-size:1.2rem">{{ page }}</p>
        </div>
      </Transition>
    </div>
  </section>

  <section>
    <h2>&lt;TransitionGroup&gt; — Listas animadas</h2>
    <p>Animá la entrada/salida de items en un <code>v-for</code>. <code>TransitionGroup</code> renderiza un contenedor (<code>tag="ul"</code>) y anima cada hijo.</p>

    <CodeBlock :code="codeGroup" lang="css" title="CSS: lista" />
    <CodeBlock :code="codeTransitionGroup" lang="html" title="TransitionGroup" />

    <div class="demo">
      <div class="demo-title">Pruébalo</div>
      <div style="display:flex;gap:0.5rem;margin-bottom:1rem">
        <button class="primary" @click="addItem">Agregar</button>
        <button class="secondary" @click="removeItem">Eliminar último</button>
      </div>
      <TransitionGroup name="list" tag="ul" style="list-style:none;padding:0">
        <li v-for="item in items" :key="item.id"
          class="card"
          style="margin-bottom:0.5rem;padding:0.8rem 1rem;display:flex;align-items:center;gap:0.5rem"
        >
          <span class="badge">{{ item.id }}</span>
          {{ item.text }}
        </li>
      </TransitionGroup>
    </div>
  </section>

  <section>
    <h2>Resumen de clases CSS</h2>
    <p>Vue agrega estas clases según el <code>name</code> que le pongas al Transition:</p>
    <div class="card">
      <pre><code>name-enter-from        # Estado inicial al entrar
name-enter-active      # Durante la entrada (la transición)
name-enter-to          # Estado final al entrar
name-leave-from        # Estado inicial al salir
name-leave-active      # Durante la salida
name-leave-to          # Estado final al salir</code></pre>
    </div>
  </section>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.slide-enter-active,
.slide-leave-active {
  transition: all 0.3s ease;
}
.slide-enter-from {
  transform: translateX(20px);
  opacity: 0;
}
.slide-leave-to {
  transform: translateX(-20px);
  opacity: 0;
}

.list-enter-active,
.list-leave-active {
  transition: all 0.4s ease;
}
.list-enter-from {
  opacity: 0;
  transform: translateX(30px);
}
.list-leave-to {
  opacity: 0;
  transform: translateX(-30px);
}
</style>
