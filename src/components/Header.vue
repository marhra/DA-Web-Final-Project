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
@media screen and (max-width: 600px) {
  .header-navbar {
    text-align: center;
    padding-left: 0px;
    padding-right: 0px;
  }
  .navbar {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0;
    margin: 0;
    width: 100%;
    min-height: 200px;
    min-width: 200px;
    align-items: center;
  }

  .apple {
    width: 100%;
    height: 100%;
  }
}

@media screen and (max-width: 992px) {
  .navbar {
    display: flex;

    align-items: center;
  }
}

@media screen and (min-width: 992px) {
  .navbar {
    padding-left: 200px !important;
    padding-right: 200px !important;
    justify-content: center;
  }
}

.routerlink {
  color: rgb(73, 189, 96);
}

img {
  max-width: 100%;
  max-height: 100%;
}

.header-navbar {
  width: 100%;
}

.apple {
  max-width: 50%;
  max-height: 50%;
}

a:hover {
  color: green;
}
</style>
