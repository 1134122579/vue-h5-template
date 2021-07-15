<template>
  <div class="About">
    <!-- 背景颜色 -->
    <div class="backgroundColor"></div>
    <!-- logo -->
    <div class="logoStyle">
      <div class="left">关于我们</div>
      <div class="right">三</div>
    </div>

    <!-- <SwiperList class="AboutSwiper" :swiperList="swiperList" /> -->
    <!-- 目录 -->
    <div class="listStyle" v-for="(item, index) in AboutList" :key="index" @click="goPage(item)">
      <!-- :style="item.cover | bgbFilter" -->

      <div class="text">
        <h3>
          <van-icon name="play" size="24px" /><span>{{ item.title }}</span>
        </h3>
        <!-- <p>
          {{ item.desc }}
        </p> -->
      </div>
      <div class="headerImg">
        <van-image class="w_img" fit="cover" :src="item.cover" alt="" srcset="" />
      </div>
    </div>
  </div>
</template>
<script>
import SwiperList from '@/components/Swiper.vue'
import { getAbout } from '@/api/user'
export default {
  components: {
    SwiperList
  },
  filters: {
    bgbFilter(data) {
      console.log(data)
      return data ? ' background-image:url("' + data + '")' : 'background:#ccc'
      // background:#ccc
    }
  },
  data() {
    return {
      phone: 1843854147,
      swiperList: [1, 2, 3, 4],
      AboutList: []
    }
  },
  created() {
    this.getAbout()
  },

  methods: {
    goPage(data) {
      let { id } = data
      this.$router.push({
        path: '/AboutContent',
        query: {
          id
        }
      })
    },
    // 获取数据
    getAbout() {
      console.log(1)
      getAbout().then(res => {
        console.log(res)
        this.AboutList = res.data
      })
    }
  }
}
</script>
<style lang="scss" scoped>
@import '@/assets/css/mixin.scss';
.About {
  height: 100%;
  position: relative;
  padding-bottom: 0.033rem;

  // background: olivedrab;
  .AboutSwiper {
    height: 100%;
  }
  // logo
  .logoStyle {
    position: fixed;
    top: 0;
    z-index: 3;
    width: 100%;
    background: #fff;
    color: #333;
    @include flexbox(space-between, center);
    box-sizing: border-box;
    .left {
      font-size: 18px;
      padding: 10px 0;
      font-weight: 600;
      padding-left: 30px;
      border-bottom: 8px solid #fe9526;
    }
    .right {
      flex-shrink: 0;
      font-size: 18px;
      padding: 14px 0;
      font-weight: 600;
      width: 26%;
      text-align: center;
      background: #fe9526;
    }
  }
  // 目录
  .listStyle {
    width: 100%;
    // min-height: 250px;
    // background-repeat: no-repeat;
    @include flexbox(center, center, column);
    .text {
      // background: rgba(0, 0, 0, 0.4);
      color: #333;
      width: 100%;
      padding: 10px 0;
      padding-left: 40px;
      h3 {
        display: flex;
        justify-content: flex-start;
        align-content: center;
        span {
          font-size: 18px;
        }
      }
      p {
        line-height: 22px;
      }
    }
    .headerImg {
      width: 80%;
      overflow: hidden;
      border-radius: 4px;
      height: 160px;
      .w_img {
        width: 100%;
        height: 100%;
      }
    }
  }
  // 颜色
  .backgroundColor {
    position: absolute;
    right: 0;
    width: 26%;
    height: 100%;
    background: #fe9526;
  }
}
</style>
