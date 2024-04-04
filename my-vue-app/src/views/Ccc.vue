<!-- src/views/Ccc.vue -->
<template>
  <div>
    <ul>
      <li v-for="item in list" :key="item.id" @click="goToDetail(item.id)">
        {{ item.name }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Ccc',
  data() {
    return {
      list: [
        { id: 1, name: 'Item 1' },
        { id: 2, name: 'Item 2' },
        // 添加更多列表项
      ],
    };
  },
  methods: {
    goToDetail(id) {
      this.$router.push({ name: 'Ddd', params: { id } });
    },
  },
};
</script>