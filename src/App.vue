<template>
  <h1 class="header">
    <img class="icon" src="./assets/todo-list-icon.svg"> Todos List
  </h1>
  <div class="todo-list">
    <AddTask />
    <TodoList />
  </div>
</template>

<script>
import AddTask from "./components/AddTask";
import TodoList from "./components/TodoList";
import { FETCH_FROM_STORE } from './store/action-types'

export default {
  name: "App",
  created() {
    this.$store.dispatch(FETCH_FROM_STORE);
  },
  components: {
    AddTask,
    TodoList
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 60px;
}

.header {
  text-transform: uppercase;
  color: white;
  font-size: 30px;
}

body {
  background-color: #e23838;
}

* {
  font-size: 18px;
  box-sizing: border-box;
}

.todo-list {
  width: 100%;
  max-width: 720px;
  margin: 0 auto;
  padding: 20px;
}

.icon {
  width: 2.2rem;
  height: 2.2rem;
}
</style>
