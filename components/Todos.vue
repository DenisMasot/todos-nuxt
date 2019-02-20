<template>
  <div>
      <input type="text" placeholder="écrire une nouvelle tache" v-model='newTodo' @keyup.enter="addTodo">

      <ul v-for='todo in todos' :key="todo.index" >
        <todo :todo="todo"></todo>
      </ul>
  </div>
</template>

<script>
import Todo from '~/components/Todo.vue'

export default {
    components: {
    Todo
  },
  data () {
    return {
      newTodo: '',
      todos: [{
        name: 'tache n°1',
        completed: false
      }]
    }
  },
  methods: {
    addTodo () {
      this.todos.push({
        name: this.newTodo,
        completed: false
      })
      this.newTodo = ''
    }
  }
}
</script>

<style>

</style>
