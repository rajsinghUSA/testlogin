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
      <span v-role:authenticated.not>Login</span>
      <span v-role:authenticated>{{ currentUser.name }}</span>
      <b-icon :icon="active ? 'chevron-up' : 'chevron-down'"></b-icon>
    </b-button>

    <b-dropdown-item
      aria-role="menu-item"
      :focusable="false"
      custom
      paddingless
    >
      <LoginForm v-role:authenticated.not />
      <LoggedinMenu v-role:authenticated />
    </b-dropdown-item>
  </b-dropdown>
</template>

<script>
import { mapState } from "vuex";
import LoginForm from "@/components/LoginForm.vue";
import LoggedinMenu from "@/components/LoggedinMenu.vue";

export default {
  computed: {
    ...mapState(["currentUser"])
  },
  components: {
    LoginForm,
    LoggedinMenu
  }
};
</script>

<style scoped></style>
