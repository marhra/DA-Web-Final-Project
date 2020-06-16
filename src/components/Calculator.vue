<template>
  <div class="container">
    <div class="calculator">
      <div class="input-form">
        <div class="gender">
          <label for="male">Male</label>
          <input type="radio" id="male" value="Male" v-model="gender" />

          <br />

          <label for="female">Female</label>
          <input type="radio" id="female" value="Female" v-model="gender" />

          <br />
        </div>

        <div class="age">
          <p>Age {{ age }} years</p>
          <input v-model.number="age" type="number" min="0" placeholder="30" />
        </div>

        <div class="weight">
          <p>Weight {{ weight }} kg</p>
          <input v-model.number="weight" type="number" min="0" placeholder="55" />
        </div>

        <div class="height">
          <p>Height {{ height }} cm</p>
          <input v-model.number="height" type="number" min="0" placeholder="160" />
        </div>

        <form @submit.prevent="calculate">
          <button v-on:click="calculate">Calculate</button>
        </form>
      </div>

      <!-- calculated BMR -->
      <div class="side">
        <div class="your-bmr">
          <p>Your Basal Metabolic Rate (BMR) is: {{ yourBMR }} kcal/day. {{control}}</p>
          <p></p>
        </div>
        <hr />
        <!-- activity -->
        <div class="activity">
          <p>How active are you?</p>
          <label for="noActivity">Little/no exercise</label>
          <input
            type="radio"
            id="noActivity"
            value="1.2"
            v-on:click="calculate_intake"
            v-model.number="activity"
          />
          <br />
          <label for="lightActivity">Light exercise</label>
          <input
            type="radio"
            id="lightActivity"
            value="1.375"
            v-on:click="calculate_intake"
            v-model.number="activity"
          />
          <br />
          <label for="moderateActivity">Moderate exercise (3-5 days/wk)</label>
          <input
            type="radio"
            id="moderateActivity"
            value="1.55"
            v-on:click="calculate_intake"
            v-model.number="activity"
          />
          <br />
          <label for="highActivity">Very active (6-7 days/wk)</label>
          <input
            type="radio"
            id="highActivity"
            value="1.725"
            v-on:click="calculate_intake"
            v-model.number="activity"
          />
          <br />
          <label for="extraActivity">Extra active (very active or/and physical job)</label>
          <input
            type="radio"
            id="extraActivity"
            value="1.9"
            v-on:click="calculate_intake"
            v-model.number="activity"
          />
          <!--    Activity Multiplier:
          activity="noActivity" {this.yourBMR * 1.2}
          activity="lightActivity" {this.yourBMR * 1.375}
          activity="moderateActivity" {this.yourBMR * 1.55}
          activity="highActivity" {this.yourBMR * 1.725}
          activity="extraActivity" {this.yourBMR * 1.9}-->
        </div>
        <hr />
        <div class="intake">
          <p>Energy intake to maintain your weight is: {{ yourIntake }} kcal/day.</p>
        </div>
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
      yourBMR: "",
      activity: "",
      yourIntake: ""
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
  width: 75%;
  padding: 30px;
}
.input-form {
  padding: 20px;
  background-color: gainsboro;
}
.side {
  padding: 20px;
  flex-direction: column;
  background-color: cadetblue;
}

.activity {
  padding: 20px 0 2ppx 0;
}
</style>
