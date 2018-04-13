import Vue from 'vue'
import App from './App'
import router from './router/router'
import ElementUI from 'element-ui'
import locale from 'element-ui/lib/locale/lang/zh-CN'
import '../node_modules/element-ui/lib/theme-chalk/index.css'
import http from './router/http'

import 'animate.css'

//import 'vue-fullpage/vue-fullpage.css'
//import VueFullpage from 'vue-fullpage'
//Vue.use(VueFullpage)

Vue.prototype.imgserver = 'http://120.79.76.250/'


Vue.config.productionTip = false
Vue.use(ElementUI, { locale })

new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
})