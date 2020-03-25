<template>
  <div>
    <h1>Not Found</h1>
    <p>The page you were looking for could not be found</p>
    <router-link :to="{ name: 'Home' }">
      but check out the homepage instead
    </router-link>
  </div>
</template>

<script>
export default {};
</script>

<style scoped></style>
