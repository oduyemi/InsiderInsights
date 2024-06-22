<template>
  <HomeBanner msg="Welcome to Your Vue.js App"/>
  <WhyApp />
  <UserTestimonial />

</template>

<script>
import HomeBanner from "./components/HomeBanner.vue";
import WhyApp from "./components/WhyApp.vue";
import UserTestimonial from "./components/UserTestimonial"



export default {
  name: "App",
  components: {
    HomeBanner,
    WhyApp,
    UserTestimonial
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
