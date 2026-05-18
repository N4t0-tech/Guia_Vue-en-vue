import{t as e}from"./CodeBlock-DSd9V9-T.js";import{F as t,M as n,R as r,T as i,_ as a,b as o,d as s,g as c,h as l,p as u,v as d,w as f,y as p}from"./index-DuKBGh4e.js";var m={class:`demo`},h=`<!-- App.vue pasa datos a → Header → UserAvatar -->
<!-- App.vue -->
<Header :user="user" />

<!-- Header.vue -->
<UserAvatar :user="user" />

<!-- UserAvatar.vue -->
<img :src="user.avatar" :alt="user.name" />
<!-- ^^ solo UserAvatar necesita "user",
     pero Header recibe una prop que no usa -->`,g=`// App.vue — proveedor
import { provide, ref } from 'vue'

const user = ref({ name: 'Ana', avatar: '/avatar.jpg' })
provide('user', user)`,_=`// UserAvatar.vue — cualquier descendiente
import { inject } from 'vue'

const user = inject('user')
// user → { name: 'Ana', avatar: '/avatar.jpg' }`,v=`// keys.ts
import type { InjectionKey, Ref } from 'vue'

interface User {
  name: string
  avatar: string
}

export const userKey: InjectionKey<Ref<User>> = Symbol('user')`,y=`// App.vue
import { provide } from 'vue'
import { userKey } from './keys'

provide(userKey, user)

// UserAvatar.vue
import { inject } from 'vue'
import { userKey } from './keys'

const user = inject(userKey)!`,b=`// Provide/Inject — estado entre padre e hijos
// No es global, no es reactivo por defecto, no hay DevTools

// Pinia — estado global
// Cualquier componente accede, es reactivo, hay DevTools
// Ideal para: auth, carrito, config`,x=p({__name:`15-ProvideInject`,setup(p){let x=n(`oscuro`);i(`theme`,x);let S=o(`theme`,n(`oscuro`));function C(){x.value=x.value===`oscuro`?`claro`:`oscuro`}return(n,i)=>(f(),l(s,null,[i[11]||=u(`h1`,null,`Provide / Inject`,-1),i[12]||=u(`p`,null,[a(` Normalmente los componentes se comunican con `),u(`strong`,null,`props`),a(` (padre → hijo) y `),u(`strong`,null,`emits`),a(` (hijo → padre). Pero cuando tenés una cadena profunda de componentes y un ancestro lejano necesita pasar datos a un descendiente, pasarlo por cada nivel es tedioso. Ahí entra `),u(`code`,null,`provide`),a(` / `),u(`code`,null,`inject`),a(`. `)],-1),u(`section`,null,[i[0]||=u(`h2`,null,`El problema: prop drilling`,-1),d(e,{code:h,lang:`vue`,title:`Prop drilling`}),i[1]||=u(`p`,null,[u(`code`,null,`Header`),a(` recibe `),u(`code`,null,`user`),a(` solo para pasárselo a `),u(`code`,null,`UserAvatar`),a(`. Con muchos niveles, esto se vuelve inmanejable.`)],-1)]),u(`section`,null,[i[2]||=u(`h2`,null,`Solución: Provide / Inject`,-1),i[3]||=u(`p`,null,[a(`El ancestro `),u(`strong`,null,`provee`),a(` un valor, y cualquier descendiente `),u(`strong`,null,`inyecta`),a(` ese valor directamente, sin pasar por los niveles intermedios.`)],-1),d(e,{code:g,lang:`typescript`,title:`App.vue — provee`}),d(e,{code:_,lang:`typescript`,title:`UserAvatar.vue — inyecta`})]),u(`section`,null,[i[4]||=u(`h2`,null,`Con TypeScript — InjectionKey`,-1),i[5]||=u(`p`,null,[a(`Usá `),u(`code`,null,`InjectionKey`),a(` para tener type safety y evitar errores con strings:`)],-1),d(e,{code:v,lang:`typescript`,title:`keys.ts`}),d(e,{code:y,lang:`typescript`,title:`Provide/Inject tipado`})]),u(`section`,null,[i[6]||=u(`h2`,null,`vs Pinia: ¿cuándo usar cada uno?`,-1),d(e,{code:b,lang:`typescript`,title:`Provide/Inject vs Pinia`}),i[7]||=c(`<div class="card"><p><strong>Usá provide/inject</strong> cuando:</p><ul><li>El estado solo lo necesita un subárbol de componentes</li><li>Es una relación padre → descendiente clara</li><li>No necesitás persistencia ni DevTools</li></ul><p style="margin-top:0.8rem;"><strong>Usá Pinia</strong> cuando:</p><ul><li>El estado es global (auth, carrito, config)</li><li>Varios componentes no relacionados lo necesitan</li><li>Querés DevTools para debugging</li></ul></div>`,1)]),u(`section`,null,[i[10]||=u(`h2`,null,`Demo interactiva`,-1),u(`div`,m,[i[9]||=u(`div`,{class:`demo-title`},`Provide / Inject en acción`,-1),u(`p`,null,[i[8]||=a(`Tema proveído desde esta vista e inyectado por un "hijo": `,-1),u(`strong`,null,r(t(S)),1)]),u(`button`,{class:`primary`,onClick:C,style:{"margin-top":`0.5rem`}},` Cambiar tema (provide) `)])])],64))}});export{x as default};