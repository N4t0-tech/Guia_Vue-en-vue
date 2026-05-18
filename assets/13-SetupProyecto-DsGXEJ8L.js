import{t as e}from"./CodeBlock-DSd9V9-T.js";import{_ as t,d as n,g as r,h as i,p as a,v as o,w as s,y as c}from"./index-DuKBGh4e.js";var l=`npm create vue@latest

# Luego responde las preguntas:
# ✔ Package name: mi-app
# ✔ Add TypeScript: Yes
# ✔ Add JSX: No
# ✔ Add Vue Router: Yes
# ✔ Add Pinia: Yes
# ✔ Add Vitest: No
# ✔ Add End-to-End Testing: No
# ✔ Add ESLint: Yes`,u=`mi-app/
├── index.html           # Entry point HTML
├── vite.config.ts       # Configuración de Vite
├── tsconfig.json        # TS config raíz
├── tsconfig.app.json    # TS config para src/
├── tsconfig.node.json   # TS config para node/
├── env.d.ts             # Tipado para Vite env
├── public/              # Archivos estáticos
│   └── favicon.ico
└── src/
    ├── main.ts          # Punto de entrada
    ├── App.vue          # Componente raíz
    ├── assets/          # CSS, imágenes
    ├── components/      # Componentes
    ├── views/           # Páginas
    ├── router/          # Vue Router
    └── stores/          # Pinia`,d=`import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'node:url'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        changeOrigin: true
      }
    }
  }
})`,f=`// En lugar de:
import Button from '../../../components/Button.vue'

// Con alias @/:
import Button from '@/components/Button.vue'`,p=`// vite.config.ts
server: {
  proxy: {
    '/api': {
      target: 'http://localhost:4000',
      changeOrigin: true
    }
  }
}

// Ahora fetch('/api/users') va a http://localhost:4000/api/users`,m=c({__name:`13-SetupProyecto`,setup(c){return(c,m)=>(s(),i(n,null,[m[10]||=a(`h1`,null,`Setup del proyecto`,-1),m[11]||=a(`p`,null,[t(` Todo proyecto Vue empieza con el comando `),a(`code`,null,`npm create vue@latest`),t(`. Este scaffolding te genera la estructura base con las mejores prácticas ya configuradas. `)],-1),a(`section`,null,[m[0]||=a(`h2`,null,`Crear un proyecto nuevo`,-1),o(e,{code:l,lang:`bash`,title:`npm create vue@latest`}),m[1]||=a(`p`,null,`Respondé las preguntas según lo que necesites. Para una SPA típica, TypeScript + Vue Router + Pinia es la combinación ideal.`,-1)]),a(`section`,null,[m[2]||=a(`h2`,null,`Estructura de archivos`,-1),o(e,{code:u,lang:`bash`,title:`Estructura del proyecto`}),m[3]||=r(`<div class="card"><p><strong>index.html</strong> — El HTML raíz. Vite lo usa como entry point y le inyecta el script compilado.</p><p><strong>vite.config.ts</strong> — Acá se configura Vite: plugins, alias, proxy, build.</p><p><strong>src/main.ts</strong> — Crea la app de Vue, registra plugins (router, pinia) y la monta.</p><p><strong>src/App.vue</strong> — Componente raíz. Suele tener el layout general (sidebar, header, router-view).</p><p><strong>src/router/index.ts</strong> — Define las rutas de la aplicación.</p><p><strong>src/stores/</strong> — Stores de Pinia para estado global.</p><p><strong>src/composables/</strong> — Lógica reactiva reutilizable.</p></div>`,1)]),a(`section`,null,[m[4]||=a(`h2`,null,`Alias @/ con Vite`,-1),m[5]||=a(`p`,null,[t(`El alias `),a(`code`,null,`@/`),t(` apunta a la carpeta `),a(`code`,null,`src/`),t(`. Así evitás imports relativos largos:`)],-1),o(e,{code:f,lang:`typescript`,title:`Uso del alias @`}),m[6]||=a(`p`,null,[t(`Se configura en `),a(`code`,null,`vite.config.ts`),t(`:`)],-1),o(e,{code:d,lang:`typescript`,title:`vite.config.ts`})]),a(`section`,null,[m[7]||=a(`h2`,null,`Proxy para APIs en desarrollo`,-1),m[8]||=a(`p`,null,[t(`Cuando el frontend corre en `),a(`code`,null,`localhost:5173`),t(` y el backend en otro puerto, configurá un proxy para evitar CORS:`)],-1),o(e,{code:p,lang:`typescript`,title:`Proxy de API`}),m[9]||=a(`div`,{class:`demo`},[a(`div`,{class:`demo-title`},`Resumen visual`),a(`p`,null,[t(`Tu navegador → `),a(`code`,null,`localhost:5173/api/users`),t(` → Vite proxy → `),a(`code`,null,`localhost:4000/api/users`)]),a(`p`,null,`El navegador siempre ve el mismo origen, no hay CORS.`)],-1)])],64))}});export{m as default};