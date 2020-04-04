<template>
  <div>
    <h4>Register</h4>
    <form>
      <label for="name">Name</label>
      <div>
        <input
          id="name"
          type="text"
          v-model="registration_data.name"
          required
          autofocus
        />
      </div>

      <label for="email">E-Mail Address</label>
      <div>
        <input
          id="email"
          type="email"
          v-model="registration_data.email"
          required
        />
      </div>

      <label for="username">Username</label>
      <div>
        <input
          id="username"
          type="username"
          v-model="registration_data.username"
          required
        />
      </div>

      <label for="password">Password</label>
      <div>
        <input
          id="password"
          type="password"
          v-model="registration_data.password"
          required
        />
      </div>

      <label for="password-confirm">Confirm Password</label>
      <div>
        <input
          id="password-confirm"
          type="password"
          v-model="registration_data.password_confirm"
          required
        />
      </div>

      <!-- <label for="password-confirm">Is this an administrator account?</label>
      <div>
        <select v-model="registration_data.is_admin">
          <option value="1">Yes</option>
          <option value="0">No</option>
        </select>
      </div> -->

      <div>
        <button type="submit" @click.prevent="register(registration_data)">
          Register
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import { mapActions } from "vuex";
// import axios from "axios";

export default {
  props: ["nextUrl"],
  data() {
    return {
      registration_data: {
        // name: "",
        // email: "",
        // password: "",
        // password_confirm: "",
        // is_admin: 0,
        name: "Test",
        email: "test@test.test",
        username: "Tester",
        password: "test",
        password_confirm: "test",
        is_admin: 0
      }
    };
  },
  methods: {
    ...mapActions(["register"])
    // handleSubmit(e) {
    //   e.preventDefault();
    //   if (
    //     this.password === this.password_confirm &&
    //     this.password.length > 0
    //   ) {
    //     let url = `$(this.$store.state.api_url)/api/register`;
    //     // if (this.is_admin == 1) {
    //     //   url = `$(this.$store.state.api_url)/api/register-admin`;
    //     // }
    //     axios
    //       .post(url, {
    //         name: this.name,
    //         email: this.email,
    //         password: this.password,
    //         is_admin: this.is_admin
    //       })
    //       .then(response => {
    //         localStorage.setItem("user", JSON.stringify(response.data.user));
    //         localStorage.setItem("jwt", response.data.token);

    //         if (localStorage.getItem("jwt") != null) {
    //           this.$emit("loggedIn");
    //           if (this.$route.params.nextUrl != null) {
    //             this.$router.push(this.$route.params.nextUrl);
    //           } else {
    //             this.$router.push("/");
    //           }
    //         }
    //       })
    //       .catch(error => {
    //         console.error(error);
    //       });
    //   } else {
    //     this.password = "";
    //     this.passwordConfirm = "";

    //     return alert("Passwords do not match");
    //   }
    // }
  }
};
</script>
