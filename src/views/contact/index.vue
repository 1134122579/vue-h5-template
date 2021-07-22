<template>
  <div class="contact">
    <!-- {{ getData }} -->
    <div class="top">
      <p class="lookText">
        <van-icon name="phone-o" />
        <a :href="'tel:' + getData.phone">{{ getData.phone }}</a>
      </p>
      <p class="lookText">
        <van-icon name="phone-o" />
        <a :href="'tel:' + getData.mobile">{{ getData.mobile }}</a>
      </p>
      <p class="lookText">
        <van-icon name="envelop-o" />
        <a :href="'mailto:' + getData.email">{{ getData.email }}</a>
      </p>

      <!-- <p>{{ getData.gzh }}</p> -->
      <p class="lookText"><van-icon name="user-o" />{{ getData.wx }}</p>
    </div>
    <div class="bottom">
      <p v-for="(item, index) in getData.address" :key="index">
        <van-icon name="location-o" />
        <a :href="'http://api.map.baidu.com/geocoder?address=' + item + '&output=html&src=webapp.baidu.openAPIdemo'">
          {{ item }}</a
        >
      </p>
    </div>
  </div>
</template>
<script>
import { aboutUs } from '@/api/user'
export default {
  data() {
    return {
      getData: {
        phone: ''
      }
    }
  },
  created() {
    this.getAboutUs()
  },
  methods: {
    // 获取数据
    getAboutUs() {
      aboutUs().then(res => {
        this.getData = res.data
      })
    }
  }
}
</script>
<style lang="scss" scoped>
@import '@/assets/css/index';
.contact {
  padding: 20px;
  overflow: hidden;
  box-sizing: border-box;
  height: 92.5vh;
  background: url('../../assets/culture.png') no-repeat;
  background-size: 100% 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  .van-icon {
    font-size: 20px;
    margin-right: 10px;
  }
  // align-items: center;
  .lookText {
    width: 70%;
    margin-left: 30%;
  }
  // .top {
  //   display: flex;
  //   flex-direction: column;
  //   justify-content: flex-end;
  //   align-content: center;
  // }
  p {
    text-align: right;
    font-size: 18px;
    margin-top: 10px;
    display: flex;
    justify-content: flex-start;
    align-content: center;
    a {
      color: #333;
      text-decoration: none;
    }
    a:link {
      text-decoration: none;
    }
    a:visited {
      text-decoration: none;
    }
    a:active {
      text-decoration: none;
    }
  }
  .top {
    margin-top: 60px;
  }
  .bottom {
    p {
      text-align: left;
      a {
        font-size: 14px;
        color: #333;
      }
    }
  }
}
</style>
