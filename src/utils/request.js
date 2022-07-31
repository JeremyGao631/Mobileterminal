import axios from 'axios'
// import loading from '@/components/Loading/main.js'
// import router from '@/router'

// create an axios instance
const service = axios.create({
  // baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
  // baseURL: 'service', // url = base url + request url
  // withCredentials: true, // send cookies when cross-domain requests
  headers: { ContentType: 'application/json'} // request timeout
})

service.interceptors.request.use(
  config => {
    if (!config.disableLoading) {
      // loading({
      //   title: 'Requesting',
      //   size: 30,
      //   textSize: 18
      // })
    }
    if (config.method === 'post')

    return config
  },
  error => {
    // do something with request error
    return Promise.reject(error)
  }
)

// response interceptor
service.interceptors.response.use(

  /**
   * Determine the request status by custom errcode
   * Here is just an example
   * You can also judge the status by HTTP Status errcode
   */
  response => {
    const res = response.data
    // // errorCode 请求错误码
    if (res.code !== 0) {
    //   setTimeout(() => loading.close(), 1500)
    } else {
    //   setTimeout(() => loading.close(), 1500)
      return res
    }
  },
  error => {
    return Promise.reject(error)
  }
)

export default service
