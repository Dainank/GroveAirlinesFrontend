<template>
  <h1>Booking</h1>
  <!-- <p v-text="$store.state.flights[0]"></p> -->
  <p>Select a flight below:</p>
  <input
    type="text"
    v-model="searchDeparting"
    placeholder="departing from..."
  />
  <input type="text" v-model="searchArriving" placeholder="arriving at..." />
  <h2>Departing Flights</h2>
  <div class="flight-cards center">
    <FlightCard
      class="larger-image"
      v-show="checkDepartingFlightsEmpty"
      iata-origin="No Flights!"
      card-city-origin="Please double check your search."
      image-src="paperPlaneRed.png"
      larger-image="larger"
    />
    <FlightCard
      v-for="flight in filteredDeparting"
      :key="flight.id"
      :iata-origin="flight.origin.code"
      :card-city-origin="flight.origin.city"
      :image-src="imageSrc"
      larger-image="standard"
    />
  </div>
  <h2>Arriving Flights</h2>
  <div class="flight-cards center">
    <FlightCard
      class="larger-image"
      v-show="checkArrivingFlightsEmpty"
      iata-origin="No Flights!"
      card-city-origin="Please double check your search."
      image-src="paperPlaneRed.png"
      larger-image="larger"
    />
    <FlightCard
      v-for="flight in filteredArriving"
      :key="flight.id"
      :iata-destination="flight.destination.code"
      :card-city-destination="flight.destination.city"
      :image-src="imageSrc"
      larger-image="standard"
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
      imageSrc: "paper-plane.png",
      searchDeparting: "",
      searchArriving: "",
      flights: [],
    };
  },
  method: {},
  computed: {
    checkArrivingFlightsEmpty() {
      if (this.filteredArriving.length === 0) {
        return true;
      }
      return false;
    },
    checkDepartingFlightsEmpty() {
      if (this.filteredDeparting.length === 0) {
        return true;
      }
      return false;
    },
    filteredDeparting() {
      return this.$store.state.flights.filter((flight) =>
        flight.origin.city
          .toLowerCase()
          .includes(this.searchDeparting.toLowerCase())
      );
    },
    filteredArriving() {
      return this.$store.state.flights.filter((flight) =>
        flight.destination.city
          .toLowerCase()
          .includes(this.searchArriving.toLowerCase())
      );
    },
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

input {
  margin: 15px;
}

</style>