import { createApp } from "vue";
import App from "./App.vue";
import ArcoVue from "@arco-design/web-vue";
import router from "./router/index"
import store from "./store/index"
import "./index.css";
import "@arco-design/web-vue/dist/arco.css";
//加载全局的弹窗样式
import "./assets/css/global.less"

const app = createApp(App);
app.use(ArcoVue, {
  // 用于改变使用组件时的前缀名称
  componentPrefix: "a",
}).use;

app.use(router).use(store).mount("#app");
