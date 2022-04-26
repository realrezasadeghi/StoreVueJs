const auth = {
  state: {
    token: null,
    user: null
  },
  getters: {
    authenticated: (state) => state.token && state.user
  },
  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token
    },
    SET_USER: (state, user) => {
      state.user = user
    }
  },
  actions: {
    login: async ({ commit }, data) => {},
    register: async ({ commit }, data) => {}
  }
}

export default auth
