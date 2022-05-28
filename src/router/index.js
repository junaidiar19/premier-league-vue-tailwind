import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Standing from "../views/pages/Standing.vue";
import Matches from "../views/pages/Match.vue";
import Stats from "../views/pages/Stats.vue";
import Players from "../views/pages/Player.vue";
import Stadium from "../views/pages/Stadium.vue";
import League from "../views/pages/League.vue";

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
  {
    path: "/matches",
    name: "matches",
    component: Matches,
  },
  {
    path: "/stats",
    name: "stats",
    component: Stats,
  },
  {
    path: "/players",
    name: "players",
    component: Players,
  },
  {
    path: "/stadium",
    name: "stadium",
    component: Stadium,
  },
  {
    path: "/league",
    name: "league",
    component: League,
  },
  {
    path: "/*",
    component: 404,
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
