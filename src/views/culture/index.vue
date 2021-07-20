<template>
  <div class="Wh">
    <!-- <AboutHeader :titleShow="titleShow" :textList="textList" /> -->
    <div class="content">
      <div class="pageTitle">企业文化</div>
      <div class="titleLsit">
        <div class="list" v-for="(item, index) in list" :key="item.id">
          <h4 class="list_t">{{ item.title }}</h4>
          <p>{{ item.dec }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AboutHeader from '@/components/AboutHeader'

export default {
  components: {
    AboutHeader
  },
  data() {
    return {
      textList: [
        {
          id: 1,
          title: '天橙十八条',
          dec: ''
        }
      ],
      titleShow: false,
      list: [
        {
          id: 1,
          title: '讲贡献',
          dec: '挖掘个人潜能，为公司创造价值'
        },
        {
          id: 2,
          title: '不抱怨',
          dec: '因为热爱，生活和工作都很可爱'
        },
        {
          id: 2,
          title: '不抱怨',
          dec: '因为热爱，生活和工作都很可爱'
        },
        {
          id: 2,
          title: '不抱怨',
          dec: '因为热爱，生活和工作都很可爱'
        },
        {
          id: 2,
          title: '不抱怨',
          dec: '因为热爱，生活和工作都很可爱'
        },
        {
          id: 2,
          title: '不抱怨',
          dec: '因为热爱，生活和工作都很可爱'
        },
        {
          id: 2,
          title: '不抱怨',
          dec: '因为热爱，生活和工作都很可爱'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.Wh {
  background: #fff;
}
.content {
  background: url('../../assets/gq.png') no-repeat;
  background-position: center center;
  background-size: contain;
  background-attachment: fixed;
  min-height: 100vh;
  padding-bottom: 40px;
  box-sizing: border-box;
  .pageTitle {
    background: #fe9526;
    padding: 20px 0;
    text-align: center;
    color: #fcfcfc;
    font-size: 28px;
    letter-spacing: 10px;
    text-shadow: 5px 5px 5px #fcfcfc;
  }
  .titleLsit {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    width: 50%;
    margin: 0 auto;
    .list {
      width: 100%;
      margin-top: 20px;
      text-align: center;
      letter-spacing: 4px;
      .list_t {
        font-size: 22px;
        color: #fe9526;
      }
      p {
        margin-top: 10px;
        font-size: 16px;
      }
    }
  }
}
</style>
