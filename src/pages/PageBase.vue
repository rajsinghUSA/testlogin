<template>
  <div>
    <div class="columns">
      <BaseSideNavigationMenu v-role:authenticated />
      <PageContent />
    </div>
    <BaseFooter />
  </div>
</template>

<script>
import { mapState } from "vuex";
import BaseSideNavigationMenu from "@/components/BaseSideNavigationMenu";
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
    BaseSideNavigationMenu,
    PageContent,
    BaseFooter
  }
};
</script>

<style scoped></style>
