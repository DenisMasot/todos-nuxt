<template>
  <div>
      <input type="text" placeholder="Ajouter une tache" @keyup.enter="addTodo">

      <ul v-for='todo in todos' :key="todo.index" >
        <todo :todo="todo"></todo>
      </ul>

  </div>
</template>

<script>
import store from '../store/store.js'
import Todo from '~/components/Todo.vue'

export default {
  store,
  components: {
    Todo
  },
  computed: {
    todos () {
      return this.$store.state.todos
    },
  },
  methods: {
    addTodo (e) {
      this.$store.commit('add', e.target.value)
      e.target.value = ''
    },
  }

}
</script>

<style>

</style>
