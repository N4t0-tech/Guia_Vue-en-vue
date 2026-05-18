<script setup lang="ts">
const emit = defineEmits<{
  click: [value: number]
}>()

function sendNumber() {
  emit('click', Math.floor(Math.random() * 100))
}
</script>

<template>
  <div class="child-card">
    <p><strong>Componente hijo</strong></p>
    <button class="primary" @click="sendNumber">
      Enviar número aleatorio al padre
    </button>
  </div>
</template>

<style scoped>
.child-card {
  margin-bottom: 0.5rem;
  padding: 1rem;
  border: 2px dashed var(--accent);
  border-radius: 8px;
  background: var(--bg-soft);
}

.child-card p {
  margin-bottom: 0.5rem;
}
</style>
