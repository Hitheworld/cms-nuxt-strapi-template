<script setup lang="ts">
import type { TabsItem } from "@nuxt/ui";
import type { Course, Restaurant } from "@nuxtjs/strapi";
import HomeSwiper from "@/components/Home/swiper/Swiper.vue";


// useFetch 是 useAsyncData + $fetch 的简写方式
// const { data } = await useFetch("/api/upload/files")
// console.log("获取的数据是:", data);


const route = useRoute();
const { find, findOne } = useStrapi<Course>();

const { data: homeData, pending, refresh, error } = await useAsyncData("home", () => find<Restaurant>("home", {
  populate: ["seo", "slideshow.image", "swiperLogo"],
}));


const items = ref<TabsItem[]>([
  {
    label: "Account",
    icon: "i-lucide-user",
    content: "This is the account content."
  },
  {
    label: "Password",
    icon: "i-lucide-lock",
    content: "This is the password content."
  }
])
</script>

<template>


  <HomeSwiper
    :items="homeData?.data?.slideshow"
  />

  <UCarousel
      v-slot="{ item }"
      loop
      :autoplay="{ delay: 2000 }"
      :items="homeData?.data?.swiperLogo"
      :ui="{
        item: `basis-1/6`,
         container: `h-[80px]`
      }"
  >
    <NuxtImg
        :src="`${config.STRAPI_URL}${item?.url}`"
        :alt="item?.caption"
        style="height: 80px"
    />
  </UCarousel>
  <div class="travel-container">

    <div class="hidden-xs-only">
      <h1>
        <span>企业差旅管理</span>
        <span>5</span>
        <span>大围城</span>
      </h1>
    </div>


    <UTabs :content="false" :items="items" class="w-full" />

  </div>
  <div>
  </div>
</template>

