<template>
  <div class="intro">
    <div class="intro-image">
      <img src="assets/homepage_image.jpg" alt="food" />
    </div>
    <div class="intro-text">
      <h3>Meal planning - no rocket science</h3>
      <p>Meal planning. It is something that’s always on your to-do list but somehow never actually happens? Or is it something you dread because it seems time-consuming and boring? Yes, meal planning takes a great deal of dedication, commitment, and work. The basic mechanics of meal planning are fairly straightforward, but where to take all the recipes ideas? The good news: there is a better and much simplier way. Leave it to us!</p>
      <h3>How much energy your body actually needs</h3>
      <p>
        To maintain a constant weight, our bodies have to burn the same amount of energy as they consume. What sounds easy in theory can be challenging in practice; people who eat more generally also have to do more exercise, otherwise they can start to gain weight. Energy requirements vary with age, gender, body size and activity levels. This Energy Requirements Calculator estimates your daily energy requirements for good health based on what your body needs for
        breathing, circulating blood, digesting food (Basal Metabolic Rate - BMR) and physical activity.
      </p>
      <h4>It has never been easier. Create your weekly meal plan in 3 steps:</h4>
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
  padding: 30px 50px 30px 50px;
}

.cards {
  display: flex;
  justify-content: space-around;
  text-align: center;
  padding: 40px 0px 40px 0px;
}

.step {
  width: 12rem;
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

h3 {
  padding-bottom: 10px;
}

p {
  padding-bottom: 20px;
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
