<template>
  <div class="calculator2">
    <div class="cal-body">
      <h2>Calculator</h2>
      <div class="header">
        <!--RADIO 1-->

        <input v-model="gender" type="radio" value="Female" />

        <img src="/assets/female.png " class="picture" />

        <!--RADIO 2-->

        <img src="/assets/mann.png " class="picture" />

        <input v-model="gender" type="radio" value="Male" />
      </div>
      <!--weight, height,age-->
      <div class="headerForms">
        <div class="windows">
          <img src="/assets/age.png " class="picture" />
          <input class="input" v-model.number="age" type="number" min="0" name="age" />

          <img src="/assets/weight.png " class="picture" />
          <input class="input" v-model.number="weight" type="number" min="0" />

          <img src="/assets/height.png " class="picture" />
          <input
            class="input"
            v-model.number="height"
            type="number"
            min="0"
            id="height"
            name="height"
          />
        </div>
        <!--submit-->
        <div class="submit">
          <form @submit.prevent="calculate">
            <button class="button" v-on:click="calculate">Calculate BMR</button>
          </form>
        </div>

        <!-- calculate BMR -->
        <div class="your-bmr">
          <p class="ybmr">Your Basal Metabolic Rate (BMR) is: {{ yourBMR }} kcal/day.</p>
        </div>
      </div>
      <!--activity-->
      <div class="exeForms">
        <div class="left">
          <h5 class="h7">How active are you?</h5>
          <label for="radio1">
            <input
              v-model.number="activity"
              type="radio"
              class="radio_item"
              value="1.2"
              name="activity"
              id="radio1"
            />
            Little or no exercise
          </label>

          <label for="radio2">
            <input
              v-model.number="activity"
              type="radio"
              class="radio_item"
              value="1.375"
              name="activity"
              id="radio2"
            />
            Light exercise (1-2 days/wk)
          </label>

          <label for="radio3">
            <input
              v-model.number="activity"
              type="radio"
              class="radio_item"
              value="1.55"
              name="activity"
              id="radio3"
            />
            Moderate exercise (3-5 days/wk)
          </label>

          <label for="radio4">
            <input
              v-model.number="activity"
              type="radio"
              class="radio_item"
              value="1.725"
              name="activity"
              id="radio4"
            />
            Very active (6-7 days/wk)
          </label>

          <label for="radio5">
            <input
              v-model.number="activity"
              type="radio"
              class="radio_item"
              value="1.9"
              name="activity"
              id="radio5"
            />
            Extra active (very active or/and physical job):
          </label>
        </div>

        <!--goal-->
        <div class="right">
          <h5 class="h7">What is your long-term body goal?</h5>

          <label for="radio6">
            <input
              v-model.number="goal"
              type="radio"
              class="radio_item"
              value="Maintain"
              name="goal"
              id="radio6"
            />
            Maintain current weight
          </label>

          <label for="radio7">
            <input
              v-model.number="goal"
              type="radio"
              class="radio_item"
              value="Lose"
              name="goal"
              id="radio7"
            />
            Lose weight
          </label>

          <label for="radio8">
            <input
              v-model.number="goal"
              type="radio"
              class="radio_item"
              valuevalue="Gain"
              name="goal"
              id="radio8"
            />
            Gain weight
          </label>
        </div>
      </div>
      <!--goalIntake-->
      <div class="exeFooter">
        <form @submit.prevent="calculate_goalIntake">
          <button v-on:click="calculate_goalIntake" class="button">Calculate</button>
        </form>
        <p class="ybmr">Energy intake to reach your body goal is: {{ goalIntake }} kcal/day.</p>
      </div>
      <div class="link" align="center">
        <!--      <b-button v-bind:to="'/components/Recipes'">Create your meal plan</b-button>-->
        <button v-on:click="generateMenu" class="button">Generate menu</button>
      </div>
    </div>
    <div class="disclaimer">
      <p>*Disclaimer: The results given by our BMR calculator should be used only as a guide and should not replace medical advice. Please bear in mind that, when interpreting the results of this BMR calculator, other factors such as your lean body mass should be considered. You should always speak to a qualified Doctor or health professional for advice and guidance before making any dramatic changes to your lifestyle.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Calculator2",
  data() {
    return {
      gender: "",
      age: "",
      height: "",
      weight: "",
      yourBMR: 0,
      activity: "",
      goal: "",
      goalIntake: 0
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
    calculate_goalIntake() {
      if (this.goal === "Maintain") {
        this.goalIntake = (this.yourBMR * this.activity).toFixed(0);
      } else if (this.goal === "Lose") {
        this.goalIntake = (this.yourBMR * this.activity - 400).toFixed(0);
      } else if (this.goal === "Gain") {
        this.goalIntake = (this.yourBMR * this.activity + 500).toFixed(0);
      }
    }
  }
};
</script>

<style>
.disclaimer {
  text-align: left;
}

.cal-body {
  border: 0.5px solid lightgray;
  padding-bottom: 20px;
}

.input {
  width: 17%;
}

.h7 {
  font-weight: bold;
  padding-bottom: 20px;
}

.ybmr {
  font-weight: bold;
}

.button {
  background-color: green;
  color: black;
  border: black;
  border-radius: 12px;
  font-size: 20px;
  margin-bottom: 20px;
  margin-top: 50px;
}
.exeFooter {
  margin-top: 20px;
  margin-bottom: 20px;
}

.exeForms {
  display: flex;
  justify-content: space-around;
  width: 100%;
}

h2 {
  padding-top: 20px;
}
.headerForms {
  padding: 20px 10px;

  display: flex;
  flex-direction: column;
}
.text {
  text-align: center;
}

.basic {
  display: flex;
  flex-direction: column;
}

.left {
  display: flex;
  flex-direction: column;
  text-align: left;
}

.right {
  display: flex;
  flex-direction: column;

  text-align: left;
}

.picture {
  width: 50px;
}

.windows {
  display: flex;
  flex-direction: row;

  justify-content: space-evenly;
}

.calculator2 {
  display: flex;
  flex-direction: column;
  width: 85%;
  margin: auto;

  text-align: center;
}

.submit {
  display: flex;
  justify-content: center;
  margin-top: 20px;

  color: antiquewhite;
}

.header {
  display: flex;
  justify-content: center;
  margin-top: 40px;
}

input {
  border-radius: 60px 60px 60px 60px;
  margin-left: 20px;
}
</style>
