<template>
  <div class="intro">
    <div class="intro-image">
      <img src="assets/homepage_image.jpg" alt="food" />
    </div>
    <div class="intro-text">
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
      <h4>Create your weekly meal plan in 3 steps:</h4>
    </div>
    <div class="cards">
      <div class="step">
        <div class="number">
          <img src="assets/one.png" alt="two" />
        </div>
        <p class="card-text">
          Enter your
          gender,
          age,
          height and
          body weight, and let's calculate your BMR.
        </p>
      </div>

      <div class="step">
        <div class="number">
          <img src="assets/two.png" alt="two" />
        </div>
        <p
          class="card-text"
        >Calculate your daily calorie requirement including your activity level factor and goal.</p>
      </div>

      <div class="step">
        <div class="number">
          <img src="assets/three.png" alt="three" />
        </div>
        <p
          class="card-text"
        >Let's generate your weekly meal plan (recipes for breakfast, lunch and dinner).</p>
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
.intro-text {
  padding: 30px 50px 10px 50px;
}

.cards {
  display: flex;
  justify-content: space-around;
  text-align: center;
  padding: 40px 0px 40px 0px;
}

.step {
  border: none;
  padding: 10px;
}

.number {
  width: 70%;
  padding-left: 40px;
}

.card-text {
  padding-top: 20px;
}

.text {
  padding: 30px 0 30px 0;
}

@media screen and (min-width: 992px) {
  .intro {
    padding: 10px;
  }
  .step {
    width: 12rem;
  }
}

@media screen and (max-width: 600px) {
  .intro {
    padding: 10px;
  }
  .cards {
    display: flex;
    flex-direction: column;
    width: 100%;
    text-align: center;
  }
}
</style>
