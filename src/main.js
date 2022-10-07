import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

createApp(App).use(store).use(router).mount("#app");

window.Kakao.init("b3e35149d116ba93b53e9f603fe17a26");
