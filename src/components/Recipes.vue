<template>
  <div class="container">
    <h3>Monday</h3>

    <b-card
      no-body
      style="max-width: 20rem;"
      v-for="(recipe, index) in recipes"
      :key="index"
      :img-src="recipe.image"
      img-alt="Image"
      img-top
    >
      <b-card-body>
        <b-card-title :title="recipe.label"></b-card-title>
        <b-card-sub-title class="mb-2"
          >{{
            Math.round(recipe.calories / recipe.yield)
          }}
          kcal</b-card-sub-title
        >
      </b-card-body>
    </b-card>
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
