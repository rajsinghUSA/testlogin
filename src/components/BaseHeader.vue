<template>
  <b-navbar>
    <template slot="start">
      <b-navbar-item tag="router-link" to="/"><b-icon pack="fas" icon="home" size="is-large" /></b-navbar-item>
      <b-navbar-item tag="router-link" to="/about">About</b-navbar-item>
    </template>
    <template slot="end">
      <!-- <router-link to="/login">Login</router-link> | -->
      <!-- <b-navbar-item tag="router-link" to="/register">Register</b-navbar-item> -->
      <!-- <router-link to="/logout">Logout</router-link> -->
      <!-- <a href="#" @click="onLogout">Logout</a> -->
      <!-- <UserDropdown /> -->
      <BaseHeaderDropdown />
    </template>
  </b-navbar>
</template>

<script>
import { mapState } from "vuex";
import axios from "axios";
import BaseHeaderDropdown from "@/components/BaseHeaderDropdown.vue";

export default {
  // name: "Header"
  data() {
    return {};
  },
  methods: {
    onLogout: function(/*e*/) {
      axios.get("/api/logout").then(() => {
        this.$router.push("/");
      });
    }
  },
  computed: {
    ...mapState(["currentUser"])
  },
  components: {
    BaseHeaderDropdown
  }
};
</script>

<style scoped>
header {
  padding: 30px;
}

header a {
  font-weight: bold;
  color: #2c3e50;
}

header a.router-link-exact-active {
  color: #42b983;
}
</style>
