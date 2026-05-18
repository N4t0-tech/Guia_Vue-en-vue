import{t as e}from"./CodeBlock-DSd9V9-T.js";import{F as t,M as n,N as r,O as i,P as a,R as o,_ as s,d as c,f as l,h as u,p as d,v as f,w as p,y as m}from"./index-DuKBGh4e.js";var h=typeof window<`u`&&typeof document<`u`;typeof WorkerGlobalScope<`u`&&globalThis instanceof WorkerGlobalScope;var g=Object.prototype.toString,_=e=>g.call(e)===`[object Object]`;function v(e){return Array.isArray(e)?e:[e]}function y(e,t,n){return i(e,t,{...n,immediate:!0})}var b=h?window:void 0;h&&window.document,h&&window.navigator,h&&window.location;function x(e){let t=a(e);return t?.$el??t}function S(...e){let n=(e,t,n,r)=>(e.addEventListener(t,n,r),()=>e.removeEventListener(t,n,r)),r=l(()=>{let t=v(a(e[0])).filter(e=>e!=null);return t.every(e=>typeof e!=`string`)?t:void 0});return y(()=>[r.value?.map(e=>x(e))??[b].filter(e=>e!=null),v(a(r.value?e[1]:e[0])),v(t(r.value?e[2]:e[1])),a(r.value?e[3]:e[2])],([e,t,r,i],a,o)=>{if(!e?.length||!t?.length||!r?.length)return;let s=_(i)?{...i}:i,c=e.flatMap(e=>t.flatMap(t=>r.map(r=>n(e,t,r,s))));o(()=>{c.forEach(e=>e())})},{flush:`post`})}var C={page:e=>[e.pageX,e.pageY],client:e=>[e.clientX,e.clientY],screen:e=>[e.screenX,e.screenY],movement:e=>e instanceof MouseEvent?[e.movementX,e.movementY]:null};function w(e={}){let{type:t=`page`,touch:n=!0,resetOnTouchEnds:i=!1,initialValue:a={x:0,y:0},window:o=b,target:s=o,scroll:c=!0,eventFilter:l}=e,u=null,d=0,f=0,p=r(a.x),m=r(a.y),h=r(null),g=typeof t==`function`?t:C[t],_=e=>{let t=g(e);u=e,t&&([p.value,m.value]=t,h.value=`mouse`),o&&(d=o.scrollX,f=o.scrollY)},v=e=>{if(e.touches.length>0){let t=g(e.touches[0]);t&&([p.value,m.value]=t,h.value=`touch`)}},y=()=>{if(!u||!o)return;let e=g(u);u instanceof MouseEvent&&e&&(p.value=e[0]+o.scrollX-d,m.value=e[1]+o.scrollY-f)},x=()=>{p.value=a.x,m.value=a.y},w=l?e=>l(()=>_(e),{}):e=>_(e),T=l?e=>l(()=>v(e),{}):e=>v(e),E=l?()=>l(()=>y(),{}):()=>y();if(s){let e={passive:!0};S(s,[`mousemove`,`dragover`],w,e),n&&t!==`movement`&&(S(s,[`touchstart`,`touchmove`],T,e),i&&S(s,`touchend`,x,e)),c&&t===`page`&&S(o,`scroll`,E,e)}return{x:p,y:m,sourceType:h}}function T(e=0){let t=n(e),r=l(()=>t.value*2);function i(){t.value++}function a(){t.value--}function o(){t.value=e}return{count:t,double:r,increment:i,decrement:a,reset:o}}var E={class:`demo`},D={style:{display:`flex`,gap:`0.5rem`,"align-items":`center`,"flex-wrap":`wrap`}},O={style:{"font-size":`1.5rem`,"font-weight":`700`,"min-width":`2rem`,"text-align":`center`}},k={class:`demo`},A=`// composables/useCounter.ts
import { ref, computed } from 'vue'

export function useCounter(initialValue = 0) {
  const count = ref(initialValue)
  const double = computed(() => count.value * 2)

  function increment() { count.value++ }
  function decrement() { count.value-- }
  function reset() { count.value = initialValue }

  return { count, double, increment, decrement, reset }
}`,j=`// Componente.vue
import { useCounter } from '../composables/useCounter'

const { count, double, increment } = useCounter(10)

// Template:
// {{ count }} — {{ double }}
// <button @click="increment">+</button>`,M=`import { useMouse } from '@vueuse/core'

const { x, y } = useMouse()

// Template:
// Mouse: {{ x }}, {{ y }}`,N=`// ✅ HACER: composables específicos
export function useUserAuth() { ... }

// ✅ HACER: aceptar parámetros reactivos
export function useSearch(query: Ref<string>) { ... }

// ✅ HACER: devolver refs para mantener reactividad
return { result, loading, error }

// ❌ NO HACER: lógica no reactiva
// ❌ NO HACER: efectos secundarios sin cleanup`,P=m({__name:`10-Composables`,setup(n){let{x:r,y:i}=w(),{count:a,double:l,increment:m,decrement:h,reset:g}=T(10);return(n,_)=>(p(),u(c,null,[_[15]||=d(`h1`,null,`Composables`,-1),_[16]||=d(`p`,null,[s(` Un `),d(`strong`,null,`composable`),s(` es una función que usa la Composition API para encapsular lógica reactiva reutilizable. Es la forma de compartir lógica entre componentes sin mezclar responsabilidades. `)],-1),d(`section`,null,[_[5]||=d(`h2`,null,`Crear un composable`,-1),_[6]||=d(`p`,null,[s(`La convención es nombrar los archivos con prefijo `),d(`code`,null,`use`),s(`. Pueden aceptar parámetros, tener estado interno y devolver cualquier valor reactivo.`)],-1),f(e,{code:A,lang:`typescript`,title:`composables/useCounter.ts`}),f(e,{code:j,lang:`vue`,title:`Uso en un componente`}),d(`div`,E,[_[4]||=d(`div`,{class:`demo-title`},`Pruébalo — useCounter`,-1),d(`div`,D,[d(`button`,{class:`primary`,onClick:_[0]||=(...e)=>t(h)&&t(h)(...e)},`−`),d(`span`,O,o(t(a)),1),d(`button`,{class:`primary`,onClick:_[1]||=(...e)=>t(m)&&t(m)(...e)},`+`),d(`button`,{class:`secondary`,onClick:_[2]||=(...e)=>t(g)&&t(g)(...e)},`Reset`)]),d(`p`,null,[_[3]||=s(`Doble: `,-1),d(`strong`,null,o(t(l)),1)])])]),d(`section`,null,[_[10]||=d(`h2`,null,`Composables externos — VueUse`,-1),_[11]||=d(`p`,null,[d(`a`,{href:`https://vueuse.org`,target:`_blank`,rel:`noopener`},`VueUse`),s(` es una colección de cientos de composables listos para usar. El más famoso es `),d(`code`,null,`useMouse`),s(`, que rastrea la posición del mouse en tiempo real. `)],-1),f(e,{code:M,lang:`typescript`,title:`useMouse de VueUse`}),d(`div`,k,[_[9]||=d(`div`,{class:`demo-title`},`useMouse en vivo`,-1),d(`p`,null,[_[7]||=s(`Posición del mouse: `,-1),d(`strong`,null,o(t(r))+`px`,1),_[8]||=s(`, `,-1),d(`strong`,null,o(t(i))+`px`,1)])])]),d(`section`,null,[_[12]||=d(`h2`,null,`Buenas prácticas`,-1),f(e,{code:N,lang:`typescript`,title:`Guías para composables`}),_[13]||=d(`p`,null,`Los composables son ideales para:`,-1),_[14]||=d(`ul`,null,[d(`li`,null,`Peticiones HTTP (useFetch)`),d(`li`,null,`Autenticación (useAuth, useUser)`),d(`li`,null,`Formularios (useForm, useValidation)`),d(`li`,null,`Eventos del navegador (useMouse, useScroll, useMediaQuery)`),d(`li`,null,`Timers y polling (useInterval, useTimeout)`),d(`li`,null,`Almacenamiento local (useLocalStorage)`)],-1)])],64))}});export{P as default};