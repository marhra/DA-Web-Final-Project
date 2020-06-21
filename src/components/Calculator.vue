<template>
  <div class="container">
    <div class="calculator">
      <div class="input-form">
        <div class="gender">
          <b-form-group>
            <b-form-radio v-model="gender" name="some-radios" value="Male">Male</b-form-radio>
            <b-form-radio v-model="gender" name="some-radios" value="Female">Female</b-form-radio>
          </b-form-group>
        </div>

        <div class="mt-2">
          <b-row class="my-1">
            <b-col sm="2">
              <label for="input-small">Age:</label>
            </b-col>
            <b-col sm="3">
              <b-form-input v-model.number="age" type="number" min="0"></b-form-input>
            </b-col>
            <b-col sm="2">
              <label for="input-small">years</label>
            </b-col>
          </b-row>
        </div>

        <div class="mt-2">
          <b-row class="my-1">
            <b-col sm="2">
              <label for="input-small">Weight:</label>
            </b-col>
            <b-col sm="3">
              <b-form-input v-model.number="weight" type="number" min="0"></b-form-input>
            </b-col>
            <b-col sm="2">
              <label for="input-small">kg</label>
            </b-col>
          </b-row>
        </div>

        <div class="mt-2">
          <b-row class="my-1">
            <b-col sm="2">
              <label for="input-small">Height:</label>
            </b-col>
            <b-col sm="3">
              <b-form-input v-model.number="height" type="number" min="0"></b-form-input>
            </b-col>
            <b-col sm="2">
              <label for="input-small">cm</label>
            </b-col>
          </b-row>
        </div>

        <form @submit.prevent="calculate">
          <b-button v-on:click="calculate" variant="success" class="btn">Calculate BMR</b-button>
        </form>

        <!-- calculate BMR -->
        <div class="your-bmr">
          <p>Your Basal Metabolic Rate (BMR) is: {{ yourBMR }} kcal/day.</p>
        </div>
      </div>
      <div class="side">
        <!-- activity -->
        <div class="activity">
          <p>How active are you?</p>
          <b-form-group>
            <b-form-radio
              v-model.number="activity"
              name="activity"
              value="1.2"
            >Little or no exercise</b-form-radio>
            <b-form-radio
              v-model.number="activity"
              name="activity"
              value="1.375"
            >Light exercise (1-2 days/wk)</b-form-radio>
            <b-form-radio
              v-model.number="activity"
              name="activity"
              value="1.55"
            >Moderate exercise (3-5 days/wk)</b-form-radio>
            <b-form-radio
              v-model.number="activity"
              name="activity"
              value="1.725"
            >Very active (6-7 days/wk)</b-form-radio>
            <b-form-radio
              v-model.number="activity"
              name="activity"
              value="1.9"
            >Extra active (very active or/and physical job)</b-form-radio>
          </b-form-group>
        </div>

        <!-- goal -->
        <div class="goal">
          <p>What is your long-term body goal?</p>
          <b-form-group>
            <b-form-radio v-model.number="goal" name="goal" value="Maintain">Maintain current weight</b-form-radio>
            <b-form-radio v-model.number="goal" name="goal" value="Lose">Lose weight</b-form-radio>
            <b-form-radio v-model.number="goal" name="goal" value="Gain">Gain weight</b-form-radio>
          </b-form-group>
        </div>

        <form @submit.prevent="calculate_goalIntake">
          <b-button v-on:click="calculate_goalIntake" class="btn">Calculate</b-button>
        </form>

        <div class="goal-intake">
          <p>Energy intake to reach your body goal is: {{ goalIntake }} kcal/day.</p>
        </div>
      </div>
    </div>
    <div class="link" align="center">
<!--      <b-button v-bind:to="'/components/Recipes'">Create your meal plan</b-button>-->
      <b-button v-on:click="generateMenu">Generate menu</b-button>
    </div>
  </div>
</template>

<script>
  import createMenu from '../vypocet';
  
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
    },
    generateMenu() {
      let obj = [];
      let days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  
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
      localStorage.setItem('currentMenu', JSON.stringify(obj));
    }
  }
};
</script>

<style lang="css">
.calculator {
  display: flex;
  width: 85%;
  margin: auto;
  border: 1px solid #000000;
}
.input-form {
  padding: 50px 10px 50px 40px;
  background-color: gainsboro;
  width: 50%;
}
.side {
  padding: 50px 10px 50px 40px;
  flex-direction: column;
  background-color: rgb(73, 189, 96);
  width: 55%;
}

.btn {
  margin-top: 40px;
}

.mt-2 {
  margin-top: 30px;
}

.link {
  margin: auto;
}

@media screen and (max-width: 992px) {
  .calculator {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
  .input-form {
    padding: 10px;
    width: 100%;
  }

  .side {
    padding: 10px;
    width: 100%;
  }
}
@media screen and (max-width: 600px) {
  .calculator {
    display: flex;
    flex-direction: column;
  }
  .input-form {
    padding: 10px;
    width: 100%;
  }

  .side {
    padding: 10px;
    width: 100%;
  }
}
</style>
