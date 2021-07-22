import {
    getShare
} from '../api/user.js'
import wx from 'weixin-js-sdk'
/**
 *
 * @param {*} title   微信分享标题
 * @param {*} desc    微信分享简介
 *  * @param {*} url
 * @param {*} link  微信分享地址
 * @param {*} imgUrl  分享图片地址
 *
 */
function getShareInfo(wxConfig) { //如果分享的内容会根据情况变化，那么这里可以传入分享标题及url

    console.log('微信分享内容配置', wxConfig)

    getShare({
            url: wxConfig.url
        }) //这里我写了一个公用的接口请求js，这里正常axios请求就可以，只要拿到数据都可以
        .then(data => {
           let res=data.data
           console.log(res)
            //拿到后端给的这些数据
            // console.log('微信配置返回', res)
            let appId = res.appId;
            let timestamp = res.timestamp;
            let nonceStr = res.nonceStr;
            let signature = res.signature;
            wx.config({
                debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
                appId: appId, // 必填，公众号的唯一标识，填自己的！
                timestamp: timestamp, // 必填，生成签名的时间戳，刚才接口拿到的数据
                nonceStr: nonceStr, // 必填，生成签名的随机串
                signature: signature, // 必填，签名，见附录1
                jsApiList: [
                        'updateAppMessageShareData',
                        'updateTimelineShareData',
                    ] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
            })
            wx.ready(function() {
                wx.updateAppMessageShareData(wxConfig);
                wx.updateTimelineShareData(wxConfig)
            });
        })
}

export {
    getShareInfo
}
