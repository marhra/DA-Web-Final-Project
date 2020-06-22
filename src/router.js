import Vue from "vue";
import VueRouter from "vue-router";
import Recipes from "./components/Recipes.vue";
import Home from "./components/Home.vue";
import AboutUs from "./components/AboutUs.vue";
import MealPlanner from "./components/MealPlanner.vue";

Vue.use(VueRouter);

export default new VueRouter({
    routes: [{
        path: "/Recipes",
        name: "Recipes",
        component: Recipes
    },

    {
        path: "/",
        name: "Home",
        component: Home
    },
    {
        path: "/AboutUs",
        name: "AboutUs",
        component: AboutUs
    },
    {
        path: "/MealPlanner",
        name: "MealPlanner",
        component: MealPlanner
    },

    ],
    scrollBehavior() {
        return { x: 0, y: 0 }
    }
})