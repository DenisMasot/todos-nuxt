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
      },
      remove (state, index) {
        state.todos.splice(state.todos[index], 1)
      },
      edit (state, {name, index} ) {
        state.todos[index].name = name
      },
    }
  })
}

export default createStore