import{t as e}from"./CodeBlock-DSd9V9-T.js";import{_ as t,d as n,g as r,h as i,p as a,v as o,w as s,y as c}from"./index-DuKBGh4e.js";var l=`import { createRouter, createWebHistory } from 'vue-router'
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

export default router`,u=`<nav>
  <RouterLink to="/">Inicio</RouterLink>
  <RouterLink to="/about">Acerca de</RouterLink>
</nav>

<RouterView />`,d=`// router/index.ts
{ path: '/user/:id', component: UserProfile }

// UserProfile.vue
import { useRoute } from 'vue-router'
const route = useRoute()
console.log(route.params.id) // :id de la URL`,f=`import { useRouter } from 'vue-router'
const router = useRouter()

function goToUser(id: number) {
  router.push({ name: 'User', params: { id } })
}`,p=c({__name:`05-Router`,setup(c){return(c,p)=>(s(),i(n,null,[p[12]||=a(`h1`,null,`Vue Router`,-1),p[13]||=a(`p`,null,` Vue Router es el enrutador oficial de Vue. Te permite mapear URLs a componentes, crear navegación entre páginas y manejar parámetros de ruta. Es esencial para SPAs. `,-1),a(`section`,null,[p[0]||=a(`h2`,null,`Instalación`,-1),p[1]||=a(`p`,null,[t(` Si creaste el proyecto con `),a(`code`,null,`npm create vue@latest`),t(`, podés seleccionar Vue Router durante la configuración. Si ya tenés el proyecto: `)],-1),o(e,{code:`npm install vue-router`,lang:`bash`,title:`Instalación`})]),a(`section`,null,[p[2]||=a(`h2`,null,`Configuración básica`,-1),p[3]||=a(`p`,null,[t(`Creá un archivo de rutas e importalo en `),a(`code`,null,`main.ts`),t(`:`)],-1),o(e,{code:l,lang:`typescript`,title:`src/router/index.ts`}),p[4]||=a(`p`,null,[t(`Luego, en `),a(`code`,null,`main.ts`),t(`, usá `),a(`code`,null,`app.use(router)`),t(`.`)],-1)]),a(`section`,null,[p[5]||=a(`h2`,null,[a(`code`,null,`RouterView`),t(` y `),a(`code`,null,`RouterLink`)],-1),p[6]||=a(`p`,null,[a(`code`,null,`RouterView`),t(` es el lugar donde se renderiza el componente de la ruta actual. `),a(`code`,null,`RouterLink`),t(` es un reemplazo de `),a(`code`,null,`<a>`),t(` que evita recargar la página.`)],-1),o(e,{code:u,lang:`html`,title:`App.vue`})]),a(`section`,null,[p[7]||=a(`h2`,null,`Parámetros de ruta`,-1),p[8]||=a(`p`,null,[t(`Definí segmentos dinámicos con `),a(`code`,null,`:param`),t(` y accedelos con `),a(`code`,null,`useRoute()`),t(`.`)],-1),o(e,{code:d,lang:`typescript`,title:`Ruta con parámetros`}),p[9]||=a(`div`,{class:`demo`},[a(`div`,{class:`demo-title`},`Ejemplo visual`),a(`p`,null,[t(`Imaginá la URL `),a(`code`,null,`/user/42`),t(`. Con la ruta `),a(`code`,null,`/user/:id`),t(`, `),a(`code`,null,`route.params.id`),t(` sería `),a(`strong`,null,`"42"`),t(`.`)])],-1)]),a(`section`,null,[p[10]||=a(`h2`,null,`Navegación programática`,-1),p[11]||=a(`p`,null,[t(`Usá `),a(`code`,null,`router.push()`),t(` para navegar desde JavaScript (después de un submit, un timeout, etc.).`)],-1),o(e,{code:f,lang:`typescript`,title:`Navegación programática`})]),p[14]||=r(`<section><h2>Resumen de conceptos clave</h2><table class="card" style="width:100%;border-collapse:collapse;"><thead><tr style="border-bottom:1px solid var(--border);"><th style="padding:0.5rem;text-align:left;">Concepto</th><th style="padding:0.5rem;text-align:left;">Uso</th></tr></thead><tbody><tr style="border-bottom:1px solid var(--border);"><td style="padding:0.5rem;"><code>RouterLink</code></td><td style="padding:0.5rem;">Navegación declarativa en el template</td></tr><tr style="border-bottom:1px solid var(--border);"><td style="padding:0.5rem;"><code>RouterView</code></td><td style="padding:0.5rem;">Lugar donde se renderiza el componente de la ruta</td></tr><tr style="border-bottom:1px solid var(--border);"><td style="padding:0.5rem;"><code>useRoute()</code></td><td style="padding:0.5rem;">Acceder a la ruta actual (params, query, etc.)</td></tr><tr><td style="padding:0.5rem;"><code>useRouter()</code></td><td style="padding:0.5rem;">Navegar programáticamente (push, replace, back)</td></tr></tbody></table></section>`,1)],64))}});export{p as default};