<template>
  <b-menu>
    <b-menu-list>
      <b-menu-item
        label="My Account"
        tag="router-link"
        to="/account"
      ></b-menu-item>
      <b-menu-item
        label="Help"
        icon="info"
        tag="router-link"
        to="/help"
      ></b-menu-item>

      <footer class="modal-card-foot">
        <button value="logout" class="button is-info" @click="logout">
          Logout
        </button>
      </footer>
    </b-menu-list>
  </b-menu>
</template>

<script>
import { mapState, mapActions } from "vuex";
// import axios from "axios";

export default {
  data() {
    return {
      // user: "testname"
    };
  },

  methods: {
    ...mapActions(["logout"])

    // logout: function(e) {
    //   console.log(e);
    //   this.$store.dispatch("logout");
    // e.preventDefault();
    // let data = {};
    // axios
    //   .post("/api/logout", data)
    //   .then(response => {
    //     console.log("Logged out");
    //     console.log(response);
    //     console.log(this);
    //     // this.$router.push("/dashboard");
    //   })
    //   .catch(errors => {
    //     console.log("Cannot logout");
    //     console.log(errors);
    //   });
    // }
  },
  computed: {
    ...mapState(["currentUser"])
  }
};
</script>

<style scoped>
/* div {
  border: 1px solid red;
} */

.modal-card-body {
  padding: 10px;
}
</style>
