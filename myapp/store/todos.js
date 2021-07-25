export const state = () => ({
  list: [],
})

export const getters = {
  list: (state) => state.list,
}
export const mutations = {
  setTodos(state, todos) {
    state.list.push(...todos)
  },
  add(state, task) {
    state.list.push({
      id: state.list.length + 1,
      task,
      isDone: false,
    })
  },
  update(state, { todo, updatedTask }) {
    todo.task = updatedTask
  },
  toggle(state, todo) {
    todo.isDone = !todo.isDone
  },
  remove(state, todo) {
    state.list.splice(state.list.indexOf(todo), 1)
  },
}

export const actions = {
  addToApi({ commit }, task) {
    try {
      this.$axios.$post('/api/todos', { params: task })
      commit('add', task)
    } catch (error) {
      console.log(error)
    }
  },
  updateOnApi({ commit }, { todo, updatedTask }) {
    const updatedTodo = {
      id: todo.id,
      task: updatedTask,
      isDone: todo.isDone,
    }
    try {
      this.$axios.$put('/api/todos', { params: updatedTodo })
      commit('update', { todo, updatedTask })
    } catch (error) {
      console.log(error)
    }
  },
  toggle({ commit }, todo) {
    const updatedTodo = {
      id: todo.id,
      task: todo.task,
      isDone: !todo.isDone,
    }
    try {
      this.$axios.$put('/api/todos', { params: updatedTodo })
      commit('toggle', todo)
    } catch (error) {
      console.log(error)
    }
  },
  remove({ commit }, todo) {
    try {
      this.$axios.$delete(`/api/todos/${todo.id}`)
      commit('remove', todo)
    } catch (error) {
      console.log(error)
    }
  },
}
