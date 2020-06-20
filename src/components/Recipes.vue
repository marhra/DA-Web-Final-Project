<template>
  <div class="container">
    <h3>Monday</h3>

    <div class="card">
      <b-card
        v-for="(recipe, index) in recipes"
        :key="index"
        :title="recipe.label"
        :img-src="recipe.image"
        img-alt="cat"
        img-top
        tag="article"
        style="max-width: 20rem;"
        class="mb-2"
      >
        <b-card-text
          v-for="(recipe, index) in recipes"
          :key="index"
          :title="recipe.calories"
        >
        </b-card-text>
      </b-card>
    </div>
  </div>
</template>

<script>
import data from "../json/data.json";
console.log(data);
export default {
  name: "Recipes",
  data() {
    return {
      recipes: Object.values(data),
    };
  },
};
</script>

<style scoped>
.mb-2 {
  margin: 10px;
}

h3 {
  margin: 30px;
}
</style>
