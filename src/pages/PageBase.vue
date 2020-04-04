<template>
  <div>
    <div class="columns">
      <BaseNavigationMenu v-if="currentUser.email" />
      <PageContent />
    </div>
    <BaseFooter />
  </div>
</template>

<script>
import { mapState } from "vuex";
import BaseNavigationMenu from "@/components/BaseNavigationMenu";
import BaseFooter from "@/components/BaseFooter";
import PageContent from "@/pages/PageContent";

export default {
  data() {
    return {};
  },

  methods: {},

  computed: {
    ...mapState(["currentUser"])
  },

  components: {
    BaseNavigationMenu,
    PageContent,
    BaseFooter
  }
};
</script>

<style scoped></style>
