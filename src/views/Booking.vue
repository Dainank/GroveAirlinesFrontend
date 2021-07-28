<template>
  <h1>Booking</h1>
  <!-- <p v-text="$store.state.flights[0]"></p> -->
  <p>Select a flight below:</p>
  <input type="text"> 
  <div class="flight-cards center">
    <FlightCard
      v-for="flight in $store.state.flights"
      :key="flight.id"
      :iata-origin="flight.origin.code"
      :card-city-origin="flight.origin.city"
      :iata-destination="flight.destination.code"
      :card-city-destination="flight.destination.city"
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