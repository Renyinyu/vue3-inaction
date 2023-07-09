
<template>
  <form>
    <input v-model="data.name" placeholder="用户名称" />
    <br/>
    <textarea v-model="data.info" placeholder="用户信息" />
    <div>名称: {{data.name}}</div>
    <div>信息: {{data.info}}</div>
    <button type="button" @click="showData">showData</button>
  </form>
</template>

<script setup lang="ts">
import { reactive, toRaw } from 'vue';
const state = reactive({
  name: '张三',
  info: '某某公司前端开发工程师，有3年前端工作经验',
});
const data = toRaw(state);

const showData = () => {
  console.log('state,', state)
  console.log('data,', data)
}
</script>