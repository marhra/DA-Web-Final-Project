<template>
  <div class="container container--shadow">
    <div class="page"></div>
    <Header />
    <router-view></router-view>
    <Footer />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Intro from "./components/Intro.vue";
import Calculator from "./components/Calculator.vue";
import Calculator2 from "./components/Calculator2.vue";
import Recipes from "./components/Recipes.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "App",
  components: {
    Header: Header,
    Intro: Intro,
    Calculator: Calculator,
    Calculator2: Calculator2,
    Recipes: Recipes,
    Footer: Footer
  }
};
</script>

<style lang="css">
@import "~bootstrap/dist/css/bootstrap.css";

.container--shadow {
  box-shadow: 1px 1px 20px 0px gray;
}

a:hover {
  color: green;
}

@media screen and (max-width: 768px) {
  .container--shadow {
    box-shadow: none;
  }
}
</style>
