import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: {
      todos: [{
        name: 'tache du STORE',
        completed: false
      }],
      newTodo: ''
    },
    mutations: {
      add (state, name ) {
        state.todos.push({
          name: name,
          completed: false
        })
        console.log(state.todos[1])

      },
      remove (state, index) {
        state.todos.splice(state.todos[index], 1)
        //console.log(state.todos.length)
      },
    }
  })
}

export default createStore