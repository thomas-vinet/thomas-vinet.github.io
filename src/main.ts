import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./style.css";
const app = createApp(App);
import ExternalLink from './components/ExternalLink.vue';
import ResearchPaper from './components/ResearchPaper.vue';

import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(fas);
library.add(fab);
app.component("font-awesome-icon", FontAwesomeIcon);
app.component("elink", ExternalLink);
app.component("paper", ResearchPaper);
app.use(router);

app.mount("#app");
