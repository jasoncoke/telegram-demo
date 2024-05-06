import axios from 'axios'
import { showToast, showLoadingToast, ToastWrapperInstance } from 'vant'

function toastMessage(message: string) {
  showToast({
    message,
    duration: 3000
  })
}
const request = axios.create({
  baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
  timeout: 20 * 1000, // request timeout
})

request.interceptors.request.use(
  (config) => {
    return config
  },
  (error) => {
    toastMessage(`${error.status}: ${error.message}`)
    return Promise.reject(error)
  },
)

request.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    if (error.message.indexOf('timeout of') > -1) {
      return toastMessage('Request timed out, please try again.')
    }

    switch (error.response.status) {
      case 401:
        break
      default:
        break
    }

    toastMessage(`${error.response?.data.message || error.response?.statusText || error.message || 'Unknown Error.'}`)
    return Promise.reject(error)
  }
)

let loadingInstance: ToastWrapperInstance | null = null
/**
 *
 * @param {Object} axiosOptions axios options
 * @param {Boolean} isLoading 是否开启全屏 loading，默认  true
 */
async function apiAxios(axiosOptions: any, isLoading: boolean = true) {
  try {
    if (isLoading) {
      loadingInstance = showLoadingToast({
        forbidClick: true,
        duration: 0,
      })
    }
    const res = await request(axiosOptions)
    switch (res.status) {
      case 200:
        return Promise.resolve(res)
      case undefined:
        return Promise.resolve(res)
      default:
        return Promise.reject(res)
    }
  } catch (response) {
    return Promise.reject(response)
  } finally {
    loadingInstance && loadingInstance.close()
  }
}

export default apiAxios
