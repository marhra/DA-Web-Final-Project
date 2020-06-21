<template>
  <div class="calculator2">
    <h2>Calculator</h2>
    <div class="header">
      <!--RADIO 1-->
      <input type="radio" class="radio_item" value name="item" id="radio1" />
      <label class="label_item" for="radio1">
        <img src="/assets/female.png " class="picture" />
      </label>

      <!--RADIO 2-->
      <label class="label_item" for="radio2">
        <img src="/assets/mann.png " class="picture" />
      </label>
      <input type="radio" class="radio_item" value name="item" id="radio2" />
      <label class="label_item" for="radio2"></label>
    </div>

    <div class="left">
      <form action=" " class="basic">
        <div class="windows">
          <label for="fname"></label>
          <img src="/assets/age.png " class="picture" />

          <input type="number" id="fname" name="fname" value="John" />

          <label for="lname"></label>
          <img src="/assets/weight.png " class="picture" />

          <input type="number" id="lname" name="lname" value="Doe" />

          <label for="fname"></label>
          <img src="/assets/height.png " class="picture" />
          <input type="number" id="fname" name="fname" value="John" />
        </div>
        <div class="submit">
          <input type="submit" value="submit" class="submit" />
        </div>
      </form>
      <div class="text">Your Basal Metabolic Rate (BMR) is: 0 kcal/day.</div>
    </div>

    <div class="right">
      <h3>How active are you?</h3>
      <br />
      <input type="radio" class="radio_item" value name="item" id="radio1" />
      <label class="label_item" for="radio1"></label>
      <label for="radio1">Little or no exercise</label>
      <input type="radio" class="radio_item" value name="item" id="radio2" />
      <label class="label_item" for="radio1"></label>
      <label for="radio2">Light exercise (1-2 days/wk)</label>
      <input type="radio" class="radio_item" value name="item" id="radio3" />
      <label class="label_item" for="radio1"></label>
      <label for="radio3">Moderate exercise (3-5 days/wk)</label>
      <input type="radio" class="radio_item" value name="item" id="radio4" />
      <label class="label_item" for="radio1"></label>
      <label for="radio4">Very active (6-7 days/wk)</label>
      <input type="radio" class="radio_item" value name="item" id="radio5" />
      <label class="label_item" for="radio1"></label>
      <label for="radio5">Extra active (very active or/and physical job):</label>
      <br />
      <br />
      <p>What is your long-term body goal?</p>
    </div>
  </div>
</template>

<script></script>

<style>
.h2 {
  padding-top: 20px;
}
.left {
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

.right {
  border: 2px solid black;
  display: flex;
  flex-direction: column;
  padding-left: 20px;
  padding-top: 20px;
}

.picture {
  width: 50px;
}

.windows {
  display: flex;
  flex-direction: row;

  justify-content: space-around;
}

.calculator2 {
  display: flex;
  flex-direction: column;
  width: 85%;
  margin: auto;
  border: 1px solid black;
  text-align: center;
}

.submit {
  display: flex;
  justify-content: center;
  margin-top: 20px;

  color: antiquewhite;
}

input[type="submit"] {
  background-color: black;
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
