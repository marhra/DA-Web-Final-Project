<template>
  <div class="planner">
    <img src="assets/Meal_plan_image.jpg" alt="food" />
    <div class="week">
      <b-card
        class="container-card"
        style="max-width: 19rem"
        v-for="(item, index) in items"
        :key="index"
      >
        <template v-slot:header>
          <h5 class="mb-0">{{ item.day }}</h5>
        </template>
        <b-card
          no-body
          :img-src="item.breakfast.image"
          img-alt="meal"
          img-top
          class="overflow-hidden"
          style="max-width: 560px"
        >
          <b-card-body>
            <h6>{{item.breakfast.label}}</h6>

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
          </b-card-body>
        </b-card>

        <b-card no-body :img-src="item.lunch.image" img-alt="meal" img-top class="small-card">
          <b-card-body>
            <h6>{{item.lunch.label}}</h6>
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
          </b-card-body>
        </b-card>
        <b-card no-body :img-src="item.dinner.image" img-alt="meal" img-top class="small-card">
          <b-card-body>
            <h6>{{item.dinner.label}}</h6>
            <p>
              <small>{{ Math.round(item.dinner.caloriesPerPortion) }} kcal</small>
            </p>

            <b-button v-b-toggle="'collapse-' + index + 2" variant="primary">Show ingredients</b-button>
            <b-collapse v-bind:id="'collapse-' + index + 2" class="mt-2">
              <b-card>
                <ul class="ingredients">
                  <li
                    v-for="(ingredient, index) in item.dinner.ingredients"
                    v-bind:key="index"
                  >{{ingredient.text}}</li>
                </ul>
              </b-card>
            </b-collapse>
          </b-card-body>
        </b-card>
      </b-card>
    </div>
    <p class="new-plan">
      Do you want to make a weekly meal plan?
      <br />Click on the button below and generate your customized meal plan that suits your energy intake requirements.
    </p>
    <div class="clear">
      <b-button v-on:click="resetMenu" variant="secondary">Create a new meal plan</b-button>
    </div>

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
      this.$router.push("/");
    }
  }
};
</script>

<style scoped>
.week {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin: 30px 0 30px 0px;
}

.container-card {
  margin: 20px 20px 0 20px;
}

.small-card {
  margin-bottom: 20px;
  height: 32%;
}
.card.overflow-hidden {
  margin-bottom: 10px;
}
.card-body {
  padding: 0.9rem;
}
ul {
  padding-left: 8px;
  margin-bottom: 0px;
  font-size: 12px !important;
}

.ingredients > li {
  margin: 0;
}

.new-plan {
  text-align: center;
  padding: 30px 60px 30px 60px 30;
}

.clear {
  text-align: center;
}
</style>
