<script setup lang="ts">
import { ref } from 'vue'
import CodeBlock from '../components/CodeBlock.vue'

const codeScoped = `<!-- Componente.vue -->
<template>
  <p class="titulo">Este texto es azul solo aquí</p>
</template>

<style scoped>
.titulo {
  color: blue;
}
</style>`

const codeGlobal = `/* main.css */
body {
  font-family: 'Inter', sans-serif;
  background: #161414;
  color: #D6D2D2;
}`

const codeVars = `:root {
  --color-primary: #CFCECD;
  --spacing: 1rem;
}

.card {
  padding: var(--spacing);
  border: 1px solid var(--color-primary);
}`

const textColor = ref('#CFCECD')
const bgColor = ref('#1E1B1B')
const borderRadius = ref('10')

function randomColor(): string {
  const letters = '0123456789abcdef'
  let color = '#'
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)]
  }
  return color
}

function randomizeColors() {
  textColor.value = randomColor()
  bgColor.value = randomColor()
}
</script>

<template>
  <h1>Estilos en Vue</h1>

  <p>
    Vue ofrece un sistema de estilos flexible: podés usar CSS global, estilos
    <strong>scoped</strong> que solo afectan al componente actual, o módulos CSS.
    También podés usar cualquier preprocesador (SCSS, PostCSS, etc.).
  </p>

  <section>
    <h2>Estilos scoped</h2>
    <p>
      El atributo <code>scoped</code> en la etiqueta <code>&lt;style&gt;</code>
      hace que los estilos solo apliquen al componente actual. Vue agrega un
      atributo único a cada elemento y modifica los selectores CSS.
    </p>

    <CodeBlock :code="codeScoped" lang="vue" title="Estilos scoped" />

    <div class="demo">
      <div class="demo-title">Scoped en acción</div>
      <p class="scoped-demo">Este texto usa un estilo scoped (solo existe en este componente).</p>
    </div>
  </section>

  <section>
    <h2>Estilos globales</h2>
    <p>Los estilos importados en <code>main.ts</code> o en <code>&lt;style&gt;</code> sin <code>scoped</code> son globales y afectan a todo el proyecto.</p>

    <CodeBlock :code="codeGlobal" lang="css" title="CSS global" />
  </section>

  <section>
    <h2>CSS Variables — Temas dinámicos</h2>
    <p>Esta misma guía usa CSS variables para el tema claro/oscuro. Podés cambiar variables desde JavaScript para crear temas dinámicos.</p>

    <CodeBlock :code="codeVars" lang="css" title="Variables CSS" />

    <div class="demo">
      <div class="demo-title">Variables dinámicas</div>

      <div class="var-demo-card" :style="{ color: textColor, background: bgColor, borderRadius: borderRadius + 'px' }">
        <p>Este card cambia de color con variables CSS</p>
      </div>

      <div style="display:flex;gap:0.5rem;flex-wrap:wrap;margin-top:0.5rem">
        <button class="primary" @click="randomizeColors">Colores aleatorios</button>
        <button class="secondary" @click="textColor = '#CFCECD'; bgColor = '#1E1B1B'">Reset</button>
      </div>

      <div style="margin-top:0.8rem;font-size:0.85rem">
        <label>Color texto: <input type="color" v-model="textColor" /></label>
        <label style="margin-left:0.5rem">Color fondo: <input type="color" v-model="bgColor" /></label>
        <label style="margin-left:0.5rem">
          Border radius:
          <input type="range" v-model.number="borderRadius" min="0" max="30" />
          {{ borderRadius }}px
        </label>
      </div>
    </div>
  </section>

  <section>
    <h2>Consejos</h2>
    <ul>
      <li>Usá <strong>scoped</strong> por defecto para evitar colisiones de CSS</li>
      <li>Los estilos globales van en <code>src/assets/main.css</code></li>
      <li>Usá <strong>CSS variables</strong> para temas, colores y spacing consistente</li>
      <li>Si necesitás estilos que atraviesen el scoped, usá <code>:deep()</code></li>
    </ul>
  </section>
</template>

<style scoped>
.scoped-demo {
  padding: 1rem;
  background: var(--card-bg);
  border-left: 4px solid var(--accent);
  border-radius: 4px;
  font-weight: 600;
}

.var-demo-card {
  padding: 1.5rem;
  text-align: center;
  font-weight: 600;
  transition: all 0.3s;
}
</style>
