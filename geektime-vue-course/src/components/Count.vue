
<template>
  <div>
    double:{{double}}
  </div>
  <div>
    count:{{count}}
  </div>
  <button @click="add">add</button>
  <button @click="asyncAdd">async add</button>
</template>

<script setup>
import { computed } from "vue";
import { useStore } from "../store/gvuex";
let store = useStore();
let count = computed(() => store.state.count);
let double = computed(()=>store.getters.double)

function add() {
  store.commit("add");
}
function asyncAdd() {
  store.dispatch("asyncAdd");
}
</script>