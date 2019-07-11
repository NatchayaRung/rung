// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import Vue from 'vue'
import App from './App'
import router from './router'
import BootstrapVue from 'bootstrap-vue'
import VueResource from 'vue-resource'
import VueMqtt from 'vue-mqtt'
var mqtt = require('mqtt')

Vue.config.productionTip = false
Vue.use(VueMqtt, 'ws://mqt.nauticomm.com:8803', {clientId: 'WebClient-' + parseInt(Math.random() * 100000), username: 'nauticomm', password: 'latlongvms'})
Vue.use(BootstrapVue)
Vue.use(VueResource)
/* eslint-disable no-new */

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  
});
