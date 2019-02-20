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
        console.log(name)
        state.todos.push({
          name: name,
          completed: false
        })
      },
      remove (state, { todo }) {
        state.todos.splice(state.todos.indexOf(todo), 1)
      },
      toggle (state, todo) {
        todo.done = !todo.done
      }
    }
  })
}

export default createStore