import axios from 'axios'
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
    if (!config.disableLoading)
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
    const { data } = response
    if (data.code === 0) {
      return data
    } else if (process.env.VUE_APP_MODE === 'per') {

      return {
        ...data,
        _Return: '000000',
        _TaskId: '999999999999999999999999999'
      }
    } else if (data.code && data.code === -9) {
      return
    } else {
      if (data.code) {
        return data
      } else {
        return response
      }
    }
  },
  error => {
    return Promise.reject(error)
  }
)

export default service
