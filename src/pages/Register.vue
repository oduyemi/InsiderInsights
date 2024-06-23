<template>
  <RegisterForm msg="Create an account" />
  <SimpleFooter />
</template>

<script>
import RegisterForm from "../components/RegisterForm";
import SimpleFooter from "../components/SimpleFooter.vue";

export default {
  name: "RegisterPage",
  components: {
    RegisterForm,
    SimpleFooter
  }
}
</script>
