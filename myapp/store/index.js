// export const strict = false

export const actions = {
  async nuxtServerInit({ commit }) {
    const response = await this.$axios.$get('/api/todos')
    return commit('todos/setTodos', response)
  },
}
