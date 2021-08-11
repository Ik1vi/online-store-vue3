import {createApp, mount, use} from 'vue';

import router from './router';
import store from './store';
import App from './App.vue';

// Vue.config.productionTip = false;

// new Vue({
//   router,
//   store,
//   render: (h) => h(App),
// }).$mount('#app');

const app = createApp(App);
app.use(store, router);
app.mount('#app');
