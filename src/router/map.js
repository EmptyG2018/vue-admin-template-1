import { workLayout } from "@/layouts";

// const routeView = {
//   name: "RouteView",
//   render: h => h("router-view")
// };

const constantRouterMap = [
  {
    path: "/login",
    name: "Login",
    meta: { title: "登录" },
    component: () => import("@/views/login")
  },
  {
    path: "/",
    name: "Work",
    redirect: "/dashboard",
    component: workLayout,
    children: [
      {
        path: "/dashboard",
        name: "Dashboard",
        component: () => import("@/views/dashboard")
      }
    ]
  }
];

export { constantRouterMap };
