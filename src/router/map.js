import { workLayout } from "@/layouts";

// const routeView = {
//   name: "RouteView",
//   render: h => h("router-view")
// };

export const constantRouterMap = [
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

export const constantErrorMap = [
  {
    path: "/404",
    name: "Code404",
    meta: { title: "404" },
    component: () => import("@/views/error/404.vue")
  },
  {
    path: "*",
    redirect: "/404"
  }
]