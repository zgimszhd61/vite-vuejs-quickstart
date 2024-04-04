<!-- src/views/Bbb.vue -->
<template>
    <div>
      <form @submit.prevent="handleSubmit">
        <div>
          <label for="username">用户名:</label>
          <input type="text" id="username" v-model="form.username">
        </div>
        <div>
          <label for="password">密码:</label>
          <input type="password" id="password" v-model="form.password">
        </div>
        <button type="submit">重置</button>
      </form>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    name: 'Bbb',
    data() {
      return {
        form: {
          username: '',
          password: '',
        },
      };
    },
    methods: {
      async handleSubmit() {
        try {
          const response = await axios.post('http://localhost.com/x.php', this.form);
          console.log(response.data);
          // 处理响应或者重置表单
        } catch (error) {
          console.error(error);
          // 处理错误
        }
      },
    },
  };
  </script>