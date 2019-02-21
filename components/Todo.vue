<template>
  <!-- <li>TODO</li> -->
    <li>
      <input type="checkbox" v-model="todo.completed" >
      <label :class="{completed: todo.completed}" @dblclick="editing"  v-show="!hasEdit">{{todo.name}}</label>
      <input type="text" v-model="todo.name" @keyup.enter="editTodo" v-show="hasEdit">
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
  data () {
    return {
      hasEdit: false
    }
  },
  methods: {
    removeTodo (e) {
      //L'élément est bien supprimer du tableau mais la page ne s'actualise pas.
      console.log("élément à supprimer : ",this.$store.state.todos[this.index])
      this.$store.commit('remove', this.index)
      console.log("élément à supprimer : ",this.$store.state.todos[this.index])
    },
    editTodo (e) {
      this.hasEdit = false
      this.$store.commit('edit', {name : e.target.value, index : this.index})
    },
    editing () {
      this.hasEdit = true 
    }
  }
}
</script>

<style>
.completed{
  color: #777
}
</style>
