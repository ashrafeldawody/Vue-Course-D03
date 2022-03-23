import { createWebHistory, createRouter } from "vue-router";
import Books from "./components/BooksComponent.vue";
import Cart from "./components/CartComponent.vue";

const routes = [
  {
    path: "/books",
    name: "books",
    component: Books,
  },
  {
    path: "/cart",
    name: "cart",
    component: Cart,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
