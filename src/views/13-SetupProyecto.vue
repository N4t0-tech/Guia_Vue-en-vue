<script setup lang="ts">
import CodeBlock from '../components/CodeBlock.vue'

const codeCreate = `npm create vue@latest

# Luego responde las preguntas:
# ✔ Package name: mi-app
# ✔ Add TypeScript: Yes
# ✔ Add JSX: No
# ✔ Add Vue Router: Yes
# ✔ Add Pinia: Yes
# ✔ Add Vitest: No
# ✔ Add End-to-End Testing: No
# ✔ Add ESLint: Yes`

const codeStructure = `mi-app/
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
    └── stores/          # Pinia`

const codeVite = `import { defineConfig } from 'vite'
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
})`

const codeAlias = `// En lugar de:
import Button from '../../../components/Button.vue'

// Con alias @/:
import Button from '@/components/Button.vue'`

const codeProxy = `// vite.config.ts
server: {
  proxy: {
    '/api': {
      target: 'http://localhost:4000',
      changeOrigin: true
    }
  }
}

// Ahora fetch('/api/users') va a http://localhost:4000/api/users`
</script>

<template>
  <h1>Setup del proyecto</h1>

  <p>
    Todo proyecto Vue empieza con el comando <code>npm create vue@latest</code>.
    Este scaffolding te genera la estructura base con las mejores prácticas ya configuradas.
  </p>

  <section>
    <h2>Crear un proyecto nuevo</h2>

    <CodeBlock :code="codeCreate" lang="bash" title="npm create vue@latest" />

    <p>Respondé las preguntas según lo que necesites. Para una SPA típica, TypeScript + Vue Router + Pinia es la combinación ideal.</p>
  </section>

  <section>
    <h2>Estructura de archivos</h2>

    <CodeBlock :code="codeStructure" lang="bash" title="Estructura del proyecto" />

    <div class="card">
      <p><strong>index.html</strong> — El HTML raíz. Vite lo usa como entry point y le inyecta el script compilado.</p>
      <p><strong>vite.config.ts</strong> — Acá se configura Vite: plugins, alias, proxy, build.</p>
      <p><strong>src/main.ts</strong> — Crea la app de Vue, registra plugins (router, pinia) y la monta.</p>
      <p><strong>src/App.vue</strong> — Componente raíz. Suele tener el layout general (sidebar, header, router-view).</p>
      <p><strong>src/router/index.ts</strong> — Define las rutas de la aplicación.</p>
      <p><strong>src/stores/</strong> — Stores de Pinia para estado global.</p>
      <p><strong>src/composables/</strong> — Lógica reactiva reutilizable.</p>
    </div>
  </section>

  <section>
    <h2>Alias @/ con Vite</h2>
    <p>El alias <code>@/</code> apunta a la carpeta <code>src/</code>. Así evitás imports relativos largos:</p>

    <CodeBlock :code="codeAlias" lang="typescript" title="Uso del alias @" />

    <p>Se configura en <code>vite.config.ts</code>:</p>
    <CodeBlock :code="codeVite" lang="typescript" title="vite.config.ts" />
  </section>

  <section>
    <h2>Proxy para APIs en desarrollo</h2>
    <p>Cuando el frontend corre en <code>localhost:5173</code> y el backend en otro puerto, configurá un proxy para evitar CORS:</p>

    <CodeBlock :code="codeProxy" lang="typescript" title="Proxy de API" />

    <div class="demo">
      <div class="demo-title">Resumen visual</div>
      <p>Tu navegador → <code>localhost:5173/api/users</code> → Vite proxy → <code>localhost:4000/api/users</code></p>
      <p>El navegador siempre ve el mismo origen, no hay CORS.</p>
    </div>
  </section>
</template>
