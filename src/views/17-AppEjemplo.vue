<script setup lang="ts">
import { ref, computed } from 'vue'
import CodeBlock from '../components/CodeBlock.vue'

const codeStore = `// stores/tasks.ts
import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useTasksStore = defineStore('tasks', () => {
  const tasks = ref<Task[]>([])
  const loading = ref(false)

  const pendingTasks = computed(() =>
    tasks.value.filter(t => !t.completed)
  )

  async function fetchTasks() {
    loading.value = true
    const res = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
    tasks.value = await res.json()
    loading.value = false
  }

  function addTask(title: string) {
    tasks.value.push({
      id: Date.now(),
      title,
      completed: false
    })
  }

  function toggleTask(id: number) {
    const task = tasks.value.find(t => t.id === id)
    if (task) task.completed = !task.completed
  }

  function removeTask(id: number) {
    tasks.value = tasks.value.filter(t => t.id !== id)
  }

  return { tasks, loading, pendingTasks, fetchTasks, addTask, toggleTask, removeTask }
})`

const codeRouter = `// router/index.ts
{
  path: '/tasks',
  name: 'Tasks',
  component: () => import('../views/TasksPage.vue')
},
{
  path: '/tasks/:id',
  name: 'TaskDetail',
  component: () => import('../views/TaskDetail.vue')
}`

const codeApp = `// App.vue — layout
<template>
  <nav>
    <RouterLink to="/">Inicio</RouterLink>
    <RouterLink to="/tasks">Tareas</RouterLink>
  </nav>
  <RouterView />
</template>`

const codeTasksPage = `<script setup lang="ts">
import { onMounted } from 'vue'
import { useTasksStore } from '@/stores/tasks'
import TaskCard from '@/components/TaskCard.vue'

const store = useTasksStore()
const newTitle = ref('')

onMounted(() => { store.fetchTasks() })

function handleSubmit() {
  if (newTitle.value.trim()) {
    store.addTask(newTitle.value.trim())
    newTitle.value = ''
  }
}
<\/script>

<template>
  <h1>Mis Tareas ({{ store.pendingTasks.length }} pendientes)</h1>

  <form @submit.prevent="handleSubmit">
    <input v-model="newTitle" placeholder="Nueva tarea..." />
    <button type="submit">Agregar</button>
  </form>

  <p v-if="store.loading">Cargando...</p>

  <TaskCard
    v-for="task in store.tasks"
    :key="task.id"
    :task="task"
    @toggle="store.toggleTask(task.id)"
    @remove="store.removeTask(task.id)"
  />
</template>`

const codeTaskCard = `<script setup lang="ts">
defineProps<{ task: Task }>()
defineEmits<{ toggle: []; remove: [] }>()
<\/script>

<template>
  <div class="task-card" :class="{ done: task.completed }">
    <input type="checkbox" :checked="task.completed" @change="emit('toggle')" />
    <span>{{ task.title }}</span>
    <button @click="emit('remove')">✕</button>
  </div>
</template>`

// --- Live demo ---
import { onMounted } from 'vue'

interface Task {
  id: number
  title: string
  completed: boolean
}

const tasks = ref<Task[]>([])
const loading = ref(false)
const newTitle = ref('')
const error = ref('')

const pendingCount = computed(() => tasks.value.filter(t => !t.completed).length)

onMounted(async () => {
  loading.value = true
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=4')
    tasks.value = await res.json()
  } catch {
    error.value = 'Error al cargar tareas'
  } finally {
    loading.value = false
  }
})

function addTask() {
  if (!newTitle.value.trim()) return
  tasks.value.push({ id: Date.now(), title: newTitle.value.trim(), completed: false })
  newTitle.value = ''
}

function toggleTask(id: number) {
  const t = tasks.value.find(t => t.id === id)
  if (t) t.completed = !t.completed
}

function removeTask(id: number) {
  tasks.value = tasks.value.filter(t => t.id !== id)
}
</script>

<template>
  <h1>App de ejemplo</h1>

  <p>
    Este capítulo une todo lo aprendido en una mini-aplicación funcional:
    un <strong>gestor de tareas</strong> que usa Router, Pinia, peticiones HTTP,
    componentes, formularios y directivas.
  </p>

  <section>
    <h2>Arquitectura de la app</h2>

    <div class="card">
      <pre><code>src/
├── main.ts                # createApp + Pinia + Router
├── App.vue                # Layout: nav + RouterView
├── router/
│   └── index.ts           # /tasks, /tasks/:id
├── stores/
│   └── tasks.ts           # Estado global de tareas
├── components/
│   └── TaskCard.vue       # Componente reutilizable
└── views/
    ├── TasksPage.vue      # Lista de tareas + formulario
    └── TaskDetail.vue     # Detalle de una tarea</code></pre>
    </div>
  </section>

  <section>
    <h2>1. Store con Pinia</h2>
    <p>El store centraliza: estado, acciones asíncronas (fetch), acciones síncronas (add, toggle, remove) y un getter computado.</p>

    <CodeBlock :code="codeStore" lang="typescript" title="stores/tasks.ts" />
  </section>

  <section>
    <h2>2. Router</h2>
    <p>Dos rutas: lista de tareas y detalle (con parámetro <code>:id</code>).</p>

    <CodeBlock :code="codeRouter" lang="typescript" title="router/index.ts" />
  </section>

  <section>
    <h2>3. App.vue — Layout</h2>
    <p>La navegación global con <code>RouterLink</code> y el <code>RouterView</code> donde se renderiza cada página.</p>

    <CodeBlock :code="codeApp" lang="vue" title="App.vue" />
  </section>

  <section>
    <h2>4. TasksPage — Página principal</h2>
    <p>Usa el store, el composable <code>onMounted</code>, directivas (<code>v-for</code>, <code>v-if</code>, <code>v-model</code>) y el componente TaskCard.</p>

    <CodeBlock :code="codeTasksPage" lang="vue" title="Views/TasksPage.vue" />
  </section>

  <section>
    <h2>5. TaskCard — Componente</h2>
    <p>Componente reutilizable con <code>props</code> y <code>emits</code>. Muestra el checkbox, título y botón de eliminar.</p>

    <CodeBlock :code="codeTaskCard" lang="vue" title="components/TaskCard.vue" />
  </section>

  <section>
    <h2>Demo en vivo</h2>

    <div class="demo">
      <div class="demo-title">Gestor de tareas (integrador)</div>

      <div style="display:flex;align-items:center;gap:0.5rem;margin-bottom:0.5rem">
        <span class="badge">{{ pendingCount }}</span>
        <span style="font-size:0.85rem">pendientes</span>
      </div>

      <form @submit.prevent="addTask" style="display:flex;gap:0.5rem;margin-bottom:1rem">
        <input v-model="newTitle" placeholder="Nueva tarea..." style="flex:1" />
        <button class="primary" type="submit">Agregar</button>
      </form>

      <p v-if="loading" style="font-size:0.85rem">&gt; Cargando tareas...</p>
      <p v-if="error" style="color:var(--accent);font-size:0.85rem">! {{ error }}</p>

      <TransitionGroup name="list" tag="div" style="display:flex;flex-direction:column;gap:0.5rem">
        <div
          v-for="task in tasks"
          :key="task.id"
          class="card"
          style="display:flex;align-items:center;gap:0.8rem;padding:0.6rem 1rem;margin-bottom:0"
          :style="{ opacity: task.completed ? 0.5 : 1 }"
        >
          <input
            type="checkbox"
            :checked="task.completed"
            @change="toggleTask(task.id)"
            style="width:18px;height:18px;cursor:pointer"
          />
          <span style="flex:1;font-size:0.9rem;text-decoration: task.completed ? 'line-through' : 'none'">
            {{ task.title }}
          </span>
          <button class="secondary" @click="removeTask(task.id)" style="padding:0.2rem 0.6rem;font-size:0.8rem">✕</button>
        </div>
      </TransitionGroup>

      <div v-if="!tasks.length && !loading" style="margin-top:1rem;text-align:center;opacity:0.6">
        <p style="margin:0">No hay tareas. Agregá una nueva.</p>
      </div>
    </div>
  </section>

  <section>
    <h2>Lo que integra este ejemplo</h2>
    <div class="card">
      <ul>
        <li><strong>Composition API</strong> — ref, computed, onMounted</li>
        <li><strong>Pinia</strong> — store con estado, getters y acciones</li>
        <li><strong>Vue Router</strong> — navegación entre páginas</li>
        <li><strong>Componentes</strong> — props, emits, reutilización</li>
        <li><strong>Peticiones HTTP</strong> — fetch con loading/error</li>
        <li><strong>Directivas</strong> — v-for, v-if, v-model, :key</li>
        <li><strong>Formularios</strong> — submit prevent, validación básica</li>
        <li><strong>Transiciones</strong> — TransitionGroup para animar la lista</li>
      </ul>
    </div>
  </section>
</template>

<style scoped>
.list-enter-active,
.list-leave-active {
  transition: all 0.3s ease;
}
.list-enter-from {
  opacity: 0;
  transform: translateX(20px);
}
.list-leave-to {
  opacity: 0;
  transform: translateX(-20px);
}
</style>
