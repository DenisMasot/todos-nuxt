<template>
  <section class="container">
    <div>
      <app-logo/>
      <h1 class="title">
        Todos with nuxt
      </h1>
      <todos></todos>
    </div>
  </section>
</template>

<script>
import store from '../store/store.js'

import AppLogo from '~/components/AppLogo.vue'
import Todos from '~/components/Todos.vue'


export default {
  store,
  components: {
    AppLogo,
    Todos
  },
}

</script>

<style>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>

