import{t as e}from"./CodeBlock-DpXj1NaB.js";import{A as t,M as n,O as r,R as i,_ as a,d as o,f as s,h as c,j as l,p as u,s as d,v as f,w as p,y as m}from"./index-OKjGQV9p.js";var h={class:`demo`},g={class:`demo`},_={class:`demo`},v={class:`demo`},y=`import { ref } from 'vue'

const count = ref(0)
console.log(count.value) // 0

count.value++ // Reactivo`,b=`import { reactive } from 'vue'

const user = reactive({
  name: 'Ana',
  age: 25
})

user.age = 26 // Reactivo`,x=`import { ref, computed } from 'vue'

const price = ref(100)
const tax = 0.21
const total = computed(() => price.value * (1 + tax))`,S=`import { ref, watch } from 'vue'

const search = ref('')

watch(search, (newVal, oldVal) => {
  console.log('Cambió:', oldVal, '→', newVal)
})`,C=m({__name:`02-CompositionApi`,setup(m){let C=n(0),w=l({first:``,last:``}),T=n(100),E=s(()=>T.value*1.21),D=n(``);return r(D,e=>{e&&console.log(`Buscando:`,e)}),(n,r)=>(p(),c(o,null,[r[22]||=u(`h1`,null,`Composition API`,-1),r[23]||=u(`p`,null,[a(` La Composition API es la forma moderna de escribir lógica reactiva en Vue. En lugar de separar el código por opciones (data, methods, computed), agrupás la lógica por funcionalidad usando funciones como `),u(`code`,null,`ref`),a(`, `),u(`code`,null,`reactive`),a(`, `),u(`code`,null,`computed`),a(` y `),u(`code`,null,`watch`),a(`. `)],-1),u(`section`,null,[r[8]||=u(`h2`,null,[u(`code`,null,`ref()`),a(` — Valores reactivos primitivos`)],-1),r[9]||=u(`p`,null,[u(`code`,null,`ref`),a(` envuelve un valor para hacerlo reactivo. Se accede con `),u(`code`,null,`.value`),a(` en JS, pero en el template se usa automáticamente.`)],-1),f(e,{code:y,lang:`typescript`,title:`ref básico`}),u(`div`,h,[r[7]||=u(`div`,{class:`demo-title`},`Pruébalo`,-1),u(`p`,null,[r[6]||=a(`Contador: `,-1),u(`strong`,null,i(C.value),1)]),u(`button`,{class:`primary`,onClick:r[0]||=e=>C.value++},`+1`),u(`button`,{class:`secondary`,onClick:r[1]||=e=>C.value=0,style:{"margin-left":`0.5rem`}},`Reset`)])]),u(`section`,null,[r[12]||=u(`h2`,null,[u(`code`,null,`reactive()`),a(` — Objetos reactivos`)],-1),r[13]||=u(`p`,null,[a(`Similar a `),u(`code`,null,`ref`),a(` pero para objetos. No necesitás `),u(`code`,null,`.value`),a(` para acceder a las propiedades.`)],-1),f(e,{code:b,lang:`typescript`,title:`reactive`}),u(`div`,g,[r[11]||=u(`div`,{class:`demo-title`},`Pruébalo`,-1),t(u(`input`,{"onUpdate:modelValue":r[2]||=e=>w.first=e,placeholder:`Nombre`},null,512),[[d,w.first]]),t(u(`input`,{"onUpdate:modelValue":r[3]||=e=>w.last=e,placeholder:`Apellido`,style:{"margin-left":`0.5rem`}},null,512),[[d,w.last]]),u(`p`,null,[r[10]||=a(`Hola, `,-1),u(`strong`,null,i(w.first)+` `+i(w.last),1)])])]),u(`section`,null,[r[17]||=u(`h2`,null,[u(`code`,null,`computed()`),a(` — Valores derivados`)],-1),r[18]||=u(`p`,null,[a(`Un `),u(`code`,null,`computed`),a(` es un valor que depende de otros reactivos y se recalcula automáticamente cuando sus dependencias cambian.`)],-1),f(e,{code:x,lang:`typescript`,title:`computed`}),u(`div`,_,[r[16]||=u(`div`,{class:`demo-title`},`Pruébalo`,-1),u(`label`,null,[r[14]||=a(`Precio base: `,-1),t(u(`input`,{type:`number`,"onUpdate:modelValue":r[4]||=e=>T.value=e,min:`0`},null,512),[[d,T.value,void 0,{number:!0}]])]),u(`p`,null,[r[15]||=a(`Precio + IVA (21%): `,-1),u(`strong`,null,i(E.value.toFixed(2))+` €`,1)])])]),u(`section`,null,[r[20]||=u(`h2`,null,[u(`code`,null,`watch()`),a(` — Observar cambios`)],-1),r[21]||=u(`p`,null,`Ejecutá una función cada vez que un valor reactivo cambia. Útil para efectos secundarios como peticiones o logs.`,-1),f(e,{code:S,lang:`typescript`,title:`watch`}),u(`div`,v,[r[19]||=u(`div`,{class:`demo-title`},`Pruébalo (mirá la consola)`,-1),t(u(`input`,{"onUpdate:modelValue":r[5]||=e=>D.value=e,placeholder:`Escribí algo...`},null,512),[[d,D.value]])])])],64))}});export{C as default};