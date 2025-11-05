<script setup lang="ts">
// useFetch 是 useAsyncData + $fetch 的简写方式
// const { data } = await useFetch("/api/upload/files")
// console.log("获取的数据是:", data);

import type { Restaurant } from '@nuxtjs/strapi';

const route = useRoute()
const { findOne } = useStrapi()

// route.params.id

const { data: articleData, pending, refresh, error } = await useAsyncData(
    'article',
    () => findOne<Restaurant>('article', route.params.slug)
)

</script>

<template>
  <div class="flex-1 w-full">
    <div>
      文章slug是: {{ route.params.slug }}
    </div>
    <div>
      <template v-if="pending">
        <span>加载中....</span>
      </template>
    </div>
    <div>
      文章内容是: {{ articleData?.data }}
    </div>
  </div>
</template>

