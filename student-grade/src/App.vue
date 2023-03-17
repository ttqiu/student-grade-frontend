<template>
  <div id="app">
    <header>
      <NavBar />
    </header>
    <main>
      <router-view header="students"></router-view>
    </main>
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue'
// import Register from './components/Register'
// import { CheckSession } from './services/Auth'

export default {
  name: 'App',
  components: {
    NavBar
  }
  // methods: {
  //   handleLogout() { },
  // }
}
</script>


