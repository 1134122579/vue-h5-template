<template>
  <div class="contact">
    <!-- {{ getData }} -->
    <p>{{ getData.phone }}</p>
    <p>{{ getData.mobile }}</p>
    <p>{{ getData.gzh }}</p>
    <p>{{ getData.wx }}</p>
    <p>{{ getData.email }}</p>
    <p v-for="(item, index) in getData.address" :key="index">{{ item }}</p>
  </div>
</template>
<script>
import { aboutUs } from '@/api/user'
export default {
  data() {
    return {
      getData: null
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
  height: 100vh;
  p {
    text-align: center;
    font-size: 18px;
    margin-top: 20px;
  }
}
</style>
