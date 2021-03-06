import Vue from "vue";
import "./plugins/fontawesome";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Buefy from "buefy";
import "buefy/dist/buefy.css";
import Acl from "vue-browser-acl";
import { ACLRules } from "./utils/acl";

Vue.use(Acl, () => store.getters.currentUser, ACLRules, {
  router,
  failRoute: { path: "/" /*, replace: true*/ },
  caseMode: false
});

Vue.use(Buefy, {
  defaultIconPack: "fas",
  defaultIconComponent: "font-awesome-icon"
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
