<template>
  <div class="container">
    <div>
      <h1>My Todo App</h1>
      <div>
        <form>
          <input type="text" />
          <button>Add</button>
        </form>
        <table>
          <thead>
            <tr>
              <th v-for="tableHeader in tableHeaders" :key="tableHeader.id">
                {{ tableHeader }}
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="todo in todos" :key="todo.id">
              <th>{{ todo.id }}</th>
              <td>{{ todo.task }}</td>
              <td><button>Edit</button></td>
              <td><input v-model="todo.isDone" type="checkbox" /></td>
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
      todos: [
        {
          id: 1,
          task: 'study Nuxt.js',
          isDone: false,
        },
        {
          id: 2,
          task: 'study Vue.js',
          isDone: false,
        },
        {
          id: 3,
          task: 'study Typescript.js',
          isDone: false,
        },
      ],
      tableHeaders: ['ID', 'TASK', 'EDIT', 'CHECK'],
    }
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
</style>
