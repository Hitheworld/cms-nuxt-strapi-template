<script setup lang="ts">
import type { Course, Restaurant } from "@nuxtjs/strapi";
import HomeSwiper from "@/components/Home/swiper/Swiper.vue";


// useFetch 是 useAsyncData + $fetch 的简写方式
// const { data } = await useFetch("/api/upload/files")
// console.log("获取的数据是:", data);


const route = useRoute();
const { find, findOne } = useStrapi<Course>();

const { data: homeSwiperData, pending, refresh, error } = await useAsyncData(
    "homes-swiper",
    () => find<Restaurant>("homes", "swiper", {

    })
);

console.log("homeSwiperData的数据是:", homeSwiperData.value)


const testData = [
  {
    images: [
      {
        url: "https://www.shuzhitumei.com/_nuxt/swiper1.BoAFuRId.jpg"
      }
    ],
    title: "途美商旅",
    desc: ["数智化全场景企业差旅及费控服务平台"],
    showBtn: true,
    tips: [
      "为100+同业伙伴提供差旅管控模块和出行资源开发对接服务，超2000家各行业头部和高成长型客户差旅及费控服务经验，致力于为客户提供一站式差旅服务，助力企业打造合规节省、规避价格黑箱、智能高效的差旅出行平台。",
    ],
  },
]
</script>

<template>
  homeSwiperData: {{ JSON.stringify(homeSwiperData, 2, null) }}
  <div></div>


  <HomeSwiper
    :items="testData"
  />
  <div>首页</div>
  <div>
  </div>
</template>

