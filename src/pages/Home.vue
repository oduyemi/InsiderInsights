<template>
  <HomeBanner msg="InsiderInsights" />
  <WhyApp />
  <UserTestimonial />
  <SimpleFooter />

</template>

<script>
import HomeBanner from "../components/HomeBanner.vue";
import WhyApp from "../components/WhyApp.vue";
import UserTestimonial from "../components/UserTestimonial.vue";
import SimpleFooter from "../components/SimpleFooter.vue";

export default {
  name: "HomePage",
  components: {
    HomeBanner,
    WhyApp,
    UserTestimonial,
    SimpleFooter
  }
}
</script>
