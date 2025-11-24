import Login from "./views/login.js";
import Challenges from "./views/challenges.js";
import ChallengeDetail from "./views/challenge-detail.js";
import Scoreboard from "./views/scoreboard.js";
import Home from "./views/home.js";

const routes = [
  { path: "/", redirect: "/login" },   // 访问根目录直接跳登录页
  { path: "/login", component: Login },
  { path: "/home", component: Home },
  { path: "/challenges", component: Challenges },
  { path: "/challenge/:id", component: ChallengeDetail },
  { path: "/scoreboard", component: Scoreboard }
];

export default VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes
});


