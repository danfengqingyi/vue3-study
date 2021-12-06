
<template>
  <div>
    <input type="text"
           v-model="title"
           @keydown.enter="addTodo" />
    <button v-if="active<all"
            @click="clear">清理</button>
    <ul v-if="todos.length">
      <li v-for="todo in todos">
        <input type="checkbox"  v-model="todo.done" />
        <span :class="{ done: todo.done }">{{ todo.title }}</span>
      </li>
    </ul>
    <div v-else>暂无数据</div>
    <div>
      全选<input type="checkbox"
             v-model="allDone">
      未完成
      {{active}}
      /
      {{all}}
    </div>
  </div>
</template>

<script setup>
import { ref,computed } from "vue";

let { title, todos, addTodo, clear, active, all, allDone } = useTodos();

function useTodos() {
  let title = ref("");
  let todos = ref([]);
  function addTodo() {
    todos.value.push({
      title: title.value,
      done: false,
    });
    title.value = "";
  }
  function clear() {
    todos.value = todos.value.filter((v) => !v.done);
  }
  let active = computed(() => {
    return todos.value.filter((v) => !v.done).length;
  });
  let all = computed(() => todos.value.length);
  let allDone = computed({
    get() {
      console.log("222");
      return active.value === 0;
    },
    set(val) {
      console.log("333");
      todos.value.forEach((todo) => {
        todo.done = val;
      });
    },
  });
  return { title, todos, addTodo, clear, active, all, allDone };
}
</script>

