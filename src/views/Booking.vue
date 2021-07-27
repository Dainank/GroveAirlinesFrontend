<template>
    <h1>Booking</h1>
    <p v-text="flights"></p>
</template>

<script>
import axios from 'axios';

export default {
    name: "booking",
    data () {
    return {
      flights: []
    }
  },
    mounted () {
        axios
        .get('http://localhost:8080/flight')
        .then(response => (this.flights = response.data))
  },
}
</script>

<style>

</style>