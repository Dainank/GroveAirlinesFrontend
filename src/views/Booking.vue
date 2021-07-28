<template>
  <h1>Booking</h1>
  <!-- <p v-text="$store.state.flights[0]"></p> -->
  <p>Search Departures and Arrivals:</p>
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
      v-show="checkAirportsEmpty"
      iata-origin="No Flights!"
      card-city-origin="Please double check your search."
      image-src="paperPlaneRed.png"
      larger-image="larger"
    />
    <!-- <FlightCard
      v-for="flight in filteredDeparting"
      :key="flight.id"
      :iata-origin="flight.origin.code"
      :card-city-origin="flight.origin.city"
      :image-src="imageSrc"
      larger-image="standard"
    /> -->
    <FlightCard
      v-for="airport in filteredAirports"
      :key="airport.id"
      :iata-origin="airport.iata"
      :card-city-origin="airport.city"
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
    checkAirportsEmpty() {
      if (this.filteredAirports.length === 0) {
        return true;
      }
      return false;
    },
    checkArrivingFlightsEmpty() {
      if (this.filteredArriving.length === 0) {
        return true;
      }
      return false;
    },
    // checkDepartingFlightsEmpty() {
    //   if (this.filteredDeparting.length === 0) {
    //     return true;
    //   }
    //   return false;
    // },
    filteredAirports() {
      return this.$store.state.airports.filter((airport) =>
        airport.city.toLowerCase().includes(this.searchDeparting.toLowerCase())
      );
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
    axios
      .get("http://localhost:8080/airport")
      .then((response) => (this.$store.state.airports = response.data));
  },
};
</script>

<style scoped>
.flight-cards {
  position: relative;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 0 10%;
}

.center {
  display: flex;
  justify-content: center;
}

input {
  margin: 15px;
}

input[type="text"] {
  padding: 12px 20px;
  margin: 8px 4;
  box-sizing: border-box;
  border: none;
  border-bottom: 2px solid rgba(69, 219, 69, 0.329);
}

input[type="text"]:focus {
  background-color: rgba(77, 202, 65, 0.233);
  outline: 0;
}
</style>