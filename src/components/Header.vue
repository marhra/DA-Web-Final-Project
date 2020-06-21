<template>
  <header>
    <div class="header">
<<<<<<< HEAD
      <div class="navbar">
        <router-link :to="{ path: '/' }">Home</router-link>
        <router-link :to="{ path: '/MealPlanner' }">Meal planner</router-link>
        <div class="apple">
          <img src="assets/logo_apple.png" alt="food" height="100px" />
        </div>
        <router-link :to="{ path: 'Recipes' }">Recipes</router-link>
        <router-link :to="{ path: 'AboutUs' }">About us</router-link>
=======
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
              <b-nav-item :to="{ name: 'Results' }">Results</b-nav-item>
            </b-navbar-nav>
          </b-collapse>
        </b-navbar>
>>>>>>> bfaceb4b1e3a946adcf968ee5d343666bd3cb273
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header"
};
</script>

<style lang="css">
img {
  max-width: 100%;
  max-height: 100%;
}

.header {
  width: 100%;
  padding-left: 200px;
  padding-right: 200px;
  color: green;
}

.navbar {
  display: flex;
  justify-content: center;
  font-weight: bold;
  text-decoration: none;
  color: green;
}

router-link {
  color: green;
}

.apple {
  max-width: 50%;
  max-height: 50%;
}
</style>
