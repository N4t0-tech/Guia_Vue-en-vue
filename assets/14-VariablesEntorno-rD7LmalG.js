import{t as e}from"./CodeBlock-DSd9V9-T.js";import{M as t,R as n,_ as r,d as i,g as a,h as o,p as s,v as c,w as l,y as u}from"./index-DuKBGh4e.js";var d={class:`demo`},f={style:{display:`flex`,gap:`0.5rem`,"margin-bottom":`1rem`}},p={class:`card`,style:{"margin-bottom":`0`}},m={style:{color:`var(--accent)`}},h=`# .env — variables para todos los entornos
VITE_APP_TITLE=BeautySkin

# .env.development — se usa con npm run dev
VITE_API_URL=http://localhost:4000/api

# .env.production — se usa con npm run build
VITE_API_URL=https://api.misitio.com`,g=`// En cualquier componente o composable
const apiUrl = import.meta.env.VITE_API_URL
const title = import.meta.env.VITE_APP_TITLE

console.log(apiUrl) // http://localhost:4000/api (dev)
//                      https://api.misitio.com (prod)`,_=`// env.d.ts
/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_API_URL: string
  readonly VITE_APP_TITLE: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}`,v=u({__name:`14-VariablesEntorno`,setup(u){let v=t(!0);return v.value,v.value,(t,u)=>(l(),o(i,null,[u[12]||=s(`h1`,null,`Variables de entorno`,-1),u[13]||=s(`p`,null,[r(` Las variables de entorno permiten configurar tu app según el entorno (desarrollo, producción) sin hardcodear valores. Vite las expone con el prefijo `),s(`code`,null,`VITE_`),r(` para que estén disponibles en el frontend. `)],-1),s(`section`,null,[u[1]||=s(`h2`,null,`Archivos .env`,-1),c(e,{code:h,lang:`bash`,title:`Archivos de entorno`}),u[2]||=a(`<p>Vite carga automáticamente:</p><ul><li><code>.env</code> — siempre</li><li><code>.env.development</code> — con <code>npm run dev</code></li><li><code>.env.production</code> — con <code>npm run build</code></li><li><code>.env.local</code> — siempre, pero no se sube a git (para secretos locales)</li></ul>`,2)]),s(`section`,null,[u[8]||=s(`h2`,null,`Acceder a las variables`,-1),u[9]||=s(`p`,null,[r(`Usá `),s(`code`,null,`import.meta.env`),r(` para acceder. Solo las variables que empiezan con `),s(`code`,null,`VITE_`),r(` son accesibles desde el frontend.`)],-1),c(e,{code:g,lang:`typescript`,title:`Leer variables`}),s(`div`,d,[u[7]||=s(`div`,{class:`demo-title`},`Demo interactiva`,-1),s(`div`,f,[s(`button`,{class:`primary`,onClick:u[0]||=e=>v.value=!v.value},` Cambiar a `+n(v.value?`producción`:`desarrollo`),1)]),s(`div`,p,[s(`p`,null,[u[3]||=s(`strong`,null,`Entorno:`,-1),r(` `+n(v.value?`development`:`production`),1)]),s(`p`,null,[u[4]||=s(`strong`,null,`VITE_API_URL:`,-1),u[5]||=r(),s(`span`,m,n(v.value?`http://localhost:4000/api`:`https://api.misitio.com`),1)]),u[6]||=s(`p`,null,[s(`strong`,null,`VITE_APP_TITLE:`),r(),s(`span`,{style:{color:`var(--accent)`}},`BeautySkin`)],-1)])])]),s(`section`,null,[u[10]||=s(`h2`,null,`Tipado con TypeScript`,-1),u[11]||=s(`p`,null,[r(`Para tener autocompletado y type safety, declará tus variables en `),s(`code`,null,`env.d.ts`),r(`:`)],-1),c(e,{code:_,lang:`typescript`,title:`env.d.ts`})]),u[14]||=a(`<section><h2>Buenas prácticas</h2><ul><li>Siempre usá el prefijo <code>VITE_</code> — si no, no estarán disponibles</li><li>Agregá <code>.env.local</code> a <code>.gitignore</code></li><li>Creá un archivo <code>.env.example</code> en el repo con las variables necesarias (sin valores reales)</li><li>Tipá las variables en <code>env.d.ts</code> para tener autocompletado</li></ul></section>`,1)],64))}});export{v as default};