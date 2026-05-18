import { ref, watch } from 'vue'

type Theme = 'light' | 'dark'

const theme = ref<Theme>(
  (localStorage.getItem('theme') as Theme) || 'dark'
)

watch(theme, (val) => {
  localStorage.setItem('theme', val)
  document.documentElement.setAttribute('data-theme', val)
}, { immediate: true })

export function useTheme() {
  function toggle() {
    theme.value = theme.value === 'light' ? 'dark' : 'light'
  }

  return { theme, toggle }
}
