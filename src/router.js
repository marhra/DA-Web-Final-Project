import Vue from "vue";
import VueRouter from "vue-router";
import Recipes from "./components/Recipes.vue";
import Home from "./components/Home.vue";
import AboutUs from "./components/AboutUs.vue";
import Blog from "./components/Blog.vue";
import MealPlanner from "./components/MealPlanner.vue"

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
        path: "/About",
        name: "AboutUs",
        component: AboutUs
    },
    {
        path: "/Blog",
        name: "Blog",
        component: Blog
    },
    {
        path: "/MealPlanner",
        name: "MealPlanner",
        component: MealPlanner
    }

    ]
})