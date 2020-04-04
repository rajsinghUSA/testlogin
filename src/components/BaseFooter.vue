<template>
  <footer class="footer">
    <div class="content has-text-centered">
      <p>
        Status: {{ statusText }}
      </p>
    </div>
  </footer>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState(["statusText"])
  }
};
</script>

<style scoped></style>
