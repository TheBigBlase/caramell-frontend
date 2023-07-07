import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import Broker from "../views/Broker.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/brokerList",
      name: "list broker",
      // route level code-splitting
      // this generates a separate chunk (Abot.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/ListBroker.vue"),
    },
		{
      path: "/broker",
      name: "Broker",
			props: route => ({ brk_str: route.query.brk_str }),
      component: Broker,
    },
  ],
});

export default router;
