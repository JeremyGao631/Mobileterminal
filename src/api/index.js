import request from '@/utils/request'

export function fetch(data) {
  return request({
    loading: data.loading || true,
    url: 'http://106.14.72.252/contact/save',
    method: 'post',
    data
  })
}
export function inspection(data) {
  return request({
    loading: data.loading || true,
    url: 'http://106.14.72.252/inspection/save',
    method: 'post',
    data
  })
}
export function vehicle(data) {
  return request({
    loading: data.loading || true,
    url: 'http://106.14.72.252/vehicle/save',
    method: 'post',
    data
  })
}
// 请求后台页面数据
export function describtion(data) {
  return request({
    loading: data.loading || true,
    url: 'http://106.14.72.252/api/describtion/page',
    method: 'post',
    data
  })
}
