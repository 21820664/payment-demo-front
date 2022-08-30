// axios 发送ajax请求
import request from '@/utils/request'

export default{

  //Native下单
  nativePay(productId) {
    return request({
      url: '/api/wx-pay/native/' + productId,
      method: 'post'
    })
  },

  //Native下单(v2)
  nativePayV2(productId) {
    return request({
      // 此处url与后端WxNotifyType的enum支付通知:NATIVE_NOTIFY_V2("/api/wx-pay-v2/native/notify")一致
      url: '/api/wx-pay-v2/native/' + productId,
      method: 'post'
    })
  },

  cancel(orderNo) {
    return request({
      url: '/api/wx-pay/cancel/' + orderNo,
      method: 'post'
    })
  },

  refunds(orderNo, reason) {
    return request({
      url: '/api/wx-pay/refunds/' + orderNo + '/' + reason,
      method: 'post'
    })
  }
}
