import { defineStore } from 'pinia'
import { useFetch } from '@/services/useFetch'
import decodeToken from '@/utils/jwtDecode'

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
    async checkOtp (payload) {
      try {
        const { response } = await useFetch('User.CheckOtp', { ...payload })
        this.token = response.data.accessToken
        this.setUser()
      } catch (error) {
        return error
      }
    },
    setUser () {
      this.user = decodeToken(this.token)
    }
  }
})
