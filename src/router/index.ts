import { createRouter, createWebHistory } from "vue-router";
import HomeView from '../views/Home.vue'
import ResearchView from '../views/Research.vue'
import TeachingView from '../views/Teaching.vue'
import MiscView from '../views/Misc.vue'

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
    { path: '/', component: HomeView },
    { path: '/research', component: ResearchView },
    { path: '/teaching', component: TeachingView },
    { path: '/misc', component: MiscView }
  ],
});

export default router;
