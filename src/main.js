import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { createPinia } from "pinia";
import "./index.css";

// mantain loaded image erb.png
import "./assets/erb.png";

const pinia = createPinia();

import PageTitle from "./components/PageTitle.vue";
import Tooltip from "./components/Tooltip.vue";

createApp(App)
  .use(router)
  .use(pinia)
  .component("PageTitle", PageTitle)
  .component("Tooltip", Tooltip)
  .mount("#app");
