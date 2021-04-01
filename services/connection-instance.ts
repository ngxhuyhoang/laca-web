import Axios, { AxiosRequestConfig, AxiosResponse } from 'axios'
import { BASE_URL } from '~/core'

const ConnectionInstance = Axios.create({
  timeout: 20000,
  baseURL: BASE_URL,
  paramsSerializer(params) {
    const searchParams = new URLSearchParams()
    for (const key of Object.keys(params)) {
      const param = params[key]
      if (param !== undefined) {
        if (Array.isArray(param)) {
          let ids = ''
          param.forEach((p, i) => {
            if (i + 1 === param.length) {
              ids += `${p}`
            } else {
              ids += `${p},`
            }
          })
          searchParams.append(key, ids)
        } else {
          searchParams.append(key, param)
        }
      }
    }
    return searchParams.toString()
  },
})

ConnectionInstance.interceptors.request.use(
  (requestConfig: AxiosRequestConfig) => {
    console.info('API Request:', requestConfig)
    return requestConfig
  },
  (error) => {
    console.error('API Request Error:', error)
    return Promise.reject(error)
  }
)

ConnectionInstance.interceptors.response.use(
  (response: AxiosResponse) => {
    console.info('API Response:', response)

    // Try to find the access token from response
    if (response.data?.token?.accessToken) {
      ConnectionInstance.defaults.headers = {
        ...ConnectionInstance.defaults.headers,
        Authorization: `Bearer ${response.data?.token?.accessToken}`,
      }
    }

    return response
  },
  (error) => {
    console.error('API Response Error:', error)
    const errorMessage = error?.response?.data?.message
    if (errorMessage) {
      return Promise.reject(new Error(errorMessage))
    }
    return Promise.reject(error)
  }
)

export const setToken = (token: string) => {
  ConnectionInstance.defaults.headers = {
    ...ConnectionInstance.defaults.headers,
    Authorization: `Bearer ${token}`,
  }
}

export default ConnectionInstance
