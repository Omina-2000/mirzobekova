import Vue from 'vue'
import App from './App.vue'
import Router from 'vue-router'

Vue.use(Router)

// const router = new Router({
//   routes:[
//     {
//       path:'/',
//       name:'main',
//       component:
//     }
//   ]
// })

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
