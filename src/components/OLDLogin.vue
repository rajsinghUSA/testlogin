<template>
  <div>
    <h2>Login</h2>
    <form v-on:submit="login">
      <input
        type="email"
        name="email"
        placeholder="Email"
        v-model="email"
        required
        autofocus
      /><br />
      <input
        type="password"
        name="password"
        placeholder="Password"
        v-model="password"
        required
      /><br />
      <input type="submit" value="Login" />
    </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      email: "a@a.a",
      password: "bb",
      redirectTo: this.$route.params["redirectTo"]
    };
  },

  methods: {
    login: function(e) {
      e.preventDefault();
      const data = {
        email: this.email,
        password: this.password,
        returnTo: window.location.pathname
      };
      axios
        .post("/api/login", data)
        .then(response => {
          console.log("Logged in");
          console.log(response);
          console.log(this);
          debugger;
          this.$router.push(this.redirectTo);
        })
        .catch(errors => {
          console.log("Cannot log in");
          console.log(errors);
        });
    }
  }
};
</script>

<style scoped></style>
