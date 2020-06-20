import Vue from "vue";
import VueRouter from "vue-router";
import Recipes from "./components/Recipes.vue";
import Home from "./components/Home.vue";
import AboutUs from "./components/AboutUs.vue";
import Blog from "./components/Blog.vue";

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
        path: "/",
        name: "AboutUs",
        component: AboutUs
    },
    {
        path: "/",
        name: "Blog",
        component: Blog
    }

    ]
})