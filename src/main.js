import Vue from "vue";
import App from "./App.vue"
import router from "./router"
import vuetify from "./plugins/vuetify"
///Pagination Component 
import JwPagination from "jw-vue-pagination"
Vue.component('jw-pagination', JwPagination);

Vue.config.productionTip = false

Vue.use(vuetify, {
  iconfont: "fa4",
});

new Vue({
    router,
    vuetify,
    render:h => h(App)
}).$mount('#app')