<template>
  <b-menu class="column is-narrow">
    <b-menu-list>
      <b-menu-item
        tag="router-link"
        to="/stats"
        label="Statistics"
      ></b-menu-item>
      <b-menu-item tag="router-link" to="/create" label="Create"></b-menu-item>
      <b-menu-item
        tag="router-link"
        to="/history"
        label="History"
      ></b-menu-item>
      <b-menu-item tag="router-link" to="/search" label="Search"></b-menu-item>
    </b-menu-list>
  </b-menu>
</template>

<script>
export default {};
</script>

<style scoped>
.column {
  border: 1px solid red;
}
</style>
