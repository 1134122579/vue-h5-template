import {
  getShareInfo
} from '@/utils/share.js'

export default function(router) {
  router.beforeEach((to, from, next) => {

    let wxConfig = {
      title: '新基建',
      url: location.href,
      desc: "新基建介绍",
      link: 'http://h5.skyoranges.com/skyh5',
      imgUrl: 'http://mfyfile.greatorange.cn/MFY20210303292/logo.jpg'
    };
     getShareInfo(wxConfig)
    next()
  })

}
