<template>
  <header class="navbar-menu">
    <router-link to="/" class="navbar-item">Home</router-link>
    <router-link to="/about" class="navbar-item">About</router-link>
    <!-- <router-link to="/login">Login</router-link> | -->
    <router-link to="/register" class="navbar-item">Register</router-link>
    <!-- <router-link to="/logout">Logout</router-link> -->
    <!-- <a href="#" @click="onLogout">Logout</a> -->
    <LoginDropdown />
  </header>
</template>

<script>
import LoginDropdown from "@/components/LoginDropdown.vue";

export default {
  // name: "Header"
  data() {
    return {};
  },
  methods: {
    onLogout: function(/*e*/) {
      this.axios.get("/api/logout").then(() => {
        this.$router.push("/");
      });
    }
  },
  components: {
    LoginDropdown
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
