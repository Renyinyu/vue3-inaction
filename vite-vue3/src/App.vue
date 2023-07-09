<script setup>
import { ref } from 'vue'
const count = ref(0)
const increase = () => count.value++
</script>

<template>
  <div>
    <p>count: {{ count }}</p>
    <button @click="increase">increase count</button>
  </div>
</template>

<style scoped ></style>
