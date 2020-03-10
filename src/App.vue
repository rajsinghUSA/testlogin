<template>
  <div id="app">
    <BaseHeader v-if="!$route.path.includes('/test/')" />
    <PageBase />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>

<script>
import BaseHeader from "./components/BaseHeader.vue";
import PageBase from "./pages/PageBase.vue";

export default {
  name: 'app',
  data() {
    return {
      //something
    };
  },
  components: {
    BaseHeader,
    PageBase
  }
}
</script>