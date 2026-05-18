<script setup lang="ts">
import { ref, provide, inject, type Ref, type InjectionKey } from 'vue'
import CodeBlock from '../components/CodeBlock.vue'

const codeProblem = `<!-- App.vue pasa datos a → Header → UserAvatar -->
<!-- App.vue -->
<Header :user="user" />

<!-- Header.vue -->
<UserAvatar :user="user" />

<!-- UserAvatar.vue -->
<img :src="user.avatar" :alt="user.name" />
<!-- ^^ solo UserAvatar necesita "user",
     pero Header recibe una prop que no usa -->`

const codeProvide = `// App.vue — proveedor
import { provide, ref } from 'vue'

const user = ref({ name: 'Ana', avatar: '/avatar.jpg' })
provide('user', user)`

const codeInject = `// UserAvatar.vue — cualquier descendiente
import { inject } from 'vue'

const user = inject('user')
// user → { name: 'Ana', avatar: '/avatar.jpg' }`

const codeKey = `// keys.ts
import type { InjectionKey, Ref } from 'vue'

interface User {
  name: string
  avatar: string
}

export const userKey: InjectionKey<Ref<User>> = Symbol('user')`

const codeProvideInject = `// App.vue
import { provide } from 'vue'
import { userKey } from './keys'

provide(userKey, user)

// UserAvatar.vue
import { inject } from 'vue'
import { userKey } from './keys'

const user = inject(userKey)!`

const codeVsPinia = `// Provide/Inject — estado entre padre e hijos
// No es global, no es reactivo por defecto, no hay DevTools

// Pinia — estado global
// Cualquier componente accede, es reactivo, hay DevTools
// Ideal para: auth, carrito, config`

const theme = ref('oscuro')

provide('theme', theme)

const injectedTheme = inject<Ref<string>>('theme', ref('oscuro'))

function toggleThemeDemo() {
  theme.value = theme.value === 'oscuro' ? 'claro' : 'oscuro'
}
</script>

<template>
  <h1>Provide / Inject</h1>

  <p>
    Normalmente los componentes se comunican con <strong>props</strong> (padre → hijo)
    y <strong>emits</strong> (hijo → padre). Pero cuando tenés una cadena profunda
    de componentes y un ancestro lejano necesita pasar datos a un descendiente,
    pasarlo por cada nivel es tedioso. Ahí entra <code>provide</code> / <code>inject</code>.
  </p>

  <section>
    <h2>El problema: prop drilling</h2>

    <CodeBlock :code="codeProblem" lang="vue" title="Prop drilling" />

    <p><code>Header</code> recibe <code>user</code> solo para pasárselo a <code>UserAvatar</code>. Con muchos niveles, esto se vuelve inmanejable.</p>
  </section>

  <section>
    <h2>Solución: Provide / Inject</h2>
    <p>El ancestro <strong>provee</strong> un valor, y cualquier descendiente <strong>inyecta</strong> ese valor directamente, sin pasar por los niveles intermedios.</p>

    <CodeBlock :code="codeProvide" lang="typescript" title="App.vue — provee" />
    <CodeBlock :code="codeInject" lang="typescript" title="UserAvatar.vue — inyecta" />
  </section>

  <section>
    <h2>Con TypeScript — InjectionKey</h2>
    <p>Usá <code>InjectionKey</code> para tener type safety y evitar errores con strings:</p>

    <CodeBlock :code="codeKey" lang="typescript" title="keys.ts" />
    <CodeBlock :code="codeProvideInject" lang="typescript" title="Provide/Inject tipado" />
  </section>

  <section>
    <h2>vs Pinia: ¿cuándo usar cada uno?</h2>

    <CodeBlock :code="codeVsPinia" lang="typescript" title="Provide/Inject vs Pinia" />

    <div class="card">
      <p><strong>Usá provide/inject</strong> cuando:</p>
      <ul>
        <li>El estado solo lo necesita un subárbol de componentes</li>
        <li>Es una relación padre → descendiente clara</li>
        <li>No necesitás persistencia ni DevTools</li>
      </ul>
      <p style="margin-top:0.8rem"><strong>Usá Pinia</strong> cuando:</p>
      <ul>
        <li>El estado es global (auth, carrito, config)</li>
        <li>Varios componentes no relacionados lo necesitan</li>
        <li>Querés DevTools para debugging</li>
      </ul>
    </div>
  </section>

  <section>
    <h2>Demo interactiva</h2>
    <div class="demo">
      <div class="demo-title">Provide / Inject en acción</div>
      <p>Tema proveído desde esta vista e inyectado por un "hijo": <strong>{{ injectedTheme }}</strong></p>
      <button class="primary" @click="toggleThemeDemo" style="margin-top:0.5rem">
        Cambiar tema (provide)
      </button>
    </div>
  </section>
</template>
