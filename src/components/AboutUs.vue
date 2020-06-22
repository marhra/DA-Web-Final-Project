<template>
  <div class="container-about">
    <div class="us">
      <div class="Lucie">
        <img class="photo" src="assets/lucie.jpg" alt="lucka" />
        <h4>Lucie</h4>
        <p>Lucie is from the north and simply love it over there. She likes to pack her backpack and go to the forest or to Italy. She loves nature, fantasy books and good beer. After the digital academy, she would like to join some IT company as a Junior Front-end developer.</p>
      </div>

      <div class="Maru">
        <img class="photo" src="assets/maru.png" alt="maru" />
        <h4>Maru</h4>
        <p>Maru is a big fan of healty eating and sustainable lifestyle. She loves spending her free time in nature climbing up the cliffs and riding down the hills. Her new hobby is web development, so let's see how far she can go with what she learned at the digital academy.</p>
      </div>
    </div>
  </div>
</template>

<script></script>

<style>
.us {
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: space-around;
  margin: 60px 20px 30px 20px;
}

.photo {
  border-radius: 50%;
  width: 30%;
  margin: 20px;
}
.Lucie,
.Maru {
  padding: 30px;
}
</style>
