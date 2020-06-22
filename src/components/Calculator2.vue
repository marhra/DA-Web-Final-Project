<template>
  <div class="calculator2">
    <div class="cal-body">
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
            <button class="button" v-on:click="calculate" :click="checkForm">Calculate BMR</button>
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
              value="Gain"
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
      <p>
        <strong>You are one step away from having your tasty meal plan. If this meal plan doesn't seem to suit you, just easily generate a new one. Let's see what's on the menu!</strong>
      </p>
      <div class="link" align="center">
        <!--      <b-button v-bind:to="'/components/Recipes'">Create your meal plan</b-button>-->
        <button v-on:click="generateMenu" class="button">Generate your weekly menu</button>
      </div>
    </div>
    <div class="disclaimer">
      <p>*Disclaimer: The results given by our BMR calculator should be used only as a guide and should not replace medical advice. Please bear in mind that, when interpreting the results of this BMR calculator, other factors such as your lean body mass should be considered. You should always speak to a qualified Doctor or health professional for advice and guidance before making any dramatic changes to your lifestyle.</p>
    </div>
  </div>
</template>

<script>
import createMenu from "../vypocet";

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
      goal: "",
      goalIntake: 0,
      errors: []
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
      } else if (this.gender === "Female") {
        this.yourBMR = (
          10 * this.weight +
          6.25 * this.height -
          5 * this.age -
          161
        ).toFixed(0);
      }
    },
    checkForm(e) {
      if (this.gender && this.age && this.height && this.weight) return true;
      this.errors = [];
      if (!this.gender) this.errors.push("Gender required.");
      if (!this.age) this.errors.push("Age required.");
      if (!this.height) this.errors.push("Height required.");
      if (!this.weight) this.errors.push("Weight required.");
      e.preventDefault();
    },
    calculate_goalIntake() {
      if (this.goal === "Maintain") {
        this.goalIntake = (this.yourBMR * this.activity).toFixed(0);
      } else if (this.goal === "Lose") {
        this.goalIntake = (this.yourBMR * this.activity - 400).toFixed(0);
      } else if (this.goal === "Gain") {
        this.goalIntake = (this.yourBMR * this.activity + 500).toFixed(0);
      }
    },
    generateMenu() {
      let obj = [];
      let days = [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ];

      for (let i = 0; i < 7; i++) {
        let meals = createMenu(this.goalIntake);
        let item = {
          day: days[i],
          breakfast: meals.breakfast,
          lunch: meals.lunch,
          dinner: meals.dinner
        };

        obj.push(item);
      }
      localStorage.setItem("currentMenu", JSON.stringify(obj));

      this.$router.push("/MealPlanner");
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

.h7 {
  font-weight: bold;
  padding-bottom: 20px;
}

.ybmr {
  font-weight: bold;
}

.button {
  color: black;
  border: black;

  font-size: 20px;
  margin-bottom: 20px;
  margin-top: 50px;
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
  margin-bottom: 40px;
}

input {
  margin-left: 20px;
}

@media screen and (max-width: 600px) {
  .windows {
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
  }

  .exeForms {
    flex-direction: column;
    align-items: center;
    padding: 15px;
  }

  .left {
    padding-bottom: 40px;
  }
  .button {
    font-size: 22px;
  }
  .picture {
    width: 30%;
    margin: 20px;
  }

  .disclaimer {
    margin-top: 10px;
  }
  .input {
    width: 50%;
  }
}

@media screen and (max-width: 991px) {
  .exeForms {
    flex-direction: column;
    align-items: center;
  }

  .left {
    padding-bottom: 20px;
  }
}

@media screen and (max-width: 991px) {
  .input {
    width: 30%;
  }
}
@media screen and (min-width: 992px) {
  .exeFooter {
    margin-top: 20px;
    margin-bottom: 20px;
  }
}
</style>
