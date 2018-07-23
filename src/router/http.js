/*
    http 配置
*/
'use strict'

import axios from 'axios'
import {
    Loading,
    Message
} from 'element-ui'

axios.defaults.baseURL = 'http://shkjgw.shkjem.com/api'

//设置超时时间
axios.defaults.timeout = 5000

// 指定允许其他域名访问

//http 拦截器
var loadinginstace

axios.interceptors.request.use(config => {
    if (
        config.url.substring(0, 5) === '/news' ||
        config.url.substring(0, 5) === '/recr') {
        return config
    }
    console.log(sessionStorage.getItem("Ticket") != null)
    if (sessionStorage.getItem("Ticket") != null) {
        config.headers = {
            "Authorization": "BasicAuth " + sessionStorage.getItem("Ticket")
        }
    }
    //console.log(config.url)
    // element ui Loading方法
    loadinginstace = Loading.service({
        fullscreen: true
    })
    return config
}, error => {
    loadinginstace.close()
    Message.error({
        message: '加载超时'
    })
    return Promise.reject(error)
})

// http响应拦截器
axios.interceptors.response.use(data => { // 响应成功关闭loading
    loadinginstace.close()
    return data
}, error => {
    loadinginstace.close()
    /*
    Message.error({
        message: '加载失败'
    })
    */
    return Promise.reject(error)
})

export default axios