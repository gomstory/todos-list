<template>
  <a class="clear" v-on:click="clear()">Clear All</a>
</template>

<script>
import { UPDATE_STORE } from '../store/action-types';
import { CLEAR_TASK } from '../store/mutation-types'
export default {
  methods: {
    clear() {
      this.$store.commit(CLEAR_TASK);
      this.$store.dispatch(UPDATE_STORE);
    }
  }
};
</script>

<style>
.clear {
    text-transform: uppercase;
    color: red;
    font-size: 16px;
    cursor: pointer;
    margin: 10px 0;
}
</style>