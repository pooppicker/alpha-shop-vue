import Vue from "vue";
import VueRouter from "vue-router";
import NotFound from "../views/NotFound.vue";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
    children: [
      {
        path: "/",
        redirect: "/1",
      },
      {
        path: "1",
        component: () =>
          import("../components/formSteps/CheckOutInformation.vue"),
      },
      {
        path: "2",
        component: () => import("../components/formSteps/CheckOutDelivery.vue"),
      },
      {
        path: "3",
        component: () => import("../components/formSteps/CheckOutPayment.vue"),
      },
    ],
  },
  {
    path: "*",
    name: "not-found",
    component: NotFound,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
