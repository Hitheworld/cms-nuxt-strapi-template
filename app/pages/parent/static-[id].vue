<template>
  <div>Child 重装加载次数为: {{ reloads }}</div>
</template>

<script setup>
const reloads = useState('static', () => 0);
onMounted(() => {
  reloads.value++;
});
definePageMeta({
  key: 'static',
});
</script>
