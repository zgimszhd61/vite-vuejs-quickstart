<!-- src/views/Aaa.vue -->
<template>
    <div>
      <button @click="goToBaidu">跳转到百度</button>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Aaa',
    methods: {
      goToBaidu() {
        window.location.href = 'https://www.baidu.com';
      },
    },
  };
  </script>