<script setup lang="ts">
import { ref } from 'vue'
import CodeBlock from '../components/CodeBlock.vue'
import ChildPropExample from '../components/ChildPropExample.vue'
import ChildEmitExample from '../components/ChildEmitExample.vue'

const codeProps = `<!-- Hijo.vue -->
<script setup lang="ts">
defineProps<{
  message: string
  count: number
}>()
<\/script>

<template>
  <p>{{ message }} — Contador: {{ count }}</p>
</template>`

const codeEmits = `<!-- Hijo.vue -->
<script setup lang="ts">
const emit = defineEmits<{
  click: [value: number]
}>()

function handleClick() {
  emit('click', 42)
}
<\/script>

<template>
  <button @click="handleClick">
    Enviar evento
  </button>
</template>`

const codeSlots = `<!-- Layout.vue -->
<div class="card">
  <header>
    <slot name="header" />
  </header>
  <main>
    <slot />
  </main>
</div>

<!-- Uso -->
<Layout>
  <template #header>
    <h2>Título</h2>
  </template>
  <p>Contenido principal</p>
</Layout>`

const codeVModel = `<!-- InputPersonalizado.vue -->
<script setup lang="ts">
defineProps<{ modelValue: string }>()
const emit = defineEmits<{
  'update:modelValue': [value: string]
}>()
<\/script>

<template>
  <input
    :value="modelValue"
    @input="emit('update:modelValue', ($event.target as HTMLInputElement).value)"
  />
</template>`

const parentMessage = ref('Hola desde el padre')
const parentNumber = ref(5)
const emitValue = ref(0)
const slotText = ref('')
</script>

<template>
  <h1>Componentes</h1>

  <p>
    Los componentes son el bloque fundamental de Vue. Cada componente encapsula
    su propio template, lógica y estilos. Se comunican entre sí mediante
    <strong>props</strong> (padre → hijo) y <strong>emits</strong> (hijo → padre).
  </p>

  <section>
    <h2>Props — Datos del padre al hijo</h2>
    <p>Las <code>props</code> son atributos personalizados que el padre pasa al hijo. Son de solo lectura.</p>

    <CodeBlock :code="codeProps" lang="vue" title="Hijo — defineProps" />

    <div class="demo">
      <div class="demo-title">Pruébalo</div>
      <input v-model="parentMessage" placeholder="Mensaje para el hijo" />
      <ChildPropExample :message="parentMessage" :count="parentNumber" />
    </div>
  </section>

  <section>
    <h2>Emits — Del hijo al padre</h2>
    <p>Los hijos emiten eventos hacia el padre usando <code>defineEmits</code>. El padre escucha con <code>@</code>.</p>

    <CodeBlock :code="codeEmits" lang="vue" title="Hijo — defineEmits" />

    <div class="demo">
      <div class="demo-title">Pruébalo</div>
      <ChildEmitExample @click="(v: number) => emitValue = v" />
      <p>Valor recibido del hijo: <strong>{{ emitValue }}</strong></p>
    </div>
  </section>

  <section>
    <h2>Slots — Contenido proyectado</h2>
    <p>Los <code>slots</code> permiten pasar contenido HTML del padre al hijo, como si el hijo tuviera "huecos" rellenables.</p>

    <CodeBlock :code="codeSlots" lang="vue" title="Slots nombrados" />

    <div class="demo">
      <div class="demo-title">Pruébalo</div>
      <div class="card" style="border: 2px solid var(--accent)">
        <header style="border-bottom:1px solid var(--border);padding-bottom:0.5rem;margin-bottom:0.5rem">
          <slot name="demo-header">
            <h3 style="margin:0">Título por defecto</h3>
          </slot>
        </header>
        <main>
          <slot name="demo-content">
            <p>Contenido por defecto</p>
          </slot>
        </main>
      </div>
      <input v-model="slotText" placeholder="Texto para el slot" style="margin-top:0.5rem" />
      <div style="margin-top:0.5rem">
        <button class="primary" @click="() => {}">Usar slot</button>
      </div>
    </div>
  </section>

  <section>
    <h2>v-model en componentes</h2>
    <p>Podés usar <code>v-model</code> en tus propios componentes. Es un atajo para <code>:modelValue + @update:modelValue</code>.</p>

    <CodeBlock :code="codeVModel" lang="vue" title="Componente con v-model" />
  </section>
</template>
