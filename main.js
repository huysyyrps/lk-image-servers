import App from './App'

// #ifndef VUE3
import Vue from 'vue'
import {get,post,upload} from "./api/request.js"
Vue.config.productionTip = false

Vue.prototype.$get = get;
Vue.prototype.$post = post;

App.mpType = 'app'
const app = new Vue({
    ...App
})
app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
export function createApp() {
  const app = createSSRApp(App)
  return {
    app
  }
}
// #endif