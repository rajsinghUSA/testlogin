<template>
  <div class="columns">
    <BaseNavigationMenu />
    <PageContent />
  </div>
</template>

<script>
import BaseNavigationMenu from "@/components/BaseNavigationMenu";
import PageContent from "@/pages/PageContent";

export default {
  components: {
    BaseNavigationMenu,
    PageContent
  }
};
</script>

<style scoped></style>
