<template>
  <div class="content">
    <h4 class="title">{{ getData.title }}</h4>
    <div class="contentHtml">
      <div v-html="getData.content"></div>
    </div>
  </div>
</template>
<script>
import { getAbout } from '@/api/user'

export default {
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
      let { id } = this.$route.query
      if (id) {
        getAbout({
          id
        }).then(res => {
          console.log(res.data)
          this.getData = res.data[0]
        })
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
