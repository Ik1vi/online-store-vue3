import {createApp, mount} from 'vue';

import router from './router';
import store from './store';
import App from './App.vue';

// Vue.config.productionTip = false;

// new Vue({
//   router,
//   store,
//   render: (h) => h(App),
// }).$mount('#app');

const app = createApp(App).mount('#app');
app.use(store, router);
