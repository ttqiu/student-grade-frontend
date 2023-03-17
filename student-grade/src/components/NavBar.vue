<template>
  <nav class="navbar">
    <div class="mainLinks">
      <router-link to="/" class="link">
        <i class="fa-solid fa-house"></i>
      </router-link>
      <router-link to="/courses" class="link">
        <i class="fa-solid fa-book-skull"></i>
      </router-link>
      <router-link to="/students" class="link">
        <i class="fa-solid fa-users"></i>
      </router-link>
    </div>
    <div></div>
    <router-link to="/about" class="link">
      <i class="fa-solid fa-pizza-slice"></i>
    </router-link>

  </nav>
</template>

<script>
export default {
  name: 'NavBar'
}
</script>

