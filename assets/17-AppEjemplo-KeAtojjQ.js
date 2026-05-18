import{t as e}from"./CodeBlock-DpXj1NaB.js";import{A as t,E as n,L as r,M as i,R as a,_ as o,d as s,f as c,g as l,h as u,i as d,k as f,m as p,p as m,s as h,t as g,u as _,v,w as y,x as b,y as x}from"./index-OKjGQV9p.js";var S={class:`demo`},C={style:{display:`flex`,"align-items":`center`,gap:`0.5rem`,"margin-bottom":`0.5rem`}},w={class:`badge`},T={key:0,style:{"font-size":`0.85rem`}},E={key:1,style:{color:`var(--accent)`,"font-size":`0.85rem`}},D=[`checked`,`onChange`],O={style:{flex:`1`,"font-size":`0.9rem`,"text-decoration":`task.completed ? 'line-through' : 'none'`}},k=[`onClick`],A={key:2,style:{"margin-top":`1rem`,"text-align":`center`,opacity:`0.6`}},j=`// stores/tasks.ts
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
})`,M=`// router/index.ts
{
  path: '/tasks',
  name: 'Tasks',
  component: () => import('../views/TasksPage.vue')
},
{
  path: '/tasks/:id',
  name: 'TaskDetail',
  component: () => import('../views/TaskDetail.vue')
}`,N=`// App.vue — layout
<template>
  <nav>
    <RouterLink to="/">Inicio</RouterLink>
    <RouterLink to="/tasks">Tareas</RouterLink>
  </nav>
  <RouterView />
</template>`,P=`<script setup lang="ts">
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
</template>`,F=`<script setup lang="ts">
defineProps<{ task: Task }>()
defineEmits<{ toggle: []; remove: [] }>()
<\/script>

<template>
  <div class="task-card" :class="{ done: task.completed }">
    <input type="checkbox" :checked="task.completed" @change="emit('toggle')" />
    <span>{{ task.title }}</span>
    <button @click="emit('remove')">✕</button>
  </div>
</template>`,I=g(x({__name:`17-AppEjemplo`,setup(g){let x=i([]),I=i(!1),L=i(``),R=i(``),z=c(()=>x.value.filter(e=>!e.completed).length);b(async()=>{I.value=!0;try{x.value=await(await fetch(`https://jsonplaceholder.typicode.com/todos?_limit=4`)).json()}catch{R.value=`Error al cargar tareas`}finally{I.value=!1}});function B(){L.value.trim()&&(x.value.push({id:Date.now(),title:L.value.trim(),completed:!1}),L.value=``)}function V(e){let t=x.value.find(t=>t.id===e);t&&(t.completed=!t.completed)}function H(e){x.value=x.value.filter(t=>t.id!==e)}return(i,c)=>(y(),u(s,null,[c[16]||=m(`h1`,null,`App de ejemplo`,-1),c[17]||=m(`p`,null,[o(` Este capítulo une todo lo aprendido en una mini-aplicación funcional: un `),m(`strong`,null,`gestor de tareas`),o(` que usa Router, Pinia, peticiones HTTP, componentes, formularios y directivas. `)],-1),c[18]||=m(`section`,null,[m(`h2`,null,`Arquitectura de la app`),m(`div`,{class:`card`},[m(`pre`,null,[m(`code`,null,`src/
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
    └── TaskDetail.vue     # Detalle de una tarea`)])])],-1),m(`section`,null,[c[1]||=m(`h2`,null,`1. Store con Pinia`,-1),c[2]||=m(`p`,null,`El store centraliza: estado, acciones asíncronas (fetch), acciones síncronas (add, toggle, remove) y un getter computado.`,-1),v(e,{code:j,lang:`typescript`,title:`stores/tasks.ts`})]),m(`section`,null,[c[3]||=m(`h2`,null,`2. Router`,-1),c[4]||=m(`p`,null,[o(`Dos rutas: lista de tareas y detalle (con parámetro `),m(`code`,null,`:id`),o(`).`)],-1),v(e,{code:M,lang:`typescript`,title:`router/index.ts`})]),m(`section`,null,[c[5]||=m(`h2`,null,`3. App.vue — Layout`,-1),c[6]||=m(`p`,null,[o(`La navegación global con `),m(`code`,null,`RouterLink`),o(` y el `),m(`code`,null,`RouterView`),o(` donde se renderiza cada página.`)],-1),v(e,{code:N,lang:`vue`,title:`App.vue`})]),m(`section`,null,[c[7]||=m(`h2`,null,`4. TasksPage — Página principal`,-1),c[8]||=m(`p`,null,[o(`Usa el store, el composable `),m(`code`,null,`onMounted`),o(`, directivas (`),m(`code`,null,`v-for`),o(`, `),m(`code`,null,`v-if`),o(`, `),m(`code`,null,`v-model`),o(`) y el componente TaskCard.`)],-1),v(e,{code:P,lang:`vue`,title:`Views/TasksPage.vue`})]),m(`section`,null,[c[9]||=m(`h2`,null,`5. TaskCard — Componente`,-1),c[10]||=m(`p`,null,[o(`Componente reutilizable con `),m(`code`,null,`props`),o(` y `),m(`code`,null,`emits`),o(`. Muestra el checkbox, título y botón de eliminar.`)],-1),v(e,{code:F,lang:`vue`,title:`components/TaskCard.vue`})]),m(`section`,null,[c[15]||=m(`h2`,null,`Demo en vivo`,-1),m(`div`,S,[c[14]||=m(`div`,{class:`demo-title`},`Gestor de tareas (integrador)`,-1),m(`div`,C,[m(`span`,w,a(z.value),1),c[11]||=m(`span`,{style:{"font-size":`0.85rem`}},`pendientes`,-1)]),m(`form`,{onSubmit:_(B,[`prevent`]),style:{display:`flex`,gap:`0.5rem`,"margin-bottom":`1rem`}},[t(m(`input`,{"onUpdate:modelValue":c[0]||=e=>L.value=e,placeholder:`Nueva tarea...`,style:{flex:`1`}},null,512),[[h,L.value]]),c[12]||=m(`button`,{class:`primary`,type:`submit`},`Agregar`,-1)],32),I.value?(y(),u(`p`,T,`> Cargando tareas...`)):p(``,!0),R.value?(y(),u(`p`,E,`! `+a(R.value),1)):p(``,!0),v(d,{name:`list`,tag:`div`,style:{display:`flex`,"flex-direction":`column`,gap:`0.5rem`}},{default:f(()=>[(y(!0),u(s,null,n(x.value,e=>(y(),u(`div`,{key:e.id,class:`card`,style:r([{display:`flex`,"align-items":`center`,gap:`0.8rem`,padding:`0.6rem 1rem`,"margin-bottom":`0`},{opacity:e.completed?.5:1}])},[m(`input`,{type:`checkbox`,checked:e.completed,onChange:t=>V(e.id),style:{width:`18px`,height:`18px`,cursor:`pointer`}},null,40,D),m(`span`,O,a(e.title),1),m(`button`,{class:`secondary`,onClick:t=>H(e.id),style:{padding:`0.2rem 0.6rem`,"font-size":`0.8rem`}},`✕`,8,k)],4))),128))]),_:1}),!x.value.length&&!I.value?(y(),u(`div`,A,[...c[13]||=[m(`p`,{style:{margin:`0`}},`No hay tareas. Agregá una nueva.`,-1)]])):p(``,!0)])]),c[19]||=l(`<section data-v-a03d322e><h2 data-v-a03d322e>Lo que integra este ejemplo</h2><div class="card" data-v-a03d322e><ul data-v-a03d322e><li data-v-a03d322e><strong data-v-a03d322e>Composition API</strong> — ref, computed, onMounted</li><li data-v-a03d322e><strong data-v-a03d322e>Pinia</strong> — store con estado, getters y acciones</li><li data-v-a03d322e><strong data-v-a03d322e>Vue Router</strong> — navegación entre páginas</li><li data-v-a03d322e><strong data-v-a03d322e>Componentes</strong> — props, emits, reutilización</li><li data-v-a03d322e><strong data-v-a03d322e>Peticiones HTTP</strong> — fetch con loading/error</li><li data-v-a03d322e><strong data-v-a03d322e>Directivas</strong> — v-for, v-if, v-model, :key</li><li data-v-a03d322e><strong data-v-a03d322e>Formularios</strong> — submit prevent, validación básica</li><li data-v-a03d322e><strong data-v-a03d322e>Transiciones</strong> — TransitionGroup para animar la lista</li></ul></div></section>`,1)],64))}}),[[`__scopeId`,`data-v-a03d322e`]]);export{I as default};