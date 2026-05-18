<script setup lang="ts">
import { ref, onMounted } from 'vue'
import hljs from 'highlight.js'
import 'highlight.js/styles/atom-one-dark-reasonable.css'

const props = withDefaults(defineProps<{
  code: string
  lang?: string
  title?: string
}>(), {
  lang: 'typescript',
  title: ''
})

const codeRef = ref<HTMLElement>()
const copied = ref(false)

onMounted(() => {
  if (codeRef.value) {
    hljs.highlightElement(codeRef.value)
  }
})

async function copyCode() {
  try {
    await navigator.clipboard.writeText(props.code)
    copied.value = true
    setTimeout(() => { copied.value = false }, 2000)
  } catch {
    // fallback
  }
}
</script>

<template>
  <div class="code-block">
    <div v-if="title" class="code-header">
      <span class="code-title">{{ title }}</span>
      <span class="code-lang">{{ lang }}</span>
    </div>
    <div class="code-body">
      <pre><code ref="codeRef" :class="`language-${lang}`">{{ code }}</code></pre>
      <button class="copy-btn" @click="copyCode">
        {{ copied ? 'copied' : 'copy' }}
      </button>
    </div>
  </div>
</template>

<style scoped>
.code-block {
  margin-bottom: 1.5rem;
  border: 1px solid var(--border);
}

.code-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.4rem 1rem;
  background: var(--code-bg);
  border-bottom: 1px solid var(--border);
  font-size: 0.75rem;
}

.code-title {
  color: var(--text-heading);
  font-weight: 500;
}

.code-lang {
  color: var(--text-dim);
  text-transform: uppercase;
  font-size: 0.65rem;
}

.code-body {
  position: relative;
}

.code-body pre {
  margin: 0;
  border: none;
}

.copy-btn {
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  background: transparent;
  border: 1px solid var(--border);
  padding: 0.2rem 0.6rem;
  font-size: 0.7rem;
  cursor: pointer;
  opacity: 0;
  transition: opacity 0.15s;
  color: var(--text-dim);
  text-transform: lowercase;
}

.code-body:hover .copy-btn {
  opacity: 1;
}

.copy-btn:hover {
  border-color: var(--text-heading);
  color: var(--text-heading);
}
</style>
