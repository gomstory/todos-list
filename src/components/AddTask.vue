<template>
  <input
    placeholder="Add new task"
    @keyup.enter="addTask()"
    v-model="task"
  />
</template>

<script>
import { UPDATE_STORE } from '../store/action-types';
import { ADD_TASK } from "../store/mutation-types";
export default {
  props: {
    msg: String,
  },
  data() {
    return {
      task: "",
    };
  },
  methods: {
    addTask() {
      const id = new Date().getTime();
      this.task && this.$store.commit(ADD_TASK, {
        id: id,
        task: this.task,
        time: id,
        done: false
      });

      this.task = "";
      this.$store.dispatch(UPDATE_STORE);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
input {
  width: 100%;
  height: 60px;
  padding: 10px;
  border: unset;
}
</style>
