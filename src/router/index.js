import { createRouter, createWebHistory } from 'vue-router'
import AddContact from '../views/AddContact.vue'
import AllContacts from '../views/AllContacts.vue'

const routes = [
  { path: '/', component: AllContacts },
  { path: '/add', component: AddContact },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
