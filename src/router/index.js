import Vue from "vue";
import VueRouter from "vue-router";
import Create from "@/components/Create.vue";
import Edit from "@/components/Edit.vue";
import Index from "@/components/Index.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Index
  },

  {
    name: "Create",
    path: "/create",
    component: Create
  },
  {
    name: "Edit",
    path: "/edit",
    component: Edit
  },
  {
    name: "Index",
    path: "/index",
    component: Index
  }
];

const router = new VueRouter({
  mode: "history",
  routes: routes
});

export default router;
