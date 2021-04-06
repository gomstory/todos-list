<template>
  <li class="item">
    <input name="mark_done" @click="markAsDone()" v-model="current.done" type="checkbox" />
    <span  name="task_name" v-if="!editing" @dblclick="edit()" v-bind:class="done">{{ current.task }}</span>
    <input name="edit_task" v-if="editing"  ref="editInp" class="edit_task" type="text" @keyup.enter="exitEdit()" @blur="exitEdit()" v-model="current.task"/>
    <a name="delete_tasl" @click="remove()" class="remove_icon"><img src="../assets/delete_icon.svg"/></a>
  </li>
</template>

<script>
import { UPDATE_STORE } from '../store/action-types'
import { MARK_AS_DONE, REMOVE_TASK, UPDATE_TASK } from "../store/mutation-types"
export default {
  name: "To-do List",
  props: {
    task: Object,
  },
  data() {
    return {
      current: { ...this.$props.task },
      editing: false,
    }
  },
  computed: {
    done() {
      return {
        done: this.current.done,
      }
    },
  },
  methods: {
    remove() {
      this.$store.commit(REMOVE_TASK, this.current)
      this.$store.dispatch(UPDATE_STORE)
    },
    markAsDone() {
      this.current.done = !this.current.done
      this.current.done
        ? this.$store.commit(MARK_AS_DONE, this.current)
        : this.$store.commit(MARK_AS_DONE, this.current)
      this.$store.dispatch(UPDATE_STORE)
    },
    edit() {
      this.editing = true
      this.$nextTick(() => this.$refs.editInp.focus())
    },
    exitEdit() {
      this.editing = false
      this.$store.commit(UPDATE_TASK, this.current)
      this.$store.dispatch(UPDATE_STORE)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
li.item {
  display: grid;
  grid-template-columns: 35px auto 35px;
  margin: 0 10px;
  height: 50px;
  text-align: start;
  border-bottom: 1px solid #b3b1b1;
}

input[type="checkbox"] {
  width: 20px;
  height: 20px;
}

.remove_icon img {
  text-transform: uppercase;
  cursor: pointer;
  font-size: 16px;
  width: 25px;
  height: 25px;
}

.done {
  text-decoration: line-through;
  color: grey;
}

span {
  overflow: auto;
}

input.edit_task {
  outline: unset;
  border: unset;
  background-color: #fafafa;
}
</style>