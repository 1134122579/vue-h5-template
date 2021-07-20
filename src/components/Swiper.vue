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
      <swiper-slide v-for="(item, index) in swiperList" :key="item.id" class="swiperStyleSon">
        <div class="content">
          <van-image :src="item.image"></van-image>

          <div class="buttonStyle">
            <van-button v-if="swiperList.length == index + 1" block type="success" round @click="goLook"
              >立即进入</van-button
            >
          </div>

          <!-- <van-image src=""></van-image> -->
          <!-- <div class="text">Slide {{ index }} {{ item }}</div> -->
        </div>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
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
        loop: false,
        autoplay: {
          delay: 3000,
          stopOnLastSlide: true,
          disableOnInteraction: false
        },
        pagination: {
          el: '.swiper-pagination'
        }
      }
    }
  },
  methods: {
    goLook() {
      this.$router.push({
        path: '/about'
      })
    },
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
        @include flexbox(space-between, center, column);
        .buttonStyle {
          width: 100%;
          margin-bottom: 20px;
          padding: 20px;
          box-sizing: border-box;
        }
      }
      // background: red;
    }
  }
}
</style>
about
