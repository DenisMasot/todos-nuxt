<template>
  <!-- <li>TODO</li> -->
    <li>
      <input type="checkbox" v-model="todo.completed" >
      <label :class="{completed: todo.completed}">{{todo.name}}</label>
      <button>modifier</button>
      {{index}}
      <button @click="removeTodo">supprimer</button>
    </li>
</template>

<script>
import store from '../store/store.js'

export default {
  store,
  props: ['todo', 'index'],
  methods: {
    removeTodo (e) {
      //L'élément est bien supprimer du tableau mais la page ne s'actualise pas.
      console.log(this.$store.state.todos[this.index])
      this.$store.commit('remove', this.index)
      console.log(this.$store.state.todos[this.index])
    }
  }
}
</script>

<style>
.completed{
  color: #777
}
</style>
