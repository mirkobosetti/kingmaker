import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { createPinia } from "pinia";
import "./index.css";

const pinia = createPinia();

import PageTitle from "./components/PageTitle.vue";
import Tooltip from "./components/Tooltip.vue";

const app = createApp(App)

app.use(router);
app.use(pinia);

app.component("PageTitle", PageTitle);
app.component("Tooltip", Tooltip);

app.mount("#app");
