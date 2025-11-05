<template>
  <UHeader>
    <template #title>
      <NuxtImg :src="props.logo" alt="logo" />
    </template>

    <UNavigationMenu :items="props.items" />

    <template #right>
      <UColorModeButton />

      <UButton
          color="neutral"
          variant="ghost"
          to="https://github.com/nuxt/ui"
          target="_blank"
          aria-label="GitHub"
      >
        登录
      </UButton>
      <UButton
          variant="ghost"
          to="https://github.com/nuxt/ui"
          target="_blank"
          aria-label="GitHub"
      >
        注册有礼
      </UButton>
    </template>
  </UHeader>
</template>

<script setup lang="ts">
import type { NavigationMenuItem } from "@nuxt/ui";
import SwiperItemProps from "./Home/swiper/SwiperItem.vue";

interface SwiperProps {
  logo: string;
  items: NavigationMenuItem[];
}

const props = withDefaults(defineProps<SwiperProps>(),  {
  logo: "",
  items: () => [],
});
</script>