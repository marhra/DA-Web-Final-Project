<template>
  <div class="container">
    <div class="page"></div>
    <Header />
    <Intro />
    <Calculator />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Intro from "./components/Intro.vue";
import Calculator from "./components/Calculator.vue";

export default {
  name: "App",
  components: {
    Header: Header,
    Intro: Intro,
    Calculator: Calculator
  }
};
</script>

<style lang="css">
@import "~bootstrap/dist/css/bootstrap.css";
</style>