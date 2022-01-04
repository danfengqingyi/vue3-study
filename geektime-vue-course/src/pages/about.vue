
<template>
    <h1>这是关于页面</h1>
    <HelloWorld/>
    <Count></Count>
    <Heading :level="1">555555</Heading>
</template>
<script setup>
import HelloWorld from '../components/HelloWorld.vue'
import Count from '../components/Count.vue'
import Heading from '../components/Heading'
</script>