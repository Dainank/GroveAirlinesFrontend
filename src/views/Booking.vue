<template>
  <h1>Booking</h1>
  <p v-text="$store.state.flights"></p>
  <div class="flight-cards center">
    <FlightCard
      v-for="flight in $store.state.flights"
      :key="flight.id"
      :flight="flight"
    />
  </div>
</template>

<script>
import axios from "axios";
import FlightCard from "../components/FlightCard.vue";

export default {
  name: "booking",
  components: {
    FlightCard,
  },
  data() {
    return {
      flights: [],
    };
  },
  mounted() {
    axios
      .get("http://localhost:8080/flight")
      .then((response) => (this.$store.state.flights = response.data));
  },
};
</script>

<style scoped>
.flight-cards {
  position: relative;
  display: flex;
  flex-direction: row;
}

.center {
  display: flex;
  justify-content: center;
}
</style>