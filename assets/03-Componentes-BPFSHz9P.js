import{t as e}from"./CodeBlock-DpXj1NaB.js";import{A as t,D as n,M as r,R as i,_ as a,d as o,h as s,p as c,s as l,t as u,v as d,w as f,y as p}from"./index-OKjGQV9p.js";var m={class:`child-card`},h={class:`badge`},g=u(p({__name:`ChildPropExample`,props:{message:{},count:{}},setup(e){return(t,n)=>(f(),s(`div`,m,[n[2]||=c(`p`,null,[c(`strong`,null,`Componente hijo`)],-1),c(`p`,null,[n[0]||=a(`Mensaje recibido: `,-1),c(`em`,null,i(e.message),1)]),c(`p`,null,[n[1]||=a(`Contador: `,-1),c(`span`,h,i(e.count),1)])]))}}),[[`__scopeId`,`data-v-e6faeec4`]]),_={class:`child-card`},v=u(p({__name:`ChildEmitExample`,emits:[`click`],setup(e,{emit:t}){let n=t;function r(){n(`click`,Math.floor(Math.random()*100))}return(e,t)=>(f(),s(`div`,_,[t[0]||=c(`p`,null,[c(`strong`,null,`Componente hijo`)],-1),c(`button`,{class:`primary`,onClick:r},` Enviar número aleatorio al padre `)]))}}),[[`__scopeId`,`data-v-57820807`]]),y={class:`demo`},b={class:`demo`},x={class:`demo`},S={class:`card`,style:{border:`2px solid var(--accent)`}},C={style:{"border-bottom":`1px solid var(--border)`,"padding-bottom":`0.5rem`,"margin-bottom":`0.5rem`}},w=`<!-- Hijo.vue -->
<script setup lang="ts">
defineProps<{
  message: string
  count: number
}>()
<\/script>

<template>
  <p>{{ message }} — Contador: {{ count }}</p>
</template>`,T=`<!-- Hijo.vue -->
<script setup lang="ts">
const emit = defineEmits<{
  click: [value: number]
}>()

function handleClick() {
  emit('click', 42)
}
<\/script>

<template>
  <button @click="handleClick">
    Enviar evento
  </button>
</template>`,E=`<!-- Layout.vue -->
<div class="card">
  <header>
    <slot name="header" />
  </header>
  <main>
    <slot />
  </main>
</div>

<!-- Uso -->
<Layout>
  <template #header>
    <h2>Título</h2>
  </template>
  <p>Contenido principal</p>
</Layout>`,D=`<!-- InputPersonalizado.vue -->
<script setup lang="ts">
defineProps<{ modelValue: string }>()
const emit = defineEmits<{
  'update:modelValue': [value: string]
}>()
<\/script>

<template>
  <input
    :value="modelValue"
    @input="emit('update:modelValue', ($event.target as HTMLInputElement).value)"
  />
</template>`,O=p({__name:`03-Componentes`,setup(u){let p=r(`Hola desde el padre`),m=r(5),h=r(0),_=r(``);return(r,u)=>(f(),s(o,null,[u[18]||=c(`h1`,null,`Componentes`,-1),u[19]||=c(`p`,null,[a(` Los componentes son el bloque fundamental de Vue. Cada componente encapsula su propio template, lógica y estilos. Se comunican entre sí mediante `),c(`strong`,null,`props`),a(` (padre → hijo) y `),c(`strong`,null,`emits`),a(` (hijo → padre). `)],-1),c(`section`,null,[u[4]||=c(`h2`,null,`Props — Datos del padre al hijo`,-1),u[5]||=c(`p`,null,[a(`Las `),c(`code`,null,`props`),a(` son atributos personalizados que el padre pasa al hijo. Son de solo lectura.`)],-1),d(e,{code:w,lang:`vue`,title:`Hijo — defineProps`}),c(`div`,y,[u[3]||=c(`div`,{class:`demo-title`},`Pruébalo`,-1),t(c(`input`,{"onUpdate:modelValue":u[0]||=e=>p.value=e,placeholder:`Mensaje para el hijo`},null,512),[[l,p.value]]),d(g,{message:p.value,count:m.value},null,8,[`message`,`count`])])]),c(`section`,null,[u[8]||=c(`h2`,null,`Emits — Del hijo al padre`,-1),u[9]||=c(`p`,null,[a(`Los hijos emiten eventos hacia el padre usando `),c(`code`,null,`defineEmits`),a(`. El padre escucha con `),c(`code`,null,`@`),a(`.`)],-1),d(e,{code:T,lang:`vue`,title:`Hijo — defineEmits`}),c(`div`,b,[u[7]||=c(`div`,{class:`demo-title`},`Pruébalo`,-1),d(v,{onClick:u[1]||=e=>h.value=e}),c(`p`,null,[u[6]||=a(`Valor recibido del hijo: `,-1),c(`strong`,null,i(h.value),1)])])]),c(`section`,null,[u[14]||=c(`h2`,null,`Slots — Contenido proyectado`,-1),u[15]||=c(`p`,null,[a(`Los `),c(`code`,null,`slots`),a(` permiten pasar contenido HTML del padre al hijo, como si el hijo tuviera "huecos" rellenables.`)],-1),d(e,{code:E,lang:`vue`,title:`Slots nombrados`}),c(`div`,x,[u[12]||=c(`div`,{class:`demo-title`},`Pruébalo`,-1),c(`div`,S,[c(`header`,C,[n(r.$slots,`demo-header`,{},()=>[u[10]||=c(`h3`,{style:{margin:`0`}},`Título por defecto`,-1)])]),c(`main`,null,[n(r.$slots,`demo-content`,{},()=>[u[11]||=c(`p`,null,`Contenido por defecto`,-1)])])]),t(c(`input`,{"onUpdate:modelValue":u[2]||=e=>_.value=e,placeholder:`Texto para el slot`,style:{"margin-top":`0.5rem`}},null,512),[[l,_.value]]),u[13]||=c(`div`,{style:{"margin-top":`0.5rem`}},[c(`button`,{class:`primary`,onClick:()=>{}},`Usar slot`)],-1)])]),c(`section`,null,[u[16]||=c(`h2`,null,`v-model en componentes`,-1),u[17]||=c(`p`,null,[a(`Podés usar `),c(`code`,null,`v-model`),a(` en tus propios componentes. Es un atajo para `),c(`code`,null,`:modelValue + @update:modelValue`),a(`.`)],-1),d(e,{code:D,lang:`vue`,title:`Componente con v-model`})])],64))}});export{O as default};