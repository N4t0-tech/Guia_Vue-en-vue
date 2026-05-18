<script setup lang="ts">
import { ref, reactive, computed, watch } from 'vue'
import CodeBlock from '../components/CodeBlock.vue'

const codeRef = `import { ref } from 'vue'

const count = ref(0)
console.log(count.value) // 0

count.value++ // Reactivo`

const codeReactive = `import { reactive } from 'vue'

const user = reactive({
  name: 'Ana',
  age: 25
})

user.age = 26 // Reactivo`

const codeComputed = `import { ref, computed } from 'vue'

const price = ref(100)
const tax = 0.21
const total = computed(() => price.value * (1 + tax))`

const codeWatch = `import { ref, watch } from 'vue'

const search = ref('')

watch(search, (newVal, oldVal) => {
  console.log('Cambió:', oldVal, '→', newVal)
})`

const count = ref(0)
const name = reactive({ first: '', last: '' })
const price = ref(100)
const total = computed(() => price.value * 1.21)
const search = ref('')

watch(search, (val) => {
  if (val) console.log('Buscando:', val)
})
</script>

<template>
  <h1>Composition API</h1>

  <p>
    La Composition API es la forma moderna de escribir lógica reactiva en Vue.
    En lugar de separar el código por opciones (data, methods, computed),
    agrupás la lógica por funcionalidad usando funciones como <code>ref</code>,
    <code>reactive</code>, <code>computed</code> y <code>watch</code>.
  </p>

  <section>
    <h2><code>ref()</code> — Valores reactivos primitivos</h2>
    <p><code>ref</code> envuelve un valor para hacerlo reactivo. Se accede con <code>.value</code> en JS, pero en el template se usa automáticamente.</p>

    <CodeBlock :code="codeRef" lang="typescript" title="ref básico" />

    <div class="demo">
      <div class="demo-title">Pruébalo</div>
      <p>Contador: <strong>{{ count }}</strong></p>
      <button class="primary" @click="count++">+1</button>
      <button class="secondary" @click="count = 0" style="margin-left:0.5rem">Reset</button>
    </div>
  </section>

  <section>
    <h2><code>reactive()</code> — Objetos reactivos</h2>
    <p>Similar a <code>ref</code> pero para objetos. No necesitás <code>.value</code> para acceder a las propiedades.</p>

    <CodeBlock :code="codeReactive" lang="typescript" title="reactive" />

    <div class="demo">
      <div class="demo-title">Pruébalo</div>
      <input v-model="name.first" placeholder="Nombre" />
      <input v-model="name.last" placeholder="Apellido" style="margin-left:0.5rem" />
      <p>Hola, <strong>{{ name.first }} {{ name.last }}</strong></p>
    </div>
  </section>

  <section>
    <h2><code>computed()</code> — Valores derivados</h2>
    <p>Un <code>computed</code> es un valor que depende de otros reactivos y se recalcula automáticamente cuando sus dependencias cambian.</p>

    <CodeBlock :code="codeComputed" lang="typescript" title="computed" />

    <div class="demo">
      <div class="demo-title">Pruébalo</div>
      <label>Precio base: <input type="number" v-model.number="price" min="0" /></label>
      <p>Precio + IVA (21%): <strong>{{ total.toFixed(2) }} €</strong></p>
    </div>
  </section>

  <section>
    <h2><code>watch()</code> — Observar cambios</h2>
    <p>Ejecutá una función cada vez que un valor reactivo cambia. Útil para efectos secundarios como peticiones o logs.</p>

    <CodeBlock :code="codeWatch" lang="typescript" title="watch" />

    <div class="demo">
      <div class="demo-title">Pruébalo (mirá la consola)</div>
      <input v-model="search" placeholder="Escribí algo..." />
    </div>
  </section>
</template>
