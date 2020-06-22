<template>
  <div class="home">
    <Intro />

    <Calculator2 />
    <router-view></router-view>
  </div>
</template>

<script>
import Intro from "./Intro.vue";
import Calculator2 from "./Calculator2.vue";

export default {
  name: "Home",
  components: {
    Intro: Intro,
    Calculator2: Calculator2
  }
};
</script>
