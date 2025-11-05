<script setup lang="ts">
import type { NuxtError } from '#app'

const props = defineProps({
  error: Object as () => NuxtError,
})
</script>

<template>
  <div>
    <div>
      <h1>找不到页面了！</h1>
    </div>
    <h1>{{ error.statusCode }}</h1>
    <NuxtLink to="/">Go back home</NuxtLink>
  </div>
</template>
