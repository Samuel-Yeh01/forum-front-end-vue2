import Vue from "vue";
import VueRouter from "vue-router";
import NotFound from "../views/NotFound.vue";
import SignIn from "../views/SignIn.vue";
// 餐廳列表是一定會經過的頁面，故直接在路由端載入
import Restaurants from "../views/Restaurants.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "root",
    redirect: "/restaurants",
  },
  {
    path: "/signin",
    name: "sign-in",
    component: SignIn,
  },
  {
    path: "/signup",
    name: "sign-up",
    component: () => import("../views/SignUp.vue"),
  },
  {
    path: "/restaurants",
    name: "restaurants",
    component: Restaurants,
  },
  {
    path: "/restaurants/feeds",
    name: "restaurants-feeds",
    component: () => import("../views/RestaurantsFeeds.vue"),
  },
  {
    path: "/restaurants/top",
    name: "restaurants-tops",
    component: () => import("../views/RestaurantsTop.vue"),
  },
  {
    path: "/users/top",
    name: "users-top",
    component: () => import("../views/UsersTop.vue"),
  },
  {
    // 由於 Vue Router 路由會由上往下進行匹配，所以當路由一條條解析下來，所有的路由都無法匹配，最後就會匹配到 path: '*'，星號 (*) 是萬用字元，這裡代表「所有的網址」，也就是說不管使用者輸入什麼，只要找不到對應網頁，最後就會返回 NotFound 這個頁面。
    // 相反的，若使用者輸入的網址是 /about 時，因為由上往下解析時，跑到 path: '/about' 的地方就匹配成功了，因此就不會再往下。
    path: "*",
    name: "not-found",
    component: NotFound,
  },
];

const router = new VueRouter({
  linkExactActiveClass: "active",
  routes,
});

export default router;
