<template>
  <div class="container">
    <div>
      <h1>Todo App</h1>
      <div>
        <div>
          <input
            placeholder="What needs to be done?"
            type="text"
            @keyup.enter="addTodo"
          />
        </div>
        <table>
          <thead>
            <tr>
              <th v-for="tableHeader in tableHeaders" :key="tableHeader.id">
                {{ tableHeader }}
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(todo, index) in todos" :key="todo.id">
              <th>{{ index + 1 }}</th>
              <td :class="{ done: todo.isDone }">{{ todo.task }}</td>
              <td><button @click="updateTodo(todo)">Edit</button></td>
              <td><button @click="removeTodo(todo)">Delete</button></td>
              <td>
                <input
                  :checked="todo.isDone"
                  type="checkbox"
                  @change="toggle(todo)"
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableHeaders: ['ID', 'TASK', 'EDIT', 'DELETE', 'CHECK'],
    }
  },
  computed: {
    todos() {
      return this.$store.getters['todos/list']
    },
  },
  methods: {
    addTodo(e) {
      this.$store.dispatch('todos/addToApi', e.target.value)
      e.target.value = ''
    },
    updateTodo(todo) {
      const updatedTask = prompt('Edit your task.', todo.task)
      if (updatedTask !== null || '') {
        this.$store.dispatch('todos/updateOnApi', { todo, updatedTask })
      }
    },
    removeTodo(todo) {
      const result = confirm('Are you sure?')
      if (result) {
        this.$store.dispatch('todos/remove', todo)
      }
    },
    toggle(todo) {
      this.$store.dispatch('todos/toggle', todo)
    },
  },
}
</script>
<style lang="scss" scoped>
.container {
  margin: 0 auto;
  width: 400px;
  text-align: center;
}
table {
  width: 100%;
  border-spacing: 0;
}

table th {
  border-bottom: solid 2px #fb5144;
  padding: 10px 0;
}

table td {
  border-bottom: solid 2px #ddd;
  text-align: center;
  padding: 10px 0;
}
.done {
  text-decoration: line-through;
  color: #ddd;
}
</style>
