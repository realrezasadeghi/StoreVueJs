const appRoutes = [
  {
    path: '/login',
    name: 'Login',
    meta: {
      nameFa: 'ورود'
    },
    component: () => import('@/views/app/AppLogin.vue')
  }
]

export default appRoutes
