import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Standing from "../views/pages/Standing.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/standings",
    name: "standings",
    component: Standing,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  linkActiveClass: "active",
  scrollBehavior() {
    document.getElementById("app").scrollIntoView({ behavior: "smooth" });
  },
});

export default router;
