import Vue from "vue";
import VueRouter from "vue-router";
import Edit from "@/components/Edit.vue";
import Index from "@/components/Index.vue";
import Category from "@/components/Category.vue";

Vue.use(VueRouter);

const routes = [
  {
    name: "Edit",
    path: "/edit",
    component: Edit
  },
  {
    name: "Index",
    path: "/index",
    component: Index
  },
  {
    name: "Category",
    path: "/category",
    component: Category
  }
];

const router = new VueRouter({
  mode: "history",
  routes: routes
});

export default router;
