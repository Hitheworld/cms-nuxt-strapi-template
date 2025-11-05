<script setup lang="ts">
// useFetch 是 useAsyncData + $fetch 的简写方式
// const { data } = await useFetch("/api/upload/files")
// console.log("获取的数据是:", data);
import type { Restaurant } from "@nuxtjs/strapi";

const route = useRoute()
const { find } = useStrapi()

const { data: articlesData, pending, refresh, error } = await useAsyncData(
    "articles",
    () => find<Restaurant>("articles")
)

</script>

<template>
  <div class="flex-1 w-full">
    <div>
      文章首页
    </div>
    <div>
      error: {{ error }}
      articlesData: {{ articlesData }}
    </div>
    <template v-if="pending">
      <span>加载中....</span>
    </template>
    <div>
      <template v-for="(item, index) in articlesData?.data" :key="item.documentId">
        <div>
          <NuxtLink :to="`/article/${item?.slug}`">
            {{ item.title }}
          </NuxtLink>
        </div>
      </template>
    </div>
  </div>
</template>