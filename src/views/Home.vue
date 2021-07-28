<template>
  <section class="masthead" role="img" aria-label="Image Description">
    <h1>Grove Airlines</h1>
    <router-link to="/booking" class="true-button">Book Today!</router-link>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
.masthead {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  width: 100%;
  height: 100vh; /* if you don't want it to take up the full screen, reduce this number */
  overflow: hidden;
  background-size: cover !important;
  background: linear-gradient(
      to top,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0) 60%,
      rgba(179, 217, 217, 0.65) 100%
    ),
    url(../assets/airplane-bg2.jpg) no-repeat center center scroll;
}

h1 {
  font-style: normal;
  font-weight: bold;
  color: rgb(247, 247, 247);
  font-size: 11vmin;
  letter-spacing: 0.03em;
  line-height: 1;
  text-shadow: 1px 2px 4px rgba(0, 0, 0, 0.8);
  margin-bottom: 40px;
}

.true-button {
  background: #06b675;
  transition: background ease 0.25s;
  border-radius: 50px;
  display: inline-block;
  border: none;
  padding: 0.75rem 1.5rem;
  margin: 0;
  text-decoration: none;
  color: #ffffff;
  font-size: 1.2rem;
  cursor: pointer;
  text-align: center;
  -webkit-appearance: none;
  -moz-appearance: none;
}
.true-button:hover {
  color: #06b675;
  background: #eee;
}
.true-button:focus {
  outline: 1px solid #fff;
  outline-offset: -4px;
}
</style>