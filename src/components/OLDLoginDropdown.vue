<template>
  <b-dropdown
    position="is-bottom-left"
    aria-role="menu"
    close-on-click
    can-close
    trap-focus
  >
    <b-button
      class="navbar-item"
      slot="trigger"
      role="button"
      slot-scope="{ active }"
    >
      <span>Login</span>
      <b-icon :icon="active ? 'chevron-up' : 'chevron-down'"></b-icon>
    </b-button>

    <b-dropdown-item
      aria-role="menu-item"
      :focusable="false"
      custom
      paddingless
    >
      <form @submit.prevent="doLogin(loginData)" action="">
        <div class="modal-card" style="width:300px;">
          <section class="modal-card-body">
            <b-field label="Email">
              <b-input
                type="email"
                name="email"
                placeholder="Your email"
                v-model="loginData.email"
                required
                autofocus
              >
              </b-input>
            </b-field>

            <b-field label="Password">
              <b-input
                type="password"
                name="password"
                password-reveal
                placeholder="Your password"
                v-model="loginData.password"
                required
              >
              </b-input>
            </b-field>

            <b-checkbox v-model="loginData.remember">Remember me</b-checkbox>
          </section>
          <footer class="modal-card-foot">
            <button type="submit" value="login" class="button is-primary">
              Login
            </button>
            <b-button tag="router-link" to="/register" class="is-success">
              Register
            </b-button>
          </footer>
        </div>
      </form>
    </b-dropdown-item>
  </b-dropdown>
</template>

<script>
import { mapActions } from "vuex";
// import axios from "axios";

export default {
  data() {
    return {
      loginData: { email: "a@aa", password: "bb", remember: false }
    };
  },

  methods: {
    ...mapActions(["login"]),

    doLogin: async function(loginData) {
      const response = await this.login(loginData);
      if (response.status == 401) {
        // show error
      }
      console.log(response)
      // debugger;
    }

    // doLogin: function(e) {
    //   e.preventDefault();
    //   let data = {
    //     email: this.email,
    //     password: this.password,
    //     returnTo: window.location.pathname
    //   };
    //   this.login(data);
    // }

    // login: function(e) {
    //   e.preventDefault();
    //   let data = {
    //     email: this.email,
    //     password: this.password,
    //     returnTo: window.location.pathname
    //   };
    // axios
    //   .post("/api/login", data)
    //   .then(response => {
    //     console.log("Logged in");
    //       console.log(response);
    //       console.log(this);
    //       debugger
    //       // this.$router.push("/dashboard");
    //     })
    //     .catch(errors => {
    //       console.log("Cannot log in");
    //       console.log(errors);
    //     });
    // }
    // login: async function(e) {
    //   e.preventDefault();
    //   let data = {
    //     email: this.email,
    //     password: this.password,
    //     returnTo: window.location.pathname
    //   };
    //   try {
    //     const response = await axios.post("/api/login", data);
    //     console.log("Logged in");
    //     console.log(response);
    //     console.log(this);
    //   } catch (errors) {
    //     console.log("Cannot log in");
    //     console.log(errors);
    //   }
    // }
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
