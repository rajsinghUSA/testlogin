<template>
  <b-dropdown position="is-bottom-left" aria-role="menu" trap-focus>
    <a class="navbar-item" slot="trigger" role="button" slot-scope="{ active }">
      <span>{{ currentUser.name }}</span>
      <b-icon :icon="active ? 'chevron-up' : 'chevron-down'"></b-icon>
    </a>
    <div class="modal-card" style="width:300px;">
      <b-dropdown-item has-link aria-role="menuitem">
        <router-link to="/account">
          Account
        </router-link>
      </b-dropdown-item>

      <b-dropdown-item has-link aria-role="menuitem">
        <router-link to="/help">
          Help
        </router-link>
      </b-dropdown-item>

      <b-dropdown-item
        aria-role="menu-item"
        :focusable="false"
        custom
        paddingless
      >
        <footer class="modal-card-foot">
          <button value="logout" class="button is-info" @click="logout">
            Logout
          </button>
        </footer>
      </b-dropdown-item>
    </div>
  </b-dropdown>
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
