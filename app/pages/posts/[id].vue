<template>
  <div>文章页面{{ route.params.id }}</div>
</template>

<script setup lang="ts">
const route = useRoute();

// 访问 /posts/1 时，route.params.id 的值为 1
console.log(route.params.id);
</script>
