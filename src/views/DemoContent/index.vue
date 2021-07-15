<template>
  <div class="content">
    <Navbar :title="getData.title"></Navbar>
    <h4 class="title">{{ getData.title }}</h4>
    <div class="contentHtml">
      <div v-html="getData.content"></div>
    </div>
  </div>
</template>
<script>
import { getBuildFlim } from '@/api/user'
import Navbar from '@/components/Navbar.vue'

export default {
  components: {
    Navbar
  },
  data() {
    return {
      getData: null
    }
  },
  created() {
    this.getContent()
  },
  methods: {
    getContent() {
      const { id } = this.$route.query
      if (id) {
        getBuildFlim({
          class_id: id
        }).then(res => {
          console.log(res.data)
          this.getData = res.data[0]
          if (res.data || res.data.length <= 0) {
            alert('暂无内容！')
            // this.$router.go(-1)
            return
          }
        })
      } else {
        alert('重新进入！')
        this.$router.go(-1)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/css/mixin.scss';

.content {
  margin: 20px;
  height: 100%;
  background: $contentBackground;
  .title {
    font-size: 20px;
    text-align: center;
  }
  .contentHtml {
    margin-top: 20px;
  }
}
</style>
