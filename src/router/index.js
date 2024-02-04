import { createWebHistory, createRouter } from "vue-router";


const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../views/home.vue"),
  },

  {
    path: "/aboutus",
    name: "About",
    component: () => import("../views/About.vue")
  },

  {
    path: "/blogsNews",
    name: "BlogsNews",
    component: () => import("../views/blogsNews.vue"),
  },

  {
    path: "/calendary",
    name: "Calendary",
    component: () => import("../views/Calendary.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  // history: createWebHistory(),
  routes
});

export default router