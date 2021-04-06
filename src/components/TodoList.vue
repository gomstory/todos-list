<template>
  <div v-if="tasks.length" class="todo-list-container">
    <ul>
      <Task
        v-bind:key="task"
        v-for="task of tasks"
        v-bind:task="task"
        class="task"
      />
    </ul>
    <ClearTask class="clear" />
  </div>
</template>

<script>
import Task from "./Task";
import { mapState } from "vuex";
import ClearTask from "./ClearTask";

export default {
  computed: mapState({
    tasks: (state) => state.tasks
  }),
  components: {
    Task,
    ClearTask,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.task {
  display: block;
  margin-top: -1px; /* Prevent double borders */
  padding: 12px 0;
  text-decoration: none;
  font-size: 18px;
  color: black;
  display: block;
}

ul {
  padding: 20px 0;
  margin: 0;
  background-color: white;
}

.todo-list-container {
  margin: 20px 0;
  background-color: white;
}

.clear {
  text-transform: uppercase;
  color: red;
  cursor: pointer;
  display: inline-block;
  margin-bottom: 15px;
}
</style>