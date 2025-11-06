<script setup lang="ts">
export interface SwiperItemProps {
  url: string;
  title: string;
  desc: string;
  tips: string;
  btn?: boolean;
  textTop?: string;
  textAlign?: string;
  path?: string;
  btnText?: string;
  btnMt?: string;
  link?: string;
  icon?: string;
}

const props = withDefaults(defineProps<SwiperItemProps>(),  {
  url: "",
  title: "",
  desc: "",
  tips: "",
  btn: false,
});


// const { routerPush } = useSmartRouter();

const handleLink = (url: string) => {
  window.open(url);
};

const toRegister = () => {
  const isMobile =
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent
      );
  if (isMobile) {
    let url =
        "https://web.shuzhitumei.com/travel/h5/index.html#/pages_common/register/index";
    window.open(url, "_blank");
    return;
  }
  // routerPush("/register");
};
</script>

<template>
  <div class="swiper-container flex-center" :class="{ 'display-block': !props.contentCenter }">
    <NuxtImg class="swiper-img" :src="props.url" alt="" style="height: 100%" />
    <div class="content" :style="{ 'text-align': props.textAlign || 'left' }">
      <template v-if="props.title">
        <div class="title" :style="{ 'margin-top': props.textTop || '0px' }" v-scroll-reveal="'animate__animated animate__fadeInUp'" data-delay="0.2s">
          {{ props.title }}
        </div>
      </template>

      <template v-if="props.desc">
        <h1 v-scroll-reveal="'animate__animated animate__fadeInUp'" data-delay="0.4s" class="desc mt-5">
          {{ props.desc }}
        </h1>
      </template>
      <template v-if="props.tips">
        <div class="tips mt-18" v-scroll-reveal="'animate__animated animate__fadeInUp'" data-delay="0.6s">
          <p>
            {{ props.tips }}
          </p>
        </div>
      </template>

      <template v-if="props.btn">
        <div class="flex btns mt-30">
          <div @click="handleLink(props.link)">
            <img :class="{ 'mr-10': index === 0 }" :src="props.icon" alt="" style="width: 125px" />
          </div>
        </div>
      </template>

      <template v-if="props.showBtn || props.btnText">
        <div
            class="flex btns"
            :style="{
                'margin-top': props.btnMt || '18px',
                'justify-content': props.textAlign || 'start',
              }"
            v-scroll-reveal="'animate__animated animate__fadeInUp'"
            data-delay="0.8s"
        >
          <div
              class="btn flex-center register cursor-pointer"
              :class="{
                  'home-btn': props.path === '/',
                }"
              @click="toRegister"
          >
            {{ props.btnText || "注册有礼" }}
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.swiper-container {
  width: 100%;
  height: 600px;
  overflow: hidden;
  .swiper-img {
    position: absolute;
    top: 0;
    width: 100%;
  }
  .content {
    width: 1400px;
    z-index: 99;
    position: absolute;
    .title {
      font-size: 18px;
      color: #21335b;
    }
    .desc {
      font-size: 42px;
      line-height: 60px;
      color: #21335b;
    }
    .tips {
      width: 575px;
      font-size: 16px;
      color: #3a4257;
      line-height: 32px;
    }
    .btn {
      width: 162px;
      height: 46px;
      border-radius: 0px 0px 0px 0px;
      // border: 1px solid #2271ea;
      font-size: 16px;
      color: #2271ea;
      &:hover {
        background-color: rgba(34, 113, 234, 0.1);
      }
      &.home-btn {
        background: linear-gradient(90deg, #FF5845 0%, #FE2A41 100%) !important;
        &:hover {
          background: linear-gradient(
                  90deg,
                  #FF7A6B 0%,
                  #FF5567 100%
          ) !important;
        }
      }
      &.register {
        background: linear-gradient(90deg, #5ea3fe 0%, #3780f8 100%);
        color: #fff !important;
        &:hover {
          background: linear-gradient(
                  90deg,
                  #76b0fd 0%,
                  #5694f9 100%
          );
        }
      }
    }
  }
}
@media (min-width: 1300px) and (max-width: 1600px) {
  .content {
    width: 1200px !important;
  }
}
@media (max-width: 1300px) {
  .content {
    width: 1100px !important;
  }
}
@media (max-width: 765px) {
  .swiper-container {
    // display: block !important;
    .content {
      padding: 20px;
      width: 100% !important;
    }
  }
  .title {
    font-size: 11px !important;
  }
  .desc {
    line-height: 28px !important;
    font-size: 20px !important;
  }
  .tips {
    font-size: 10px !important;
    line-height: 18px !important;
    color: #3a4257;
    margin-top: 10px !important;
    width: 100% !important;
  }
  .btns {
    justify-content: center !important;
  }
  .btn {
    width: 90px !important;
    height: 30px !important;
    font-weight: 400 !important;
    font-size: 8px !important;
  }
}
</style>

