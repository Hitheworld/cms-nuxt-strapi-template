<script setup lang="ts">
import SwiperItem from "./SwiperItem.vue";
import type SwiperItemProps from "./SwiperItem.vue";
import { config } from "@/utils/config.ts";

interface SwiperProps {
  items: SwiperItemProps[];
}

const props = withDefaults(defineProps<SwiperProps>(),  {
  items: () => [],
});

</script>

<template>
  <div class="flex-1 w-full">
    <UCarousel v-slot="{ item }" :items="props.items"  :ui="{ item: `basis-1/1` }">
      <SwiperItem
          :url="`${config.STRAPI_URL}${item.image?.url}`"
          :title="item?.title"
          :desc="item?.desc"
          :tips="item?.tips"
          :btns="item?.btns"
      />
    </UCarousel>
  </div>
</template>

