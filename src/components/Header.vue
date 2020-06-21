<template>
  <header>
    <!-- <div class="menu d-flex justify-content-between align-items-center">
      <router-link to="/">
        <img src="assets/logo_apple.png" alt="logo" />
      </router-link>
      <router-link to="/">Home</router-link>
      <router-link to="/MealPLanner">Meal planner</router-link>
      <router-link to="/Recipes">Recipes</router-link>
      <router-link to="/AboutUs">About us</router-link> -->

    <div class="header">
      <div class="navbar d-flex justify-content-around align-items-center">
        <b-navbar variant="faded" type="light">
          <b-navbar-brand href="#">
            <img
              class="main-image"
              src="assets/logo_apple.png"
              alt="logo"
              width="75%"
              height="75%"
            />
          </b-navbar-brand>

          <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav>
              <b-nav-item :to="{ name: 'Home' }">Home</b-nav-item>
              <b-nav-item :to="{ name: 'MealPlanner' }"
                >Meal planner</b-nav-item
              >
              <b-nav-item :to="{ name: 'Recipes' }">Recipes</b-nav-item>
              <b-nav-item :to="{ name: 'AboutUs' }">About us</b-nav-item>
            </b-navbar-nav>
          </b-collapse>
        </b-navbar>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style lang="css">
img {
  max-width: 100%;
  max-height: 100%;
}

.header {
  width: 100%;
}

.main-image {
  max-width: 50%;
  max-height: 50%;
}
</style>
