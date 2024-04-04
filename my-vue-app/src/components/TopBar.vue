<template>
  <div class="header">
    <div class="logo">perplexity</div>
    <button class="new-thread-btn">
      <i class="icon-plus"></i>
    </button>
  </div>
</template>

<script>
export default {
  name: 'TopBar'
}
</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #f0f0f0;
}
.logo {
  /* Logo 样式 */
}
.new-thread-btn {
  /* 按钮样式 */
}
</style>