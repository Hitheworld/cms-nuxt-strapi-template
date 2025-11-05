<script setup lang="ts">
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
      商旅动态
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