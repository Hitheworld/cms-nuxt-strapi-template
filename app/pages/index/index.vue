<script setup lang="ts">
import type { Course, Restaurant } from "@nuxtjs/strapi";
import HomeSwiper from "@/components/Home/swiper/Swiper.vue";


// useFetch 是 useAsyncData + $fetch 的简写方式
// const { data } = await useFetch("/api/upload/files")
// console.log("获取的数据是:", data);


const route = useRoute();
const { find, findOne } = useStrapi<Course>();

const { data: homeData, pending, refresh, error } = await useAsyncData("home", () => find<Restaurant>("home", {
  populate: ["seo", "slideshow.image", "swiperLogo"],
  // fields: ["slideshow.image.url"],
  // populate: {
  //   seo: {
  //     populate: "shareImage",
  //     fields: ["url"],
  //   },
  //   slideshow: {
  //     populate: "image",
  //     fields: ["url"],
  //   },
  //   // swiperLogo: [],
  // },
}));
</script>

<template>


  <HomeSwiper
    :items="homeData?.data?.slideshow"
  />

  <UCarousel
      v-slot="{ item }"
      orientation="vertical"
      loop
      :autoplay="{ delay: 2000 }"
      :items="homeData?.data?.swiperLogo"
      :ui="{
        item: `basis-1/6`,
         container: 'h-[70px]'
      }"
  >
    <template v-for="(subItme, index) in item" :key="index">
      <NuxtImg
          class="swiper-img"
          :src="`${config.STRAPI_URL}${item?.url}`"
          :alt="item?.caption"
          style="height: 80px"
      />
    </template>
  </UCarousel>
  <div>首页</div>
  <div>
  </div>
</template>

