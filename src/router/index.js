import Vue from "vue";
import VueRouter from "vue-router";
import permission from "./permission";

import { constantRouterMap } from "./map";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes: constantRouterMap
});

// 路由拦截
permission(router);

export default router;
