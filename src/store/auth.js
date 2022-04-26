import { defineStore } from 'pinia'
import { useFetch } from '@/services/useFetch'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    token: null,
    user: null
  }),
  getters: {
    authenticated (state) {
      return state.token && state.user
    },
    userInformation (state) {
      return state.user
    }
  },
  actions: {
    async checkValidate (code) {
      try {
        const res = await useFetch('User.CheckOtp', { code })
        this.token = res.data
      } catch (error) {
        return error
      }
    }
  }
})
