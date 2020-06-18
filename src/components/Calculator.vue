<template>
  <div class="calculator">
    <div class="input-form">
      <div class="gender">
        <b-form-group>
          <b-form-radio v-model="gender" name="some-radios" value="Male">Male</b-form-radio>
          <b-form-radio v-model="gender" name="some-radios" value="Female">Female</b-form-radio>
        </b-form-group>
      </div>

      <div class="mt-2">
        Age:&nbsp;
        <b-form-input v-model.number="age" type="number" min="0"></b-form-input>&nbsp; years
      </div>

      <div class="mt-2">
        Weight:&nbsp;
        <b-form-input v-model.number="weight" type="number" min="0"></b-form-input>&nbsp;kg
      </div>

      <div class="mt-2">
        Height:&nbsp;
        <b-form-input v-model.number="height" type="number" min="0"></b-form-input>&nbsp;cm
      </div>

      <form @submit.prevent="calculate">
        <b-button v-on:click="calculate" variant="success">Calculate BMR</b-button>
      </form>

      <!-- calculate BMR -->
      <div class="your-bmr">
        <p>Your Basal Metabolic Rate (BMR) is: {{ yourBMR }} kcal/day.</p>
      </div>
    </div>
    <div class="side">
      <!-- activity -->
      <p>How active are you?</p>
      <b-form-group class="activity">
        <b-form-radio v-model.number="activity" name="some-radios" value="1.2">Little or no exercise</b-form-radio>
        <b-form-radio
          v-model.number="activity"
          name="some-radios"
          value="1.375"
        >Light exercise (1-2 days/wk)</b-form-radio>
        <b-form-radio
          v-model.number="activity"
          name="some-radios"
          value="1.55"
        >Moderate exercise (3-5 days/wk)</b-form-radio>
        <b-form-radio
          v-model.number="activity"
          name="some-radios"
          value="1.725"
        >Very active (6-7 days/wk)</b-form-radio>
        <b-form-radio
          v-model.number="activity"
          name="some-radios"
          value="1.9"
        >Extra active (very active or/and physical job)</b-form-radio>
      </b-form-group>
      <br />
      <form @submit.prevent="calculate_intake">
        <b-button v-on:click="calculate_intake" variant="success">Calculate</b-button>
      </form>

      <div class="intake">
        <p>Energy intake to maintain your weight is: {{ yourIntake }} kcal/day.</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Calculator",
  data() {
    return {
      gender: "",
      age: "",
      height: "",
      weight: "",
      yourBMR: 0,
      activity: "",
      yourIntake: 0
    };
  },
  methods: {
    calculate() {
      if (this.gender === "Male") {
        this.yourBMR = (
          10 * this.weight +
          6.25 * this.height -
          5 * this.age +
          5
        ).toFixed(0);
        //this.control = "chlap";
      } else if (this.gender === "Female") {
        this.yourBMR = (
          10 * this.weight +
          6.25 * this.height -
          5 * this.age -
          161
        ).toFixed(0);
        //this.control = "zenska";
      }
    },
    calculate_intake() {
      this.yourIntake = (this.yourBMR * this.activity).toFixed(0);
    }
  }
};
</script>

<style lang="css">
.calculator {
  display: flex;
  width: 100%;
}
.input-form {
  padding: 40px;
  background-color: gainsboro;
}
.side {
  padding: 40px;
  flex-direction: column;
  background-color: gainsboro;
  width: 50%;
}
</style>
