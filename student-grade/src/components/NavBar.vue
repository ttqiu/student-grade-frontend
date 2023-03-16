<template>
  <nav class="navbar">
    <router-link to="/">Home</router-link>
    <router-link to="/courses">Courses</router-link>
    <router-link to="/students">Students</router-link>
    <router-link to="/abouts">About</router-link>

  </nav>
</template>

<script>
export default {
  name: 'NavBar'
}
</script>

<style scoped>
  .navbar{
    display: flex;
    justify-content: center;
    gap: 10px;
  }
</style>
