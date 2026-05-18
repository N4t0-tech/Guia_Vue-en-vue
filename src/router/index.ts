import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    redirect: '/introduccion'
  },
  {
    path: '/introduccion',
    name: 'Introduccion',
    component: () => import('../views/01-Introduccion.vue')
  },
  {
    path: '/composition-api',
    name: 'CompositionApi',
    component: () => import('../views/02-CompositionApi.vue')
  },
  {
    path: '/componentes',
    name: 'Componentes',
    component: () => import('../views/03-Componentes.vue')
  },
  {
    path: '/directivas',
    name: 'Directivas',
    component: () => import('../views/04-Directivas.vue')
  },
  {
    path: '/router',
    name: 'Router',
    component: () => import('../views/05-Router.vue')
  },
  {
    path: '/pinia',
    name: 'Pinia',
    component: () => import('../views/06-Pinia.vue')
  },
  {
    path: '/peticiones',
    name: 'Peticiones',
    component: () => import('../views/07-Peticiones.vue')
  },
  {
    path: '/ciclo-vida',
    name: 'CicloVida',
    component: () => import('../views/08-CicloVida.vue')
  },
  {
    path: '/estilos',
    name: 'Estilos',
    component: () => import('../views/09-Estilos.vue')
  },
  {
    path: '/composables',
    name: 'Composables',
    component: () => import('../views/10-Composables.vue')
  },
  {
    path: '/formularios',
    name: 'Formularios',
    component: () => import('../views/11-Formularios.vue')
  },
  {
    path: '/despliegue',
    name: 'Despliegue',
    component: () => import('../views/12-Despliegue.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
