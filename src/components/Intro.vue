<template>
  <div class="intro">
    <div class="header-image">
      <img src="assets/homepage_image.jpg" alt="food" />
    </div>
    <div class="text">
      <h3>Eat well and stay healthy</h3>
      <p>
        Struggling for breakfast or dinner inspiration? Leave it to us! To
        maintain a constant weight, our bodies have to burn the same amount of
        energy as they consume. What sounds easy in theory can be challenging in
        practice; people who eat more generally also have to do more exercise.
      </p>
      <h3>How much energy your body actually needs</h3>
      <p>
        Energy requirements vary with age, gender, body size and activity
        levels. The Energy Requirements Calculator estimates your daily energy
        requirements for good health based on what your body needs for
        breathing, circulating blood, digesting food (Basal Metabolic Rate -
        BMR) and physical activity.
      </p>
    </div>
    <div class="cards">
      <div class="card">
        <div class="number">
          <img src="assets/one.png" alt="one" />
        </div>
        <p>
          Enter your gender, age, height and body
          weight in the form, and let's calculate your Basal Metabolic Rate (BMR) with our calculator tool.
        </p>
      </div>

      <div class="cards">
        <div class="card">
          <div class="number">
            <img src="assets/two.png" alt="two" />
          </div>
          <p>Once you've worked out your BMR, you can calculate your daily calorie requirement that includes your activity level factor and your dietary goal.</p>
        </div>
      </div>

      <div class="cards">
        <div class="card">
          <div class="number">
            <img src="assets/three.png" alt="three" />
          </div>
          <p>Based on your ideal daily calorie requirement, let's generate your weekly meal plan (including breakfast, lunch and dinner).</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Intro"
};
</script>

<style lang="css">
.intro {
  padding: 10px 100px 40px 100px;
}

.cards {
  display: flex;
  justify-content: space-around;
}

.card {
  width: 15em;
  height: 17em;
  padding: 20px 10px 20px 10px;
}
.number {
  width: 30%;
  height: auto;
  text-align: center;
  padding: 20px 0 20px 0;
}
.header-image {
  margin-bottom: 20px;
}

.text {
  padding: 30px 0 30px 0;
}

img {
  width: 100%;
  height: auto;
}

@media screen and (max-width: 992px) {
  .intro {
    padding: 10px;
  }
}

@media screen and (max-width: 600px) {
  .intro {
    padding: 10px;
  }
}
</style>
