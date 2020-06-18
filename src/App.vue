<template>
  <div class="container">
    <div class="page"></div>
    <Header />
    <BMR />
    <Calculator />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import BMR from "./components/BMR.vue";
import Calculator from "./components/Calculator.vue";

export default {
  name: "App",
  components: {
    Header: Header,
    BMR: BMR,
    Calculator: Calculator
  }
};
</script>

<style lang="css">
@import "~bootstrap/dist/css/bootstrap.css";
</style>