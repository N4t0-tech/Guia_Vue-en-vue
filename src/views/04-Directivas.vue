<script setup lang="ts">
import { ref } from 'vue'
import CodeBlock from '../components/CodeBlock.vue'

const codeIf = `<p v-if="loggedIn">Bienvenido, usuario</p>
<p v-else>Por favor, iniciá sesión</p>`

const codeFor = `<li v-for="(item, index) in items" :key="item.id">
  {{ index + 1 }}. {{ item.name }}
</li>`

const codeModel = `<input v-model="username" placeholder="Tu nombre" />
<p>Hola, {{ username }}</p>`

const codeShow = `<p v-show="visible">Este párrafo se oculta con display:none</p>`

const codeBind = `<img :src="imageUrl" :alt="imageAlt" />
<a :href="link" target="_blank">{{ label }}</a>`

const codeOn = `<button @click="handleClick">Clickeame</button>
<input @keyup.enter="submit" placeholder="Presioná Enter" />`

const loggedIn = ref(false)
const items = ref([
  { id: 1, name: 'TypeScript' },
  { id: 2, name: 'Vue' },
  { id: 3, name: 'Vite' }
])
const username = ref('')
const visible = ref(true)
const newItem = ref('')

function addItem() {
  if (newItem.value.trim()) {
    items.value.push({ id: Date.now(), name: newItem.value.trim() })
    newItem.value = ''
  }
}
</script>

<template>
  <h1>Directivas</h1>

  <p>
    Las directivas son atributos especiales con prefijo <code>v-</code> que aplican
    comportamientos reactivos al DOM. Son la forma declarativa de controlar el template.
  </p>

  <section>
    <h2><code>v-if</code> / <code>v-else</code> / <code>v-else-if</code></h2>
    <p>Renderizado condicional. El elemento solo existe en el DOM si la condición es verdadera.</p>

    <CodeBlock :code="codeIf" lang="html" title="v-if / v-else" />

    <div class="demo">
      <div class="demo-title">Pruébalo</div>
      <button class="primary" @click="loggedIn = !loggedIn">
        {{ loggedIn ? 'Cerrar sesión' : 'Iniciar sesión' }}
      </button>
      <p v-if="loggedIn" style="margin-top:0.5rem">✅ Bienvenido, estás logueado</p>
      <p v-else style="margin-top:0.5rem">🔒 Por favor, iniciá sesión</p>
    </div>
  </section>

  <section>
    <h2><code>v-for</code> — Listas</h2>
    <p>Iterá sobre arrays u objetos. Siempre usá <code>:key</code> para que Vue pueda identificar cada elemento.</p>

    <CodeBlock :code="codeFor" lang="html" title="v-for" />

    <div class="demo">
      <div class="demo-title">Pruébalo</div>
      <ul>
        <li v-for="(item, index) in items" :key="item.id">
          {{ index + 1 }}. {{ item.name }}
        </li>
      </ul>
      <div style="display:flex;gap:0.5rem;margin-top:0.5rem">
        <input v-model="newItem" @keyup.enter="addItem" placeholder="Nuevo item" />
        <button class="primary" @click="addItem">Agregar</button>
      </div>
    </div>
  </section>

  <section>
    <h2><code>v-model</code> — Two-way binding</h2>
    <p>Enlaza un estado reactivo con un input en ambos sentidos: cambio en JS → actualiza input, y viceversa.</p>

    <CodeBlock :code="codeModel" lang="html" title="v-model" />

    <div class="demo">
      <div class="demo-title">Pruébalo</div>
      <input v-model="username" placeholder="Tu nombre" />
      <p>Hola, <strong>{{ username || '...' }}</strong></p>
    </div>
  </section>

  <section>
    <h2><code>v-show</code> vs <code>v-if</code></h2>
    <p><code>v-show</code> siempre renderiza el elemento pero lo oculta con <code>display: none</code>. <code>v-if</code> lo crea/destruye.</p>

    <CodeBlock :code="codeShow" lang="html" title="v-show" />

    <div class="demo">
      <div class="demo-title">Pruébalo</div>
      <button class="secondary" @click="visible = !visible">Toggle v-show</button>
      <p v-show="visible" style="margin-top:0.5rem">Este texto se oculta con display:none</p>
    </div>
  </section>

  <section>
    <h2><code>v-bind</code> (<code>:</code>) — Binding de atributos</h2>

    <CodeBlock :code="codeBind" lang="html" title="v-bind" />
  </section>

  <section>
    <h2><code>v-on</code> (<code>@</code>) — Eventos</h2>

    <CodeBlock :code="codeOn" lang="html" title="v-on" />
  </section>
</template>
