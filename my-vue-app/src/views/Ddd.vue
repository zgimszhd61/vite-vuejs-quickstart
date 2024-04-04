<!-- src/views/Ddd.vue -->
<template>
  <div>
    <h1>详情页面</h1>
    <p>当前项的 ID 是：{{ $route.params.id }}</p>
  </div>
</template>

<script>
export default {
  name: 'Ddd',
};
</script>