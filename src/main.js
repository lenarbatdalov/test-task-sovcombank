import Vue from 'vue';
import LocalFormatPlugin from './plugins/localFormat';
import App from './App.vue';
import store from './store';
import './components';

import './assets/sass/index.scss';

Vue.use(LocalFormatPlugin);

Vue.config.productionTip = false;

new Vue({
  store,
  render: (h) => h(App),
}).$mount('#app');
