<template>
  <b-dropdown position="is-bottom-left" aria-role="menu" trap-focus>
    <a class="navbar-item" slot="trigger" role="button">
      <span>Login</span>
      <b-icon icon="menu-down"></b-icon>
    </a>

    <b-dropdown-item
      aria-role="menu-item"
      :focusable="false"
      custom
      paddingless
    >
      <form action="">
        <div class="modal-card" style="width:300px;">
          <section class="modal-card-body">
            <b-field label="Email">
              <b-input type="email" placeholder="Your email" required>
              </b-input>
            </b-field>

            <b-field label="Password">
              <b-input
                type="password"
                password-reveal
                placeholder="Your password"
                required
              >
              </b-input>
            </b-field>

            <b-checkbox>Remember me</b-checkbox>
          </section>
          <footer class="modal-card-foot">
            <button class="button is-primary">Login</button>
          </footer>
        </div>
      </form>
    </b-dropdown-item>
  </b-dropdown>
</template>

<script>
export default {};
</script>

<style scoped>
div {
  border: 1px solid red;
}

.modal-card-body {
  padding: 10px;
}
</style>
