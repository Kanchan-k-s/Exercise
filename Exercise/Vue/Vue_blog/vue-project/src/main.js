import Vue from 'vue'
import App from './App.vue'
import VueRoute from 'vue-router'

import VueResource from 'vue-resource'

import VueRouter from 'vue-router'

import Routes from './router'

Vue.use(VueResource);
Vue.use(VueRoute);

const router = new VueRouter({
  routes: Routes,
  mode:'history'
})

Vue.directive('theme',{
  bind(el,binding,vnode){
    if(binding.value=='wide'){
      el.style.maxWidth = "1260px";
    } else if (binding.value = 'narrow'){
        el.style.maxWidth = "560px";
    }
    if(binding.arg=='column'){
      el.style.background ='#ddd';
      el.style.padding ='20px';
    }
  }
})


Vue.filter('snippet',function(value){
  return value.slice(0,100)+'....'
})

new Vue({
  render: (h) => h(App),
  router: router
}).$mount('#app')
