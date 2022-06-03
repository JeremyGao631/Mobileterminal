import request from '@/utils/request'

export function fetch(data) {
  return request({
    loading: data.loading || true,
    url: 'http://192.168.2.3:80/contact/save',
    method: 'post',
    data
  })
}
export function inspection(data) {
  return request({
    loading: data.loading || true,
    url: 'http://192.168.2.3:80/inspection/save',
    method: 'post',
    data
  })
}
export function vehicle(data) {
  return request({
    loading: data.loading || true,
    url: 'http://192.168.2.3:80/vehicle/save',
    method: 'post',
    data
  })
}
