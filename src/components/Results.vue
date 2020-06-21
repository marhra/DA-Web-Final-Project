<template>
  <div class="results">
    <p>Name: {{ label }}</p>
    <p>Calories: {{ calories }}</p>

    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "Results",
  data() {
    return {
      label: "",
      calories: "",
    };
  },
};
</script>
