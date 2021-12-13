
<template>
  <div>
    <h1>追踪鼠标位置:{{x}},{{y}}</h1>
    <h1 @click="add">累加器(点击):{{count}}</h1>
    <button @click="loading">更换网站图标</button>
    <button @click="reset">重置网站图标</button>
    <h1 @click="toggle">切换全屏</h1>

    <Rate :value="score" @update-rate="update">
      <img width="14" src="/favicon.ico">
    </Rate>
    <Rate :value="4"
          theme="red"></Rate>
    <Rate :value="1"
          theme="green"></Rate>
  </div>
</template>

<script setup>
import Rate from "../components/Rate.vue";
import { ref } from "vue";
import { useMouse } from "../utils/mouse";
let { x, y } = useMouse();

let { count, color, add } = addCount();
function addCount() {
  let count = ref(1);
  let color = ref("red");
  function add() {
    count.value++;
    color.value = Math.random() > 0.5 ? "blue" : "red";
  }
  return { count, color, add };
}

import useFavicon from "../utils/favicon";
let { favicon, reset } = useFavicon();
function loading() {
  favicon.value = "/src/assets/fruits.png";
}

import { useFullscreen } from "@vueuse/core";
const { isFullscreen, enter, exit, toggle } = useFullscreen();

let score = ref(3.5)
function update(num){   
   score.value = num
   }
</script>

<style scoped>
h1 {
  color: v-bind(color);
}
</style>