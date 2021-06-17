<template>
  <div class="swiperTempate">
    <swiper
      class="SwiperStyle"
      :options="swiperOption"
      :id="pid"
      :slides-per-view="3"
      :space-between="50"
      @swiper="onSwiper"
      @slideChange="onSlideChange"
    >
      <swiper-slide v-for="(item, index) in swiperList" :key="index" class="swiperStyleSon">
        <div class="content">
          <!-- <van-image src=""></van-image> -->
          <div class="text">Slide {{ index }} {{ item }}</div>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import 'swiper/swiper.scss'
export default {
  props: {
    pid: {
      type: Number,
      default: new Date().getTime()
    },
    swiperList: {
      type: Array,
      default: []
    }
  },
  components: {
    swiper,
    swiperSlide
  },
  data() {
    return {
      newTime: new Date(),
      swiperOption: {
        pagination: {
          el: '.swiper-pagination'
        }
      }
    }
  },
  methods: {
    onSwiper(swiper) {
      console.log(swiper)
    },
    onSlideChange() {
      console.log('slide change')
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/css/mixin.scss';
.swiperTempate {
  height: 100%;
  .SwiperStyle {
    height: 100%;
    .swiperStyleSon {
      width: 100%;
      height: 100%;
      .content {
        height: 100%;
        @include flexbox(center, center, column);
      }
      // background: red;
    }
  }
}
</style>
about
