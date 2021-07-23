export const state = () => ({
  list: [
    {
      id: 1,
      task: 'study nuxt.js',
      isDone: true,
    },
    {
      id: 2,
      task: 'study express.js',
      isDone: false,
    },
    {
      id: 3,
      task: 'study typescript.js',
      isDone: false,
    },
  ],
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
}
