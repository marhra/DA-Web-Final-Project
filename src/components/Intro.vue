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
      <div class="card mb-3" style="max-width: 400px;">
        <div class="row no-gutters">
          <div class="col-md-4">
            <img src="assets/one.png" class="card-img" alt="one" />
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <p>
                Enter your
                <strong>gender</strong>,
                <strong>age</strong>,
                <strong>height</strong> and
                <strong>body weight</strong> in the form, and let's calculate your Basal Metabolic Rate (BMR) with our calculator tool.
              </p>
            </div>
          </div>
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
.card {
  width: 50%;
}
.intro {
  padding: 10px 100px 40px 100px;
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
