<template>
  <div class="hello">
    <h1>Welcome {{ user.name }}</h1>
    <h2>{{ msg }}</h2>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      user: {
        name: "Jesse"
      },
      msg: "You are logged in with regular permissions"
    };
  },

  methods: {
    getUserData: function() {
      let self = this;
      axios
        .get("/api/user")
        .then(response => {
          console.log(response);
          self.$set(this, "user", response.data.user);
        })
        .catch(errors => {
          console.log(errors);
          this.$router.push("/login");
        });
    }
  },

  mounted() {
    this.getUserData();
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
