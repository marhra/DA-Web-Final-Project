<template>
  <div class="container">
    <div class="cards">
      <b-card
        no-body
        style="max-width: 14rem"
        v-for="(recipe, index) in recipes"
        :key="index"
        :img-src="recipe.image"
        img-alt="Image"
        img-top
      >
        <b-card-body>
          <b-card-title :title="recipe.label"></b-card-title>
          <b-card-sub-title class="mb-1"
            >{{
              Math.round(recipe.calories / recipe.yield)
            }}
            kcal</b-card-sub-title
          >
        </b-card-body>
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
h3 {
  margin: 30px;
}
.cards {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.card-title {
  font-size: 1em;
}

.card-subtitle {
  font-size: 0.8em;
}
</style>
