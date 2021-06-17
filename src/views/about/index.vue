<template>
  <div class="About">
    <!-- logo -->
    <div class="logoStyle">
      <div class="left">
        <van-image width="50" height="50" src="https://img01.yzcdn.cn/vant/cat.jpeg" />
      </div>
      <div class="right">
        {{ phone }}
      </div>
    </div>

    <!-- <SwiperList class="AboutSwiper" :swiperList="swiperList" /> -->
    <!-- 目录 -->
    <div
      class="listStyle"
      v-for="(item, index) in AboutList"
      :key="index"
      :style="item.cover | bgbFilter"
      @click="goPage(item)"
    >
      <div class="text">
        <h3>{{ item.title }}</h3>
        <p>
          {{ item.desc }}
        </p>
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
    top: 0%;
    width: 100%;
    // background: red;
    color: #fff;
    @include flexbox(space-between, center);
    padding: 10px;
    box-sizing: border-box;
    .right {
      font-size: 20px;
    }
  }
  // 目录
  .listStyle {
    width: 100%;
    // min-height: 250px;
    background-size: 100%;
    background-repeat: no-repeat;
    @include flexbox(center, center, column);
    .text {
      margin: 100px 0;
      background: rgba(0, 0, 0, 0.4);
      color: #fff;
      padding: 10px 20px;
      box-sizing: border-box;
      width: 80%;
      border-radius: 5px;
      h3 {
        font-size: 18px;
      }
      p {
        line-height: 22px;
      }
    }
  }
}
</style>
