<template>
  <div class="container">
    <div class="page"></div>
    <Header />
    <Intro />
    <Calculator />
    <Recipes />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Intro from "./components/Intro.vue";
import Calculator from "./components/Calculator.vue";
import Recipes from "./components/Recipes.vue";

export default {
  name: "App",
  components: {
    Header: Header,
    Intro: Intro,
    Calculator: Calculator,
    Recipes: Recipes,
  },
};
</script>

<style lang="css">
@import "~bootstrap/dist/css/bootstrap.css";
</style>
