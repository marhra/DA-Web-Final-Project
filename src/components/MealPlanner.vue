<template>
  <div class="planner">
    <img src="assets/Meal_plan_image.jpg" alt="food" />
    <div class="mb-5" v-for="(item, index) in items" v-bind:key="index">
      <h2>{{ item.day }}</h2>
      <div>
        <h4>{{item.breakfast.label}}</h4>
        <p>
          <small>{{ Math.round(item.breakfast.caloriesPerPortion) }} kcal</small>
        </p>

        <b-button v-b-toggle="'collapse-' + index" variant="primary">Show ingredients</b-button>
        <b-collapse v-bind:id="'collapse-' + index" class="mt-2">
          <b-card>
            <ul>
              <li v-for="(ingredient, index) in item.breakfast.ingredients" v-bind:key="index">
                <strong>{{ingredient.text}}</strong>
              </li>
            </ul>
          </b-card>
        </b-collapse>

        <h4>{{item.lunch.label}}</h4>
        <p>
          <small>{{ Math.round(item.lunch.caloriesPerPortion) }} kcal</small>
        </p>

        <b-button v-b-toggle="'collapse-' + index + 1" variant="primary">Show ingredients</b-button>
        <b-collapse v-bind:id="'collapse-' + index + 1" class="mt-2">
          <b-card>
            <ul>
              <li v-for="(ingredient, index) in item.lunch.ingredients" v-bind:key="index">
                <strong>{{ingredient.text}}</strong>
              </li>
            </ul>
          </b-card>
        </b-collapse>

        <h4>{{item.dinner.label}}</h4>
        <p>
          <small>{{ Math.round(item.dinner.caloriesPerPortion) }} kcal</small>
        </p>

        <b-button v-b-toggle="'collapse-' + index + 2" variant="primary">Show ingredients</b-button>
        <b-collapse v-bind:id="'collapse-' + index + 2" class="mt-2">
          <b-card>
            <ul>
              <li v-for="(ingredient, index) in item.dinner.ingredients" v-bind:key="index">
                <strong>{{ingredient.text}}</strong>
              </li>
            </ul>
          </b-card>
        </b-collapse>
      </div>
    </div>

    <button v-on:click="resetMenu">Clear menu</button>

    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "MealPlanner",
  data: function() {
    return {
      items: JSON.parse(localStorage.getItem("currentMenu"))
    };
  },
  methods: {
    resetMenu() {
      localStorage.removeItem("currentMenu");
    }
  }
};
</script>
