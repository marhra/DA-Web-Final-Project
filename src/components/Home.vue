<template>
  <div class="home">
    <Intro />
    <Calculator />
    <router-view></router-view>
  </div>
</template>

<script>
import Intro from "./Intro.vue";
import Calculator from "./Calculator.vue";

export default {
  name: "Home",
  components: {
    Intro: Intro,
    Calculator: Calculator
  }
};
</script>
