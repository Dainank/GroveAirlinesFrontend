<template>
  <div class="card">
    <img src="../assets/paper-plane.png" alt="Avatar" style="width: 100%" />
    <div class="container">
      <h4><b>AMS</b></h4>
      <p>Amsterdam</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "flight-cards",
};
</script>

<style scoped>
.card {
  /* Add shadows to create the "card" effect */
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  max-width: 499px;
  max-height: 498px;
  margin: 20px;
  padding: 10px;
  cursor: pointer;
}

/* On mouse-over, add a deeper shadow */
.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
}

/* Add some padding inside the card container */
.container {
  padding: 2px 16px;
}
</style>