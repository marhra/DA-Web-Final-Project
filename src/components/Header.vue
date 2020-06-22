<template>
  <header>
    <div class="header-navbar">
      <div class="navbar">
        <router-link :to="{ path: '/' }" class="routerlink">Home</router-link>
        <router-link :to="{ path: 'MealPlanner' }" class="routerlink">Meal planner</router-link>
        <div class="apple">
          <img src="assets/logo_apple.png" alt="food" height="100px" />
        </div>
        <router-link :to="{ path: 'Recipes' }" class="routerlink">Recipes</router-link>
        <router-link :to="{ path: 'AboutUs' }" class="routerlink">About us</router-link>
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

.routerlink {
  color: rgb(73, 189, 96);
}
.header-navbar {
  width: 100%;
  padding-left: 200px;
  padding-right: 200px;
}

.navbar {
  display: flex;
  justify-content: center;
  font-weight: bold;
  text-decoration: none;
}

.apple {
  max-width: 50%;
  max-height: 50%;
}

a:hover {
  color: green;
}
</style>
