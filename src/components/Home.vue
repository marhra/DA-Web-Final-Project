<template>
  <div class="home">
    <Intro />
    <Calculator />
    <Calculator2 />
    <router-view></router-view>
  </div>
</template>

<script>
import Intro from "./Intro.vue";
import Calculator2 from "./Calculator2.vue";
import Calculator from "./Calculator.vue";

export default {
  name: "Home",
  components: {
    Intro: Intro,
    Calculator2: Calculator2,
    Calculator: Calculator
  }
};
</script>
