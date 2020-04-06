<template>
  <div>
    <h1>This is the stats page authenticated</h1>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState(["currentUser"])
  }
};
</script>

<style scoped></style>
