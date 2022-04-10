import { createWebHistory, createRouter } from "vue-router";
import HomePage from "@/views/HomePage";
import PokemonPage from "@/views/pokemon/PokemonPage";

const routes = [
  {
    path: "/home",
    name: "Home",
    component: HomePage,
  },
  {
    path: "/pokemon/:id",
    name: "Pokemon",
    component: PokemonPage,
    props: true,
  },
  {
    path: "/:pathMatch(.*)*",
    redirect: "/home",
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
