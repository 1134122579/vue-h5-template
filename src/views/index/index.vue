<template>
  <div class="contact">
    <Swiper :swiperList="swiperList" />
  </div>
</template>
<script>
import Swiper from '../../components/Swiper.vue'
export default {
  components: {
    Swiper
  },
  data() {
    return {
      swiperList: [
        {
          id: 1,
          image: require('../../assets/goStatus.png')
        },
        {
          id: 2,
          image: require('../../assets/goStatus2.png')
        }
      ],
      getData: {
        phone: ''
      }
    }
  },
  created() {},
  methods: {
    goLook() {
      this.$router.push({
        path: '/about'
      })
    }
  }
}
</script>
<style lang="scss" scoped>
@import '@/assets/css/index';
.contact {
  width: 100%;
  height: 100vh;
  // background: url('../../assets/goStatus.png') no-repeat;
  background-size: 100% 100%;
}
</style>
