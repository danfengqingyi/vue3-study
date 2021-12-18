
<template>
  <div>
    count:{{count}}
  </div>
  <button @click="add">add</button>
  <button @click="asyncAdd">async add</button>
</template>

<script setup>
import { computed } from "vue";
import { useStore } from "vuex";
let store = useStore();
let count = computed(() => store.state.count);

function add() {
  store.commit("add");
}
function asyncAdd() {
  store.dispatch("asyncAdd");
}
</script>