<template>
  <div class="container">
    <div class="page"></div>
    <Homepage />
    <Calculator />
  </div>
</template>

<script>
import Homepage from "./components/Homepage.vue";
import Calculator from "./components/Calculator.vue";

export default {
  name: "App",
  components: {
    Homepage: Homepage,
    Calculator: Calculator
  }
};
</script>

<style lang="css">
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
  font-size: 14px;
}

body {
  margin: 0;
}

.container {
  height: 100vh;
  margin: 60px;
}

.page {
  padding: 2rem 4rem;
  display: flex;
  align-content: center;
}

h1 {
  font-size: 42px;
}
</style>