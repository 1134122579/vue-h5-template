<template>
  <div class="contact">
    <!-- {{ getData }} -->
    <div class="top">
      <p>
        <a :href="'tel:' + getData.phone">{{ getData.phone }}</a>
      </p>
      <p>
        <a :href="'tel:' + getData.mobile">{{ getData.mobile }}</a>
      </p>
      <p>
        <a :href="'mailto:' + getData.email">{{ getData.email }}</a>
      </p>
      <!-- <p>{{ getData.gzh }}</p> -->
      <p>{{ getData.wx }}</p>
    </div>
    <div class="bottom">
      <p v-for="(item, index) in getData.address" :key="index">
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
  // align-items: center;
  p {
    text-align: right;
    font-size: 18px;
    margin-top: 10px;
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
