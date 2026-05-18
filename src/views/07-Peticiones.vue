<script setup lang="ts">
import { ref, onMounted } from 'vue'
import CodeBlock from '../components/CodeBlock.vue'

const codeFetch = `import { ref, onMounted } from 'vue'
import type { User } from './types'

const users = ref<User[]>([])
const loading = ref(true)
const error = ref<string | null>(null)

async function fetchUsers() {
  try {
    loading.value = true
    const res = await fetch('https://api.example.com/users')
    if (!res.ok) throw new Error('Error al cargar')
    users.value = await res.json()
  } catch (e) {
    error.value = (e as Error).message
  } finally {
    loading.value = false
  }
}

onMounted(fetchUsers)`

const codeComposable = `// composables/useFetch.ts
import { ref, onMounted } from 'vue'

export function useFetch<T>(url: string) {
  const data = ref<T | null>(null)
  const loading = ref(true)
  const error = ref<string | null>(null)

  async function execute() {
    try {
      loading.value = true
      error.value = null
      const res = await fetch(url)
      if (!res.ok) throw new Error(\`HTTP \${res.status}\`)
      data.value = await res.json()
    } catch (e) {
      error.value = (e as Error).message
    } finally {
      loading.value = false
    }
  }

  onMounted(execute)

  return { data, loading, error, refetch: execute }
}`

const codeAxios = `import axios from 'axios'

const { data } = await axios.get('/api/users')
const { data: created } = await axios.post('/api/users', { name: 'Ana' })
const { data: updated } = await axios.put('/api/users/1', { name: 'Ana M.' })
await axios.delete('/api/users/1')`

interface Post {
  userId: number
  id: number
  title: string
  body: string
}

const posts = ref<Post[]>([])
const loading = ref(false)
const error = ref<string | null>(null)

async function loadPosts() {
  loading.value = true
  error.value = null
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5')
    if (!res.ok) throw new Error(`Error ${res.status}`)
    posts.value = await res.json()
  } catch (e) {
    error.value = (e as Error).message
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <h1>Peticiones HTTP</h1>

  <p>
    Las aplicaciones web casi siempre necesitan consumir APIs externas.
    En Vue, podés usar la API nativa <code>fetch</code> o bibliotecas como
    <strong>axios</strong>. La lógica de peticiones suele ir en composables
    o directamente en los componentes.
  </p>

  <section>
    <h2>Con <code>fetch</code> nativo</h2>
    <p>Usá <code>fetch</code> dentro de un <code>onMounted</code> o en una función ejecutada por un evento:</p>

    <CodeBlock :code="codeFetch" lang="typescript" title="Fetch en un componente" />
  </section>

  <section>
    <h2>Con un Composable reutilizable</h2>
    <p>Creá un composable <code>useFetch</code> para no repetir el patrón loading/error/data en cada componente:</p>

    <CodeBlock :code="codeComposable" lang="typescript" title="composables/useFetch.ts" />
  </section>

  <section>
    <h2>Con Axios</h2>
    <p>Axios ofrece una API más cómoda con interceptors, cancelación de requests y mejor manejo de errores:</p>

    <CodeBlock :code="codeAxios" lang="typescript" title="Axios" />
  </section>

  <section>
    <h2>Demo interactiva</h2>

    <div class="demo">
      <div class="demo-title">Cargar posts desde JSONPlaceholder</div>
      <button class="primary" @click="loadPosts" :disabled="loading">
        {{ loading ? 'Cargando...' : 'Cargar posts' }}
      </button>

      <div v-if="error" style="margin-top:1rem;color:#e74c3c">Error: {{ error }}</div>

      <div v-if="posts.length" style="margin-top:1rem">
        <div v-for="post in posts" :key="post.id" class="card" style="margin-bottom:0.8rem">
          <h3 style="font-size:1rem;margin-bottom:0.3rem">{{ post.id }}. {{ post.title }}</h3>
          <p style="font-size:0.9rem;margin:0">{{ post.body }}</p>
        </div>
      </div>
    </div>
  </section>

  <section>
    <h2>Buenas prácticas</h2>
    <ul>
      <li>Siempre manejá los estados <strong>loading</strong>, <strong>error</strong> y <strong>data</strong></li>
      <li>Usá <code>try/catch/finally</code> para capturar errores y limpiar el estado de carga</li>
      <li>Creá composables para lógica de peticiones reutilizable</li>
      <li>Cancelá requests cuando el componente se desmonta (con <code>AbortController</code> o señal de Axios)</li>
      <li>Considera usar <strong>TanStack Query</strong> (antes Vue Query) para apps con mucha lógica de servidor</li>
    </ul>
  </section>
</template>
