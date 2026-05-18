import{t as e}from"./CodeBlock-DpXj1NaB.js";import{E as t,M as n,R as r,_ as i,d as a,h as o,i as s,k as c,m as l,p as u,r as d,t as f,v as p,w as m,y as h}from"./index-OKjGQV9p.js";var g={class:`demo`},_={style:{display:`flex`,gap:`0.5rem`,"margin-bottom":`1rem`}},v={key:0,class:`card`,style:{"text-align":`center`,"font-size":`1.2rem`,"margin-bottom":`0`}},y={style:{margin:`0`}},b={class:`demo`},x={style:{margin:`0`,"font-size":`1.2rem`}},S={class:`demo`},C={class:`badge`},w=`.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}`,T=`<button @click="show = !show">Toggle</button>

<Transition name="fade">
  <p v-if="show">Hola Vue!</p>
</Transition>`,E=`.slide-enter-active,
.slide-leave-active {
  transition: all 0.3s ease;
}
.slide-enter-from {
  transform: translateX(20px);
  opacity: 0;
}
.slide-leave-to {
  transform: translateX(-20px);
  opacity: 0;
}`,D=`<Transition name="slide" mode="out-in">
  <p :key="page">{{ page }}</p>
</Transition>`,O=`.list-enter-active,
.list-leave-active {
  transition: all 0.4s ease;
}
.list-enter-from {
  opacity: 0;
  transform: translateX(30px);
}
.list-leave-to {
  opacity: 0;
  transform: translateX(-30px);
}`,k=`<TransitionGroup name="list" tag="ul">
  <li v-for="item in items" :key="item.id">
    {{ item.text }}
  </li>
</TransitionGroup>`,A=f(h({__name:`16-Transiciones`,setup(f){let h=n(!0),A=n(`Página 1`),j=n([{id:1,text:`TypeScript`},{id:2,text:`Vue 3`},{id:3,text:`Vite`}]),M=4,N=n(`fade`);function P(){j.value.push({id:M++,text:`Item ${M-1}`})}function F(){j.value.length>0&&(j.value=j.value.slice(0,-1))}function I(){A.value=A.value===`Página 1`?`Página 2`:`Página 1`}return(n,f)=>(m(),o(a,null,[f[11]||=u(`h1`,null,`Transiciones y animaciones`,-1),f[12]||=u(`p`,null,[i(` Vue ofrece dos componentes para animar elementos: `),u(`code`,null,`<Transition>`),i(` para un solo elemento y `),u(`code`,null,`<TransitionGroup>`),i(` para listas. Solo definís clases CSS y Vue aplica/remueve los nombres en el momento exacto. `)],-1),u(`section`,null,[f[3]||=u(`h2`,null,`<Transition> — Elemento individual`,-1),f[4]||=u(`p`,null,[i(`Animá la aparición/desaparición de un elemento con `),u(`code`,null,`v-if`),i(`/`),u(`code`,null,`v-show`),i(`.`)],-1),p(e,{code:w,lang:`css`,title:`CSS: fade`}),p(e,{code:T,lang:`html`,title:`Template`}),u(`div`,g,[f[2]||=u(`div`,{class:`demo-title`},`Pruébalo`,-1),u(`div`,_,[u(`button`,{class:`primary`,onClick:f[0]||=e=>h.value=!h.value},r(h.value?`Ocultar`:`Mostrar`),1),u(`button`,{class:`secondary`,onClick:f[1]||=e=>N.value=N.value===`fade`?`slide`:`fade`},` Modo: `+r(N.value),1)]),p(d,{name:N.value},{default:c(()=>[h.value?(m(),o(`div`,v,[u(`p`,y,r(N.value===`fade`?`✨ Fade`:`➡ Slide`),1)])):l(``,!0)]),_:1},8,[`name`])])]),u(`section`,null,[f[6]||=u(`h2`,null,[i(`Modo `),u(`code`,null,`out-in`)],-1),f[7]||=u(`p`,null,[i(`Cuando un elemento reemplaza a otro, usá `),u(`code`,null,`mode="out-in"`),i(` para que el primero salga antes de que entre el segundo.`)],-1),p(e,{code:E,lang:`css`,title:`CSS: slide`}),p(e,{code:D,lang:`html`,title:`Template con mode='out-in'`}),u(`div`,b,[f[5]||=u(`div`,{class:`demo-title`},`Pruébalo`,-1),u(`button`,{class:`primary`,onClick:I,style:{"margin-bottom":`1rem`}},`Cambiar página`),p(d,{name:`slide`,mode:`out-in`},{default:c(()=>[(m(),o(`div`,{class:`card`,key:A.value,style:{"text-align":`center`,"margin-bottom":`0`}},[u(`p`,x,r(A.value),1)]))]),_:1})])]),u(`section`,null,[f[9]||=u(`h2`,null,`<TransitionGroup> — Listas animadas`,-1),f[10]||=u(`p`,null,[i(`Animá la entrada/salida de items en un `),u(`code`,null,`v-for`),i(`. `),u(`code`,null,`TransitionGroup`),i(` renderiza un contenedor (`),u(`code`,null,`tag="ul"`),i(`) y anima cada hijo.`)],-1),p(e,{code:O,lang:`css`,title:`CSS: lista`}),p(e,{code:k,lang:`html`,title:`TransitionGroup`}),u(`div`,S,[f[8]||=u(`div`,{class:`demo-title`},`Pruébalo`,-1),u(`div`,{style:{display:`flex`,gap:`0.5rem`,"margin-bottom":`1rem`}},[u(`button`,{class:`primary`,onClick:P},`Agregar`),u(`button`,{class:`secondary`,onClick:F},`Eliminar último`)]),p(s,{name:`list`,tag:`ul`,style:{"list-style":`none`,padding:`0`}},{default:c(()=>[(m(!0),o(a,null,t(j.value,e=>(m(),o(`li`,{key:e.id,class:`card`,style:{"margin-bottom":`0.5rem`,padding:`0.8rem 1rem`,display:`flex`,"align-items":`center`,gap:`0.5rem`}},[u(`span`,C,r(e.id),1),i(` `+r(e.text),1)]))),128))]),_:1})])]),f[13]||=u(`section`,null,[u(`h2`,null,`Resumen de clases CSS`),u(`p`,null,[i(`Vue agrega estas clases según el `),u(`code`,null,`name`),i(` que le pongas al Transition:`)]),u(`div`,{class:`card`},[u(`pre`,null,[u(`code`,null,`name-enter-from        # Estado inicial al entrar
name-enter-active      # Durante la entrada (la transición)
name-enter-to          # Estado final al entrar
name-leave-from        # Estado inicial al salir
name-leave-active      # Durante la salida
name-leave-to          # Estado final al salir`)])])],-1)],64))}}),[[`__scopeId`,`data-v-9a405f6c`]]);export{A as default};