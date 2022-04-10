import { createApp } from "vue";

import App from "./App.vue";
import router from "./router";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { dom } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import ElementPlus from "element-plus";
import "element-plus/dist/index.css";

import "@/assets/css/black.css";
library.add(fas);
library.add(fab);
library.add(far);
dom.watch();

const app = createApp(App);

app.component("font-awesome-icon", FontAwesomeIcon);
app.use(router);
app.use(ElementPlus);
app.mount("#app");
