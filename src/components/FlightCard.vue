<template>
  <div v-on:click="selectCard" class="card" v-bind:class="{ active: isActive}">
    <img :class="largerImage" :src="require(`@/assets/${imageSrc}`)" alt="Avatar" style="width: 100%" />
    <div class="container">
      <h4>
        <b>{{ iataOrigin }}</b>
      </h4>
      <p>{{ cardCityOrigin }}</p>
      <h4>
        <b>{{ iataDestination }}</b>
      </h4>
      <p>{{ cardCityDestination }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "flight-cards",
  components: {
  },
  data (){
    return {
      isActive: false,
    }
  },
  methods:{
        selectCard() {
      console.log("selected");
      this.isActive = !this.isActive;
    },
  },
  props: [
    "iataOrigin",
    "cardCityOrigin",
    "iataDestination",
    "cardCityDestination",
    "imageSrc", // control image location
    "largerImage",
  ],
};
</script>

<style scoped>
.card {
  /* Add shadows to create the "card" effect */
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  max-width: 300px;
  max-height: 300px;
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

.standard {
  max-width: 150px;
  max-height: 200px;
}

.larger {
  max-width: 250px;
  max-height: 250px;
}

.active {
  background-color: rgb(193, 240, 119);
}
</style>