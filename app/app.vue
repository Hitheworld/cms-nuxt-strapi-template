<script setup lang="ts">
import type { Restaurant } from "@nuxtjs/strapi";
import type { NavigationMenuItem } from "@nuxt/ui";
import { config } from "@/utils/config.ts";

const { find } = useStrapi();

const { data: globalData, pending, refresh, error } = await useAsyncData("global", async () => {
      const response = await find("global", {
        // populate: ["logo"],
        // fields: ["url", "siteDescription", "siteName"],
        // populate: {
        //   seo: {
        //     populate: "*"
        //   },
        //   cover: {
        //     fields: ["url", "alternativeText"]
        //   }
        // }
      });
      return response.data;
    },
);


const items = computed<NavigationMenuItem[]>(() => [
  {
    label: "首页",
    to: "/",
  },
  {
    label: "解决方案",
    children: [
      {
        label: "「商旅数智化标准服务」解决方案",
        description: "Fully styled and customizable components for Nuxt.",
        icon: "i-lucide-house",
        to: "/solution/digitization-standard-service"
      },
      {
        label: "「服务商聚合智能路由」比价方案",
        description: "Learn how to install and configure Nuxt UI in your application.",
        icon: "i-lucide-cloud-download",
        to: "/solution/aggregation-comparison-plan"
      },
      {
        label: "「商旅生态版定制化服务」解决方案",
        description: "Fully styled and customizable components for Nuxt.",
        icon: "i-lucide-house",
        to: "/solution/customized-service"
      },
      {
        label: "「MICE会务版」解决方案",
        description: "Learn how to install and configure Nuxt UI in your application.",
        icon: "i-lucide-cloud-download",
        to: "/solution/mice-conference-services"
      },
    ]
  },
  {
    label: "资源与服务",
    children: [
      {
        label: "机票预订",
        description: "机票预订",
        icon: "i-lucide-house",
        to: "/resources-and-services/flight-ticket-booking"
      },
      {
        label: "酒店预订",
        description: "Learn how to install and configure Nuxt UI in your application.",
        icon: "i-lucide-cloud-download",
        to: "/resources-and-services/hotel-reservation"
      },
      {
        label: "火车票预订",
        description: "Fully styled and customizable components for Nuxt.",
        icon: "i-lucide-house",
        to: "/resources-and-services/train-ticket-reservation"
      },
      {
        label: "用车预订",
        description: "Learn how to install and configure Nuxt UI in your application.",
        icon: "i-lucide-cloud-download",
        to: "/resources-and-services/car-reservation"
      },
      {
        label: "签证服务",
        description: "Learn how to install and configure Nuxt UI in your application.",
        icon: "i-lucide-cloud-download",
        to: "/resources-and-services/visa-services"
      }
    ]
  },
  {
    label: "客户案例",
    to: "/customer-case",
  },
  {
    label: "商旅动态",
    to: "/business-travel-news",
  },
  {
    label: "关于途美",
    to: "/about-us",
  },
  {
    label: "加入我们",
    to: "/join-us",
  }
])

useHead({
  title: globalData.value?.siteName ?? "测试网站",
  meta: [
    {
      name: globalData.value?.siteDescription,
      content: globalData.value?.siteDescription
    },
  ],
  bodyAttrs: {
    class: "test",
  },
  script: [
    {
      innerHTML: "console.log(\"Hello world\")" }
  ],
});
</script>

<template>
<!--
<NuxtExample dir="routing/pages" :nav="nav" current-route>
    <NuxtLoadingIndicator />
    <AppHeader />
    <NuxtPage />
    <AppFooter />
  </NuxtExample>
-->
  <UApp>
    <NuxtLoadingIndicator />
    <AppHeader
        :logo="`${config.STRAPI_URL}${globalData?.logo?.url}`"
        :items="items"
    />

    <UMain>
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </UMain>

    <USeparator icon="i-simple-icons-nuxtdotjs" type="dashed" class="h-px" />

    <AppFooter />

  </UApp>

</template>