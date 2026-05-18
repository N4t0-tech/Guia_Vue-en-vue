import{t as e}from"./CodeBlock-DSd9V9-T.js";import{F as t,M as n,R as r,_ as i,d as a,f as o,h as s,n as c,p as l,v as u,w as d,y as f}from"./index-DuKBGh4e.js";var p=c(`counter`,()=>{let e=n(0),t=o(()=>e.value*2);function r(){e.value++}function i(){e.value--}function a(){e.value=0}return{count:e,double:t,increment:r,decrement:i,reset:a}}),m={class:`demo`},h={style:{display:`flex`,gap:`1rem`,"align-items":`center`,"flex-wrap":`wrap`}},g={style:{"font-size":`2rem`,"font-weight":`700`,"min-width":`3rem`,"text-align":`center`}},_={style:{"margin-top":`0.5rem`}},v={class:`demo`},y=`import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  const double = computed(() => count.value * 2)

  function increment() { count.value++ }
  function decrement() { count.value-- }
  function reset() { count.value = 0 }

  return { count, double, increment, decrement, reset }
})`,b=`import { useCounterStore } from './stores/counter'

const store = useCounterStore()

// En el template:
// {{ store.count }}
// {{ store.double }}
// <button @click="store.increment()">+</button>`,x=`import { createPinia } from 'pinia'

const app = createApp(App)
app.use(createPinia())
app.mount('#app')`,S=f({__name:`06-Pinia`,setup(n){let o=p();return(n,c)=>(d(),s(a,null,[c[13]||=l(`h1`,null,`Pinia — Estado global`,-1),c[14]||=l(`p`,null,` Pinia es la biblioteca oficial de estado global para Vue. Reemplaza a Vuex con una API más simple y con soporte nativo de TypeScript. Te permite compartir estado entre cualquier componente de la app sin pasarlo por props. `,-1),l(`section`,null,[c[4]||=l(`h2`,null,`Instalación y configuración`,-1),u(e,{code:`npm install pinia`,lang:`bash`,title:`Instalación`}),u(e,{code:x,lang:`typescript`,title:`main.ts`})]),l(`section`,null,[c[5]||=l(`h2`,null,`Crear un Store`,-1),c[6]||=l(`p`,null,[i(`Un store se define con `),l(`code`,null,`defineStore`),i(`. Usá la Composition API dentro del store para tener estado, getters y acciones.`)],-1),u(e,{code:y,lang:`typescript`,title:`stores/counter.ts`}),u(e,{code:b,lang:`vue`,title:`Uso en un componente`})]),l(`section`,null,[c[11]||=l(`h2`,null,`Demo interactiva`,-1),c[12]||=l(`p`,null,`Este contador está sincronizado globalmente. Abrí esta misma página en otra pestaña y verás el mismo valor compartido (Pinia lo mantiene en memoria mientras la app viva).`,-1),l(`div`,m,[c[8]||=l(`div`,{class:`demo-title`},`Contador global con Pinia`,-1),l(`div`,h,[l(`button`,{class:`primary`,onClick:c[0]||=e=>t(o).decrement()},`−`),l(`span`,g,r(t(o).count),1),l(`button`,{class:`primary`,onClick:c[1]||=e=>t(o).increment()},`+`),l(`button`,{class:`secondary`,onClick:c[2]||=e=>t(o).reset()},`Reset`)]),l(`p`,_,[c[7]||=i(`El doble es: `,-1),l(`strong`,null,r(t(o).double),1)])]),l(`div`,v,[c[10]||=l(`div`,{class:`demo-title`},`Mismo store, otro componente`,-1),l(`p`,null,[c[9]||=i(`Valor actual: `,-1),l(`strong`,null,r(t(o).count),1)]),l(`button`,{class:`primary`,onClick:c[3]||=e=>t(o).increment()},`+1 desde aquí`)])]),c[15]||=l(`section`,null,[l(`h2`,null,`¿Cuándo usar Pinia?`),l(`ul`,null,[l(`li`,null,`Estado compartido entre múltiples componentes no relacionados`),l(`li`,null,`Datos del usuario autenticado`),l(`li`,null,`Carrito de compras`),l(`li`,null,`Preferencias de la app`),l(`li`,null,`Cache de datos del servidor`)]),l(`p`,null,[i(`Si el estado solo lo usa un componente o una familia cercana, un `),l(`code`,null,`ref`),i(` local o un composable son suficientes.`)])],-1)],64))}});export{S as default};