<template>
  <div class="topnav">
    <router-link class="active" to="/">Home</router-link>
    <router-link to="/about">About</router-link>
    <router-link to="/booking">Booking</router-link>
  </div>
</template>

<script>

export default {
  name: "navigation",
  components: {
  }
};
</script>

<style>
.topnav {
  background-color: #333;
  overflow: hidden;
}

/* Style the links inside the navigation bar */
.topnav a {
  float: left;
  color: #f2f2f2;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
}

/* Change the color of links on hover */
.topnav a:hover {
  background-color: #ddd;
  color: black;
}

/* Add a color to the active/current link */
.topnav a.active {
  background-color: #04aa6d;
  color: white;
}
</style>