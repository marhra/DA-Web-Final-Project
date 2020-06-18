<template>
  <div class="header">
    <div class="navbar">
      <b-navbar variant="faded" type="light">
        <b-navbar-brand href="#">
          <img class="main-image" src="assets/logo_apple.png" alt="logo" width="75%" height="75%" />
        </b-navbar-brand>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item href="#">Home</b-nav-item>
            <b-nav-item href="#">Recipes</b-nav-item>
            <b-nav-item href="#">About us</b-nav-item>
            <b-nav-item href="#">FAQ</b-nav-item>
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