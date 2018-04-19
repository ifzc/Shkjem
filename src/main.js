import Vue from 'vue'
import App from './App'
import router from './router/router'
import ElementUI from 'element-ui'
import locale from 'element-ui/lib/locale/lang/zh-CN'
import http from './router/http'

import '../node_modules/element-ui/lib/theme-chalk/index.css'
import 'animate.css'

// ES6 兼容组件
import 'babel-polyfill';
import promise from 'es6-promise';
promise.polyfill();

// 服务器地址
Vue.prototype.serverpath = 'http://120.79.76.250/api/'

// 图片服务器地址
Vue.prototype.imgserver = 'http://120.79.76.250/'

Vue.config.productionTip = false
Vue.use(ElementUI, { locale })

new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
})