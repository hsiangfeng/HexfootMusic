import Vue from 'vue';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import axios from 'axios';
import VueAxios from 'vue-axios';

import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';

import VueAwesomeSwiper from 'vue-awesome-swiper';
import '../node_modules/swiper/dist/css/swiper.min.css';

import VueTypedJs from 'vue-typed-js';
import VueProgress from 'vue-progress';
import VueSweetalert2 from 'vue-sweetalert2';
import '../node_modules/sweetalert2/dist/sweetalert2.min.css';

import 'bootstrap';
import $ from 'jquery';

import VueMeta from 'vue-meta';

import App from './App.vue';
import router from './router';
import store from './store';
import './registerServiceWorker';

library.add(fab, far, fas);
Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.use(VueSweetalert2);

Vue.component('Loading', Loading);

Vue.use(VueAxios, axios);

Vue.use(VueAwesomeSwiper);

Vue.use(VueTypedJs);

Vue.use(VueProgress);

Vue.use(VueMeta, {
  refreshOnceOnNavigation: true,
});

Vue.config.productionTip = false;

window.$ = $;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
