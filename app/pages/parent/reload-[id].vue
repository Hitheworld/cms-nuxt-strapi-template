<template>
  <div>Child 重装加载次数为: {{ reloads }}</div>
</template>

<script setup>
const reloads = useState('reload', () => 0);
onMounted(() => {
  reloads.value++;
});
</script>
