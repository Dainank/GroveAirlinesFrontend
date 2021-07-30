<template>
  <h1>Booking</h1>
  <p>Search Departures and Arrivals:</p>
  <!-- your form inputs goes here-->
  <input
    type="text"
    v-model="searchDeparting"
    placeholder="departing from..."
  />
  <input type="text" v-model="searchArriving" placeholder="arriving at..." />
  <h2>Departing Flights</h2>
  <div class="flight-cards center departing">
    <FlightCard
      class="larger-image"
      v-show="checkDepartingAirportsEmpty"
      iata-origin="No Flights!"
      card-city-origin="Please double check your search."
      image-src="paperPlaneRed.png"
      larger-image="larger"
    />
    <FlightCard
      v-for="airport in filteredDepartingAirports"
      :key="airport.id"
      :iata-origin="airport.iata"
      :card-city-origin="airport.city"
      :image-src="imageSrc"
      larger-image="standard"
    />
  </div>
  <div>
    <button v-on:click="next">See More</button>
  </div>
  <h2>Arriving Flights</h2>
  <div class="flight-cards center arriving">
    <FlightCard
      class="larger-image"
      v-show="checkArrivingFlightsEmpty"
      iata-origin="No Flights!"
      card-city-origin="Please double check your search."
      image-src="paperPlaneRed.png"
      larger-image="larger"
    />
    <FlightCard
      v-for="airport in filteredArrivingAirports"
      :key="airport.id"
      :iata-destination="airport.iata"
      :card-city-destination="airport.city"
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
      perPage: 25,
      pageNumber: 0,
    };
  },
  methods: {
    next() {
      this.pageNumber++;
    },
    previous() {
      this.pageNumber--;
    },
  },
  computed: {
    currentPageItems() {
      return this.$store.state.airports.slice(
        this.pageNumber * this.perPage,
        this.pageNumber * this.perPage + 1 + this.perPage
      );
    },
    checkDepartingAirportsEmpty() {
      if (this.currentPageItems.length === 0) {
        return true;
      }
      return false;
    },
    checkArrivingFlightsEmpty() {
      if (this.filteredArrivingAirports.length === 0) {
        return true;
      }
      return false;
    },
    filteredDepartingAirports() {
      return this.$store.state.airports.filter((airport) =>
        airport.city.toLowerCase().includes(this.searchDeparting.toLowerCase())
      );
    },
    filteredArrivingAirports() {
      return this.$store.state.arrivingAirports.filter((airport) =>
        airport.city.toLowerCase().includes(this.searchArriving.toLowerCase())
      );
    },
  },
  mounted() {
    axios
      .get("http://localhost:8080/flight")
      .then((response) => (this.$store.state.flights = response.data));
    axios
      .get("http://localhost:8080/airport")
      .then(
        (response) =>
          (this.$store.state.airports = response.data) &&
          (this.$store.state.arrivingAirports = response.data)
      );
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