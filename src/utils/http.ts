import { useMemberStore } from '@/stores'

// 基地址
const baseURL = 'https://pcapi-xiaotuxian-front-devtest.itheima.net'

const meberStore = useMemberStore()
// 请求拦截器配置
const httpInterceptor = {
  // 拦截前回调
  invoke(options: UniApp.RequestOptions) {
    // 如果请求的地址开头不为 http
    if (!options.url.startsWith('http')) {
      // 拼接基地址
      options.url = baseURL + options.url
    }
    options.timeout = 10000
    // 添加额外的请求头
    options.header = {
      ...options.header,
      'source-client': 'miniapp',
    }
    const token = meberStore.profile?.token
    // 如有 token
    if (token) {
      // 添加 token 值
      options.header.Authorization = token
    }
  },
}

uni.addInterceptor('request', httpInterceptor)
uni.addInterceptor('uploadFile', httpInterceptor)

interface Data<T> {
  code: string
  msg: string
  result: T
}

// 响应拦截器
export const http = <T>(options: UniApp.RequestOptions) => {
  return new Promise<Data<T>>((resolve, reject) => {
    uni.request({
      ...options,
      // 响应成功
      success(res) {
        // 数据是否返回成功
        if (res.statusCode >= 200 && res.statusCode < 300) {
          resolve(res.data as Data<T>)
        }
        // token 是否失效
        else if (res.statusCode === 401) {
          // 清理用户信息
          meberStore.clearProfile()
          // 跳转到登录页
          uni.navigateTo({
            url: '/pages/login/login',
          })
          // 失败回传
          reject(res)
        } else {
          uni.showToast({
            title: (res.data as Data<T>).msg || '请求错误',
            icon: 'none',
          })
          reject(res)
        }
      },
      // 响应失败
      fail(err) {
        uni.showToast({
          title: '网络错误，换个网络试试',
          icon: 'none',
        })
        reject(err)
      },
    })
  })
}
