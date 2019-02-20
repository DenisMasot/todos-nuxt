<template>
  <!-- <li>TODO</li> -->
    <li>
      <input type="checkbox" v-model="todo.completed" >
      <label :class="{completed: todo.completed}">{{todo.name}}</label>
    </li>
</template>

<script>
export default {
  props: ['todo'],
}
</script>

<style>
.completed{
  color: #777
}
</style>
