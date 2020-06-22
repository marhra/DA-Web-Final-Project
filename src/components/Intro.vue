<template>
  <div class="intro">
    <div class="intro-image">
      <img src="assets/homepage_image.jpg" alt="food" />
    </div>
    <div class="intro-text">
      <h3>Meal planning - no rocket science</h3>
      <p>Meal planning. It is something that’s always on your to-do list but somehow never actually happens? Or is it something you dread because it seems time-consuming and boring? Yes, meal planning takes a great deal of dedication, commitment, and work. The basic mechanics of meal planning are fairly straightforward, but where to take all the recipes ideas? The good news: there is a better and much simplier way. Leave it to us!</p>

      <h3>How much energy your body actually needs</h3>
      <p>To maintain a constant weight, our bodies have to burn the same amount of energy as they consume. What sounds easy in theory can be challenging in practice; people who eat more generally also have to do more exercise, otherwise they can start to gain weight. Energy requirements vary with age, gender, body size and activity levels. Basal Metabolic Rate (BMR) is the amount of energy a human body uses when it is completely at rest. It's the amount of energy your body needs to support its vital functions: breathing, blood circulation, controlling body temperature, brain and nerve functions to name a few. The organs that use the most energy at rest are the brain, the central nervous system and the liver.</p>

      <h3>BMR a TTE Calculator</h3>
      <p>BMR Calculator is a simple tool that helps you calculate how many calories your body needs if you were only to rest for the whole day. This calculator uses the Mifflin St Jeor equation. However, people regularly use more energy than their BMR. Walking, running, working, talking, and even digesting are actions that require some extra energy greater than the BMR. Your BMR accounts for about 60% to 75% of your Total Energy Expenditure (TTE), depending on your lifestyle and activity level. The TTE is the total number of calories you burn every day. Physical activities account for about 20% of your TTE but can vary a bit depending on how often you exercise for and its intensity.</p>

      <h4>It has never been easier. Let's create your weekly meal plan based on your TTE in 3 steps:</h4>
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
  padding: 40px 20px 40px 20px;
}

.step {
  border: none;
  margin: 0 20px 0px 20px;
}

.number {
  width: 60%;
  padding-left: 120px;
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
