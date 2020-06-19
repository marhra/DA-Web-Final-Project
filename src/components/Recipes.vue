<template>
  <div class="container">
    <h3>Monday</h3>
    <div class="card-mon">
      <b-card
        title="Scrambled eggs"
        img-src="https://placekitten.com/100/100"
        img-alt="cat"
        img-top
        tag="article"
        style="max-width: 20rem;"
        class="mb-2"
      >
        <b-card-text>
          360kcal
          <br />24 g protein | 30 g carbs | 20 g fat
          <br />by Cookstr
        </b-card-text>
      </b-card>

      <b-card
        title="Chicken Tacos"
        img-src="https://placekitten.com/100/100"
        img-alt="tacos"
        img-top
        tag="article"
        style="max-width: 20rem;"
        class="mb-2"
      >
        <b-card-text>
          360kcal
          <br />24 g protein | 30 g carbs | 20 g fat
          <br />by Cookstr
        </b-card-text>
      </b-card>

      <b-card
        title="Roasted Beef"
        img-src="https://placekitten.com/100/100"
        img-alt="beef"
        img-top
        tag="article"
        style="max-width: 20rem;"
        class="mb-2"
      >
        <b-card-text>
          360kcal
          <br />24 g protein | 30 g carbs | 20 g fat
          <br />by Cookstr
        </b-card-text>
      </b-card>
    </div>
  </div>
</template>

<script>
export default {
  name: "Recipes"
};
</script>

<style scoped>
.card-mon {
  display: flex;
  justify-content: space-between;
}

.mb-2 {
  margin: 10px;
}

h3 {
  margin: 30px;
}
</style>