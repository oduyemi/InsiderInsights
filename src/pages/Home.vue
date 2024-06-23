<template>
  <HomeBanner msg="InsiderInsights" />
  <WhyApp />
  <UserTestimonial />

</template>

<script>
import HomeBanner from "../components/HomeBanner.vue";
import WhyApp from "../components/WhyApp.vue";
import UserTestimonial from "../components/UserTestimonial.vue";


export default {
  name: "HomePage",
  components: {
    HomeBanner,
    WhyApp,
    UserTestimonial
  }
}
</script>
