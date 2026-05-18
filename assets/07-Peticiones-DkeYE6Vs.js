import{t as e}from"./CodeBlock-DSd9V9-T.js";import{E as t,M as n,R as r,_ as i,d as a,g as o,h as s,m as c,p as l,v as u,w as d,y as f}from"./index-DuKBGh4e.js";var p={class:`demo`},m=[`disabled`],h={key:0,style:{"margin-top":`1rem`,color:`#e74c3c`}},g={key:1,style:{"margin-top":`1rem`}},_={style:{"font-size":`1rem`,"margin-bottom":`0.3rem`}},v={style:{"font-size":`0.9rem`,margin:`0`}},y=`import { ref, onMounted } from 'vue'
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

onMounted(fetchUsers)`,b=`// composables/useFetch.ts
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
}`,x=`import axios from 'axios'

const { data } = await axios.get('/api/users')
const { data: created } = await axios.post('/api/users', { name: 'Ana' })
const { data: updated } = await axios.put('/api/users/1', { name: 'Ana M.' })
await axios.delete('/api/users/1')`,S=f({__name:`07-Peticiones`,setup(f){let S=n([]),C=n(!1),w=n(null);async function T(){C.value=!0,w.value=null;try{let e=await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=5`);if(!e.ok)throw Error(`Error ${e.status}`);S.value=await e.json()}catch(e){w.value=e.message}finally{C.value=!1}}return(n,f)=>(d(),s(a,null,[f[8]||=l(`h1`,null,`Peticiones HTTP`,-1),f[9]||=l(`p`,null,[i(` Las aplicaciones web casi siempre necesitan consumir APIs externas. En Vue, podés usar la API nativa `),l(`code`,null,`fetch`),i(` o bibliotecas como `),l(`strong`,null,`axios`),i(`. La lógica de peticiones suele ir en composables o directamente en los componentes. `)],-1),l(`section`,null,[f[0]||=l(`h2`,null,[i(`Con `),l(`code`,null,`fetch`),i(` nativo`)],-1),f[1]||=l(`p`,null,[i(`Usá `),l(`code`,null,`fetch`),i(` dentro de un `),l(`code`,null,`onMounted`),i(` o en una función ejecutada por un evento:`)],-1),u(e,{code:y,lang:`typescript`,title:`Fetch en un componente`})]),l(`section`,null,[f[2]||=l(`h2`,null,`Con un Composable reutilizable`,-1),f[3]||=l(`p`,null,[i(`Creá un composable `),l(`code`,null,`useFetch`),i(` para no repetir el patrón loading/error/data en cada componente:`)],-1),u(e,{code:b,lang:`typescript`,title:`composables/useFetch.ts`})]),l(`section`,null,[f[4]||=l(`h2`,null,`Con Axios`,-1),f[5]||=l(`p`,null,`Axios ofrece una API más cómoda con interceptors, cancelación de requests y mejor manejo de errores:`,-1),u(e,{code:x,lang:`typescript`,title:`Axios`})]),l(`section`,null,[f[7]||=l(`h2`,null,`Demo interactiva`,-1),l(`div`,p,[f[6]||=l(`div`,{class:`demo-title`},`Cargar posts desde JSONPlaceholder`,-1),l(`button`,{class:`primary`,onClick:T,disabled:C.value},r(C.value?`Cargando...`:`Cargar posts`),9,m),w.value?(d(),s(`div`,h,`Error: `+r(w.value),1)):c(``,!0),S.value.length?(d(),s(`div`,g,[(d(!0),s(a,null,t(S.value,e=>(d(),s(`div`,{key:e.id,class:`card`,style:{"margin-bottom":`0.8rem`}},[l(`h3`,_,r(e.id)+`. `+r(e.title),1),l(`p`,v,r(e.body),1)]))),128))])):c(``,!0)])]),f[10]||=o(`<section><h2>Buenas prácticas</h2><ul><li>Siempre manejá los estados <strong>loading</strong>, <strong>error</strong> y <strong>data</strong></li><li>Usá <code>try/catch/finally</code> para capturar errores y limpiar el estado de carga</li><li>Creá composables para lógica de peticiones reutilizable</li><li>Cancelá requests cuando el componente se desmonta (con <code>AbortController</code> o señal de Axios)</li><li>Considera usar <strong>TanStack Query</strong> (antes Vue Query) para apps con mucha lógica de servidor</li></ul></section>`,1)],64))}});export{S as default};