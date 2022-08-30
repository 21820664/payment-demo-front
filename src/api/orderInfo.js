import request from '@/utils/request'

export default{
  // 查询本地订单状态
  queryOrderStatus(orderNo) {
    return request({
      url: '/api/order-info/query-order-status/' + orderNo,
      method: 'get'
    })
  },
  // 订单列表
  list() {
    return request({
      url: '/api/order-info/list',
      method: 'get'
    })
  }
}
