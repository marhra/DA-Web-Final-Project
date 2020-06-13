<template>
  <div class="calculator">
    <div class="gender">
      <label for="male">Male</label>
      <input type="radio" id="male" value="Male" v-model="picked" />

      <br />

      <label for="female">Female</label>
      <input type="radio" id="female" value="Female" v-model="picked" />

      <br />
    </div>

    <div class="age">
      <p>Age {{ age }} years</p>
      <input v-model.number="age" type="number" min="0" placeholder="30" />
    </div>

    <div class="weight">
      <p>Weight {{ weight }} kg</p>
      <input v-model.number="weight" type="number" min="0" placeholder="65" />
    </div>

    <div class="height">
      <p>Height {{ height }} cm</p>
      <input v-model.number="height" type="number" min="0" placeholder="170" />
    </div>

    <div class="activity">
      <p>How active are you?</p>
      <label for="noActivity">Little/no exercise</label>
      <input type="radio" id="noActivity" value="noActivity" v-model="picked" />
      <br />
      <label for="lightActivity">Light exercise</label>
      <input type="radio" id="lightActivity" value="lightActivity" v-model="picked" />
      <br />
      <label for="moderateActivity">Moderate exercise (3-5 days/wk)</label>
      <input type="radio" id="moderateActivity" value="moderateActivity" v-model="picked" />
      <br />
      <label for="highActivity">Very active (6-7 days/wk)</label>
      <input type="radio" id="highActivity" value="highActivity" v-model="picked" />
      <br />
      <label for="extraActivity">Extra active (very active or/and physical job)</label>
      <input type="radio" id="extraActivity" value="extraActivity" v-model="picked" />
    </div>

    <div id="calculate">
      <button v-on:click="calculate">Calculate BMR</button>
    </div>
    <p class="maleBMR">Your Basal Metabolic Rate (BMR) is: {{ calculate }} kcal.</p>
  </div>
</template>

<script>
export default {
  name: "Calculator",
  data() {
    return {
      picked: "",
      age: "",
      height: "",
      weight: "",
      maleBMR: ""
    };
  },
  computed: {
    calculate() {
      return (
        88.362 + 13.397 * this.weight + 4.799 * this.height - 5.677 * this.age
      );
    }
  }
};

/*    if gender="male" {yourBMR = 88.362 + ${13.397 * this.weight} + ${4.799 * this.height} - ${5.677 * this.age}
      if gender="female" {yourBMR = 447.593 + ${9.247 * this.weight} + ${3.098 * this.height} - ${4.330 * this.age}

      Activity Multiplier:
          if activity="noActivity" {this.yourBMR * 1.2}
          if activity="lightActivity" {this.yourBMR * 1.375}
          if activity="moderateActivity" {this.yourBMR * 1.55}
          if activity="highActivity" {this.yourBMR * 1.725}
          if activity="extraActivity" {this.yourBMR * 1.9} */
</script>

<style lang="css">
.calculator {
  font-size: 24px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  background-color: lightgray;
  width: 100%;
  padding: 20px;
}

.btn {
  font-size: 46px;
}

.gender {
  display: flex;
}
</style>
