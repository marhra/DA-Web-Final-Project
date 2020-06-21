<template>
  <div class="results">
    <div v-for="(item, index) in items" v-bind:key="index">
      <h3>{{ item.day }}</h3>
      <p>{{ item }}</p>
    </div>

    <router-view></router-view>
  </div>
</template>

<script>
import createMenu from "../vypocet";

let obj = [];
let days = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

for (let i = 0; i < 7; i++) {
  let item = {
    day: days[i],
    breakfast: createMenu().breakfast.label,
    lunch: createMenu().lunch.label,
    dinner: createMenu().dinner.label,
  };

  obj.push(item);
}

export default {
  name: "Results",
  data: function() {
    return {
      items: obj,
    };
  },
};
</script>
