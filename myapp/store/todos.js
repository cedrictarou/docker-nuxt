export const state = () => ({
  list: [],
})

export const mutations = {
  add(state, text) {
    state.list.push({
      id: state.list.length + 1,
      task: text,
      isDone: false,
    })
  },
  update(state, { todo, updatedTask }) {
    todo.task = updatedTask
  },
  remove(state, todo) {
    state.list.splice(state.list.indexOf(todo), 1)
  },
  toggle(state, todo) {
    todo.isDone = !todo.isDone
  },
  setTodos(state, todos) {
    state.list.push(...todos)
  },
}
