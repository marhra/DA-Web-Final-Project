<template>
  <div class="menu">
    <div class="menu__item">Calculator</div>
    <div class="menu__item">What is BMR?</div>
    <div class="menu__item">Recipes</div>
    <div class="menu__item">About us</div>
  </div>
</template>

<script>
export default {
  name: "Menu"
};
</script>

<style lang="css">
.menu {
  padding-top: 2rem;
  display: flex;
  justify-content: flex-end;
  height: 150px;
  width: 100%;
  font-size: 24px;
  background-color: deepskyblue;
  color: #555;
}

.menu__item {
  line-height: 2rem;
  padding: 0 2rem;
}
</style>