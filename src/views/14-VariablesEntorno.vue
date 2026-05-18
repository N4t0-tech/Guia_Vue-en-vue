<script setup lang="ts">
import { ref } from 'vue'
import CodeBlock from '../components/CodeBlock.vue'

const codeEnv = `# .env — variables para todos los entornos
VITE_APP_TITLE=BeautySkin

# .env.development — se usa con npm run dev
VITE_API_URL=http://localhost:4000/api

# .env.production — se usa con npm run build
VITE_API_URL=https://api.misitio.com`

const codeAccess = `// En cualquier componente o composable
const apiUrl = import.meta.env.VITE_API_URL
const title = import.meta.env.VITE_APP_TITLE

console.log(apiUrl) // http://localhost:4000/api (dev)
//                      https://api.misitio.com (prod)`

const codeTyping = `// env.d.ts
/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_API_URL: string
  readonly VITE_APP_TITLE: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}`

const showDev = ref(true)
const envVars = {
  VITE_API_URL: showDev.value
    ? 'http://localhost:4000/api'
    : 'https://api.misitio.com',
  VITE_APP_TITLE: 'BeautySkin',
  VITE_MODE: showDev.value ? 'development' : 'production'
}
</script>

<template>
  <h1>Variables de entorno</h1>

  <p>
    Las variables de entorno permiten configurar tu app según el entorno
    (desarrollo, producción) sin hardcodear valores. Vite las expone con el
    prefijo <code>VITE_</code> para que estén disponibles en el frontend.
  </p>

  <section>
    <h2>Archivos .env</h2>

    <CodeBlock :code="codeEnv" lang="bash" title="Archivos de entorno" />

    <p>Vite carga automáticamente:</p>
    <ul>
      <li><code>.env</code> — siempre</li>
      <li><code>.env.development</code> — con <code>npm run dev</code></li>
      <li><code>.env.production</code> — con <code>npm run build</code></li>
      <li><code>.env.local</code> — siempre, pero no se sube a git (para secretos locales)</li>
    </ul>
  </section>

  <section>
    <h2>Acceder a las variables</h2>
    <p>Usá <code>import.meta.env</code> para acceder. Solo las variables que empiezan con <code>VITE_</code> son accesibles desde el frontend.</p>

    <CodeBlock :code="codeAccess" lang="typescript" title="Leer variables" />

    <div class="demo">
      <div class="demo-title">Demo interactiva</div>
      <div style="display:flex;gap:0.5rem;margin-bottom:1rem">
        <button class="primary" @click="showDev = !showDev">
          Cambiar a {{ showDev ? 'producción' : 'desarrollo' }}
        </button>
      </div>
      <div class="card" style="margin-bottom:0">
        <p><strong>Entorno:</strong> {{ showDev ? 'development' : 'production' }}</p>
        <p><strong>VITE_API_URL:</strong> <span style="color:var(--accent)">{{ showDev ? 'http://localhost:4000/api' : 'https://api.misitio.com' }}</span></p>
        <p><strong>VITE_APP_TITLE:</strong> <span style="color:var(--accent)">BeautySkin</span></p>
      </div>
    </div>
  </section>

  <section>
    <h2>Tipado con TypeScript</h2>
    <p>Para tener autocompletado y type safety, declará tus variables en <code>env.d.ts</code>:</p>

    <CodeBlock :code="codeTyping" lang="typescript" title="env.d.ts" />
  </section>

  <section>
    <h2>Buenas prácticas</h2>
    <ul>
      <li>Siempre usá el prefijo <code>VITE_</code> — si no, no estarán disponibles</li>
      <li>Agregá <code>.env.local</code> a <code>.gitignore</code></li>
      <li>Creá un archivo <code>.env.example</code> en el repo con las variables necesarias (sin valores reales)</li>
      <li>Tipá las variables en <code>env.d.ts</code> para tener autocompletado</li>
    </ul>
  </section>
</template>
