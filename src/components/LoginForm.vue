<template>
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
</template>

<script>
import { mapActions } from "vuex";

export default {
  data() {
    return {
      loginData: { email: "a@a.a", password: "bb", remember: false }
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
  }
};
</script>

<style scoped></style>
