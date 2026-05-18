<script setup lang="ts">
import { ref, reactive, computed } from 'vue'
import CodeBlock from '../components/CodeBlock.vue'

const codeInputs = `<!-- Texto -->
<input v-model="name" placeholder="Nombre" />

<!-- Número -->
<input type="number" v-model.number="age" />

<!-- Checkbox -->
<input type="checkbox" v-model="agree" /> Acepto términos

<!-- Select -->
<select v-model="country">
  <option value="">Seleccioná...</option>
  <option value="ar">Argentina</option>
  <option value="mx">México</option>
</select>

<!-- Textarea -->
<textarea v-model="bio" />`

const codeValidation = `const errors = reactive({
  name: '',
  email: ''
})

function validate() {
  let valid = true
  if (!form.name.trim()) {
    errors.name = 'El nombre es obligatorio'
    valid = false
  } else {
    errors.name = ''
  }
  // ...
  return valid
}`

const codeSubmit = `async function handleSubmit() {
  if (!validate()) return

  loading.value = true
  try {
    await fetch('/api/users', {
      method: 'POST',
      body: JSON.stringify(form)
    })
    alert('Guardado con éxito')
  } catch (e) {
    error.value = 'Error al guardar'
  } finally {
    loading.value = false
  }
}`

interface FormData {
  name: string
  email: string
  age: number | null
  country: string
  agree: boolean
  bio: string
}

const form = reactive<FormData>({
  name: '',
  email: '',
  age: null,
  country: '',
  agree: false,
  bio: ''
})

const errors = reactive({
  name: '',
  email: ''
})

const submitted = ref(false)
const isSubmitting = ref(false)

const isValid = computed(() => {
  return form.name.trim().length > 0 &&
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email) &&
    form.agree
})

function validate(): boolean {
  let valid = true

  if (!form.name.trim()) {
    errors.name = 'El nombre es obligatorio'
    valid = false
  } else {
    errors.name = ''
  }

  if (!form.email.trim()) {
    errors.email = 'El email es obligatorio'
    valid = false
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    errors.email = 'Email inválido'
    valid = false
  } else {
    errors.email = ''
  }

  return valid
}

function handleSubmit() {
  if (!validate()) return

  isSubmitting.value = true
  setTimeout(() => {
    submitted.value = true
    isSubmitting.value = false
  }, 1000)
}
</script>

<template>
  <h1>Formularios</h1>

  <p>
    Vue hace que trabajar con formularios sea muy cómodo gracias a <code>v-model</code>.
    Con el modificador <code>.number</code> o <code>.trim</code> podés controlar
    el tipo de dato que se enlaza.
  </p>

  <section>
    <h2>Binding con v-model</h2>

    <CodeBlock :code="codeInputs" lang="html" title="Tipos de input con v-model" />
  </section>

  <section>
    <h2>Validación básica</h2>

    <CodeBlock :code="codeValidation" lang="typescript" title="Validación manual" />
  </section>

  <section>
    <h2>Submit y petición</h2>

    <CodeBlock :code="codeSubmit" lang="typescript" title="Manejo del submit" />
  </section>

  <section>
    <h2>Demo: Formulario completo</h2>

    <div class="demo">
      <div class="demo-title">Formulario con validación</div>

      <form v-if="!submitted" @submit.prevent="handleSubmit" style="display:flex;flex-direction:column;gap:1rem">
        <div>
          <label style="display:block;margin-bottom:0.3rem;font-weight:600">Nombre</label>
          <input v-model.trim="form.name" placeholder="Tu nombre" style="width:100%" />
          <p v-if="errors.name" style="color:#e74c3c;font-size:0.85rem;margin-top:0.2rem">{{ errors.name }}</p>
        </div>

        <div>
          <label style="display:block;margin-bottom:0.3rem;font-weight:600">Email</label>
          <input v-model="form.email" type="email" placeholder="email@ejemplo.com" style="width:100%" />
          <p v-if="errors.email" style="color:#e74c3c;font-size:0.85rem;margin-top:0.2rem">{{ errors.email }}</p>
        </div>

        <div>
          <label style="display:block;margin-bottom:0.3rem;font-weight:600">Edad</label>
          <input v-model.number="form.age" type="number" placeholder="18" style="width:100%" />
        </div>

        <div>
          <label style="display:block;margin-bottom:0.3rem;font-weight:600">País</label>
          <select v-model="form.country" style="width:100%">
            <option value="">Seleccioná...</option>
            <option value="ar">Argentina</option>
            <option value="mx">México</option>
            <option value="es">España</option>
            <option value="co">Colombia</option>
          </select>
        </div>

        <div>
          <label style="display:block;margin-bottom:0.3rem;font-weight:600">Bio</label>
          <textarea v-model="form.bio" placeholder="Contá algo sobre vos..." rows="3" style="width:100%;resize:vertical" />
        </div>

        <div>
          <label style="display:flex;align-items:center;gap:0.5rem;cursor:pointer">
            <input type="checkbox" v-model="form.agree" />
            Acepto los términos y condiciones
          </label>
        </div>

        <button type="submit" class="primary" :disabled="isSubmitting" style="align-self:flex-start">
          {{ isSubmitting ? 'Enviando...' : 'Enviar' }}
        </button>
      </form>

      <div v-else class="card">
        <p>✅ Formulario enviado con éxito</p>
        <pre style="margin-top:0.5rem;font-size:0.85rem">{{ JSON.stringify(form, null, 2) }}</pre>
        <button class="secondary" @click="submitted = false" style="margin-top:0.5rem">Reiniciar</button>
      </div>
    </div>
  </section>

  <section>
    <h2>Consejos</h2>
    <ul>
      <li>Usá <code>v-model.trim</code> y <code>v-model.number</code> para normalizar datos</li>
      <li>Creá un <strong>composable useForm</strong> si tenés muchos formularios</li>
      <li>Para validación compleja, considerá <a href="https://vee-validate.logaretm.com/v4/" target="_blank" rel="noopener">VeeValidate</a> o <a href="https://zod.dev" target="_blank" rel="noopener">Zod</a></li>
      <li>Deshabilitá el botón de submit mientras se envía para evitar envíos duplicados</li>
    </ul>
  </section>
</template>
