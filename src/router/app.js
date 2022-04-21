const appRoutes = [
  {
    paht: '/login',
    name: 'Login',
    meta: {
      nameFa: 'ورود'
    },
    component: () => import('@/views/app/AppLogin.vue')
  },
  {
    paht: '/register',
    name: 'Rogin',
    meta: {
      nameFa: 'ثبت نام'
    },
    component: () => import('@/views/app/AppRegister.vue')
  }
]

export default appRoutes
