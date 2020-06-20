<template>
  <div class="header">
    <div class="navbar">
      <b-navbar variant="faded" type="light">
        <b-navbar-brand href="#">
          <img class="main-image" src="assets/logo_apple.png" alt="logo" width="75%" height="75%" />
        </b-navbar-brand>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item :to="{ name: 'Home' }">Home</b-nav-item>
            <b-nav-item :to="{ name: 'MealPlanner' }">Meal planner</b-nav-item>
            <b-nav-item :to="{ name: 'Recipes' }">Recipes</b-nav-item>
            <b-nav-item :to="{ name: 'AboutUs' }">About us</b-nav-item>
            <b-nav-item :to="{ name: 'Blog' }">Blog</b-nav-item>
          </b-navbar-nav>

          <b-navbar-nav class="ml-auto">
            <b-nav-form>
              <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
              <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
            </b-nav-form>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>

    <div class="header-image">
      <img src="assets/homepage_image.jpg" alt="food" />
    </div>
  </div>
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
.navbar {
  height: 50%;
}

.header {
  width: 100%;
}

.main-image {
  max-width: 50%;
  max-height: 50%;
}
</style>
