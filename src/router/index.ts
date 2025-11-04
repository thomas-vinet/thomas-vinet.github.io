import { createRouter, createWebHistory } from "vue-router";
import HomeView from '../views/Home.vue'
import ResearchView from '../views/Research.vue'
import TeachingView from '../views/Teaching.vue'
import MiscView from '../views/Misc.vue'

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
    { path: '/', component: HomeView, name : "Home"},
    { path: '/research', component: ResearchView, name: "Research" },
    { path: '/teaching', component: TeachingView, name: "Teaching"},
    { path: '/misc', component: MiscView, name: "Miscellaneous"}
  ],
});

router.beforeEach((to, from, next) => {
  document.title = to.name + " | Thomas Vinet"
  next();
});
export default router;
