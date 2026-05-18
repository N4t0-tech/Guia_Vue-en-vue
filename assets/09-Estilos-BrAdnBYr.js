import{t as e}from"./CodeBlock-DSd9V9-T.js";import{A as t,L as n,M as r,R as i,_ as a,d as o,g as s,h as c,p as l,s as u,t as d,v as f,w as p,y as m}from"./index-DuKBGh4e.js";var h={class:`demo`},g={style:{display:`flex`,gap:`0.5rem`,"flex-wrap":`wrap`,"margin-top":`0.5rem`}},_={style:{"margin-top":`0.8rem`,"font-size":`0.85rem`}},v={style:{"margin-left":`0.5rem`}},y={style:{"margin-left":`0.5rem`}},b=`<!-- Componente.vue -->
<template>
  <p class="titulo">Este texto es azul solo aquí</p>
</template>

<style scoped>
.titulo {
  color: blue;
}
</style>`,x=`/* main.css */
body {
  font-family: 'Inter', sans-serif;
  background: #161414;
  color: #D6D2D2;
}`,S=`:root {
  --color-primary: #CFCECD;
  --spacing: 1rem;
}

.card {
  padding: var(--spacing);
  border: 1px solid var(--color-primary);
}`,C=d(m({__name:`09-Estilos`,setup(d){let m=r(`#CFCECD`),C=r(`#1E1B1B`),w=r(`10`);function T(){let e=`#`;for(let t=0;t<6;t++)e+=`0123456789abcdef`[Math.floor(Math.random()*16)];return e}function E(){m.value=T(),C.value=T()}return(r,d)=>(p(),c(o,null,[d[16]||=l(`h1`,null,`Estilos en Vue`,-1),d[17]||=l(`p`,null,[a(` Vue ofrece un sistema de estilos flexible: podés usar CSS global, estilos `),l(`strong`,null,`scoped`),a(` que solo afectan al componente actual, o módulos CSS. También podés usar cualquier preprocesador (SCSS, PostCSS, etc.). `)],-1),l(`section`,null,[d[4]||=l(`h2`,null,`Estilos scoped`,-1),d[5]||=l(`p`,null,[a(` El atributo `),l(`code`,null,`scoped`),a(` en la etiqueta `),l(`code`,null,`<style>`),a(` hace que los estilos solo apliquen al componente actual. Vue agrega un atributo único a cada elemento y modifica los selectores CSS. `)],-1),f(e,{code:b,lang:`vue`,title:`Estilos scoped`}),d[6]||=l(`div`,{class:`demo`},[l(`div`,{class:`demo-title`},`Scoped en acción`),l(`p`,{class:`scoped-demo`},`Este texto usa un estilo scoped (solo existe en este componente).`)],-1)]),l(`section`,null,[d[7]||=l(`h2`,null,`Estilos globales`,-1),d[8]||=l(`p`,null,[a(`Los estilos importados en `),l(`code`,null,`main.ts`),a(` o en `),l(`code`,null,`<style>`),a(` sin `),l(`code`,null,`scoped`),a(` son globales y afectan a todo el proyecto.`)],-1),f(e,{code:x,lang:`css`,title:`CSS global`})]),l(`section`,null,[d[14]||=l(`h2`,null,`CSS Variables — Temas dinámicos`,-1),d[15]||=l(`p`,null,`Esta misma guía usa CSS variables para el tema claro/oscuro. Podés cambiar variables desde JavaScript para crear temas dinámicos.`,-1),f(e,{code:S,lang:`css`,title:`Variables CSS`}),l(`div`,h,[d[13]||=l(`div`,{class:`demo-title`},`Variables dinámicas`,-1),l(`div`,{class:`var-demo-card`,style:n({color:m.value,background:C.value,borderRadius:w.value+`px`})},[...d[9]||=[l(`p`,null,`Este card cambia de color con variables CSS`,-1)]],4),l(`div`,g,[l(`button`,{class:`primary`,onClick:E},`Colores aleatorios`),l(`button`,{class:`secondary`,onClick:d[0]||=e=>{m.value=`#CFCECD`,C.value=`#1E1B1B`}},`Reset`)]),l(`div`,_,[l(`label`,null,[d[10]||=a(`Color texto: `,-1),t(l(`input`,{type:`color`,"onUpdate:modelValue":d[1]||=e=>m.value=e},null,512),[[u,m.value]])]),l(`label`,v,[d[11]||=a(`Color fondo: `,-1),t(l(`input`,{type:`color`,"onUpdate:modelValue":d[2]||=e=>C.value=e},null,512),[[u,C.value]])]),l(`label`,y,[d[12]||=a(` Border radius: `,-1),t(l(`input`,{type:`range`,"onUpdate:modelValue":d[3]||=e=>w.value=e,min:`0`,max:`30`},null,512),[[u,w.value,void 0,{number:!0}]]),a(` `+i(w.value)+`px `,1)])])])]),d[18]||=s(`<section data-v-a870e332><h2 data-v-a870e332>Consejos</h2><ul data-v-a870e332><li data-v-a870e332>Usá <strong data-v-a870e332>scoped</strong> por defecto para evitar colisiones de CSS</li><li data-v-a870e332>Los estilos globales van en <code data-v-a870e332>src/assets/main.css</code></li><li data-v-a870e332>Usá <strong data-v-a870e332>CSS variables</strong> para temas, colores y spacing consistente</li><li data-v-a870e332>Si necesitás estilos que atraviesen el scoped, usá <code data-v-a870e332>:deep()</code></li></ul></section>`,1)],64))}}),[[`__scopeId`,`data-v-a870e332`]]);export{C as default};