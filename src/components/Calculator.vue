<template>
  <div class="calculator">
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
      <input v-model.number="weight" type="number" min="0" placeholder="65" />
    </div>

    <div class="height">
      <p>Height {{ height }} cm</p>
      <input v-model.number="height" type="number" min="0" placeholder="170" />
    </div>

    <div class="activity">
      <p>How active are you?</p>
      <label for="noActivity">Little/no exercise</label>
      <input type="radio" id="noActivity" value="1.2" v-model.number="activity" />
      <br />
      <label for="lightActivity">Light exercise</label>
      <input type="radio" id="lightActivity" value="1.375" v-model.number="activity" />
      <br />
      <label for="moderateActivity">Moderate exercise (3-5 days/wk)</label>
      <input type="radio" id="moderateActivity" value="1.55" v-model.number="activity" />
      <br />
      <label for="highActivity">Very active (6-7 days/wk)</label>
      <input type="radio" id="highActivity" value="1.725" v-model.number="activity" />
      <br />
      <label for="extraActivity">Extra active (very active or/and physical job)</label>
      <input type="radio" id="extraActivity" value="1.9" v-model.number="activity" />
    </div>

    <!--    Activity Multiplier:
          activity="noActivity" {this.yourBMR * 1.2}
          activity="lightActivity" {this.yourBMR * 1.375}
          activity="moderateActivity" {this.yourBMR * 1.55}
          activity="highActivity" {this.yourBMR * 1.725}
    activity="extraActivity" {this.yourBMR * 1.9}-->

    <form @submit.prevent="calculate">
      <button v-on:click="calculate">Calculate BMR</button>
      Your Basal Metabolic Rate (BMR) is: {{ yourBMR }} kcal. {{control}}
    </form>
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
      control: "",
      activity: 1
    };
  },
  methods: {
    calculate() {
      if (this.gender === "Male") {
        this.yourBMR =
          88.362 +
          13.397 * this.weight +
          4.799 * this.height -
          5.677 * this.age;
        //this.control = "chlap";
      } else if (this.gender === "Female") {
        // prettier-ignore
        this.yourBMR =
          447.593 + 
          9.247 * this.weight + 
          3.098 * this.height - 
          4.330 * this.age;
        //this.control = "zenska";
      } else {
        //this.control = "nezadano nic";
      }
      this.yourBMR = (this.yourBMR * this.activity).toFixed(0);
    }
  }
};
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
