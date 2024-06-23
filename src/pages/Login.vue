<template>
  <LoginForm msg="Sign in to your account" />
  <SimpleFooter />
</template>

<script>
import LoginForm from "../components/LoginForm.vue";
import SimpleFooter from "../components/SimpleFooter.vue";

export default {
  name: "LoginPage",
  components: {
    LoginForm,
    SimpleFooter
  }
}
</script>
