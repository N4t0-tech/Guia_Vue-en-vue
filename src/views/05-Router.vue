<script setup lang="ts">
import CodeBlock from '../components/CodeBlock.vue'

const codeSetup = `import { createRouter, createWebHistory } from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router`

const codeTemplate = `<nav>
  <RouterLink to="/">Inicio</RouterLink>
  <RouterLink to="/about">Acerca de</RouterLink>
</nav>

<RouterView />`

const codeParams = `// router/index.ts
{ path: '/user/:id', component: UserProfile }

// UserProfile.vue
import { useRoute } from 'vue-router'
const route = useRoute()
console.log(route.params.id) // :id de la URL`

const codePush = `import { useRouter } from 'vue-router'
const router = useRouter()

function goToUser(id: number) {
  router.push({ name: 'User', params: { id } })
}`
</script>

<template>
  <h1>Vue Router</h1>

  <p>
    Vue Router es el enrutador oficial de Vue. Te permite mapear URLs a componentes,
    crear navegación entre páginas y manejar parámetros de ruta. Es esencial para SPAs.
  </p>

  <section>
    <h2>Instalación</h2>
    <p>
      Si creaste el proyecto con <code>npm create vue@latest</code>, podés seleccionar
      Vue Router durante la configuración. Si ya tenés el proyecto:
    </p>

    <CodeBlock code="npm install vue-router" lang="bash" title="Instalación" />
  </section>

  <section>
    <h2>Configuración básica</h2>
    <p>Creá un archivo de rutas e importalo en <code>main.ts</code>:</p>

    <CodeBlock :code="codeSetup" lang="typescript" title="src/router/index.ts" />

    <p>Luego, en <code>main.ts</code>, usá <code>app.use(router)</code>.</p>
  </section>

  <section>
    <h2><code>RouterView</code> y <code>RouterLink</code></h2>
    <p><code>RouterView</code> es el lugar donde se renderiza el componente de la ruta actual. <code>RouterLink</code> es un reemplazo de <code>&lt;a&gt;</code> que evita recargar la página.</p>

    <CodeBlock :code="codeTemplate" lang="html" title="App.vue" />
  </section>

  <section>
    <h2>Parámetros de ruta</h2>
    <p>Definí segmentos dinámicos con <code>:param</code> y accedelos con <code>useRoute()</code>.</p>

    <CodeBlock :code="codeParams" lang="typescript" title="Ruta con parámetros" />

    <div class="demo">
      <div class="demo-title">Ejemplo visual</div>
      <p>Imaginá la URL <code>/user/42</code>. Con la ruta <code>/user/:id</code>, <code>route.params.id</code> sería <strong>"42"</strong>.</p>
    </div>
  </section>

  <section>
    <h2>Navegación programática</h2>
    <p>Usá <code>router.push()</code> para navegar desde JavaScript (después de un submit, un timeout, etc.).</p>

    <CodeBlock :code="codePush" lang="typescript" title="Navegación programática" />
  </section>

  <section>
    <h2>Resumen de conceptos clave</h2>
    <table class="card" style="width:100%;border-collapse:collapse">
      <thead>
        <tr style="border-bottom:1px solid var(--border)">
          <th style="padding:0.5rem;text-align:left">Concepto</th>
          <th style="padding:0.5rem;text-align:left">Uso</th>
        </tr>
      </thead>
      <tbody>
        <tr style="border-bottom:1px solid var(--border)">
          <td style="padding:0.5rem"><code>RouterLink</code></td>
          <td style="padding:0.5rem">Navegación declarativa en el template</td>
        </tr>
        <tr style="border-bottom:1px solid var(--border)">
          <td style="padding:0.5rem"><code>RouterView</code></td>
          <td style="padding:0.5rem">Lugar donde se renderiza el componente de la ruta</td>
        </tr>
        <tr style="border-bottom:1px solid var(--border)">
          <td style="padding:0.5rem"><code>useRoute()</code></td>
          <td style="padding:0.5rem">Acceder a la ruta actual (params, query, etc.)</td>
        </tr>
        <tr>
          <td style="padding:0.5rem"><code>useRouter()</code></td>
          <td style="padding:0.5rem">Navegar programáticamente (push, replace, back)</td>
        </tr>
      </tbody>
    </table>
  </section>
</template>
