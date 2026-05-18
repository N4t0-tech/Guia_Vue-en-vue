<script setup lang="ts">
defineProps<{
  message: string
  count: number
}>()
</script>

<template>
  <div class="child-card">
    <p><strong>Componente hijo</strong></p>
    <p>Mensaje recibido: <em>{{ message }}</em></p>
    <p>Contador: <span class="badge">{{ count }}</span></p>
  </div>
</template>

<style scoped>
.child-card {
  margin-top: 0.5rem;
  padding: 1rem;
  border: 2px dashed var(--accent);
  border-radius: 8px;
  background: var(--bg-soft);
}

.child-card p {
  margin-bottom: 0.3rem;
}
</style>
