<template>
  <div class="background">
    <img class="logoimage" src="../images/hedgecloudsee.png" alt="hedgehoglogo" />
    <div class="view">
      <h3 @click="viewStudents()" class="h3-button">
        <i class="fa-solid fa-magnifying-glass"></i>
        <i class="fa-solid fa-users"></i>
      </h3>
      <h3 @click="viewCourses()" class="h3-button">
        <i class="fa-solid fa-magnifying-glass"></i>
        <i class="fa-solid fa-book-skull"></i>
      </h3>
      <h3 @click="addStudent()" class="h3-button">
        <i class="fa-solid fa-user-plus"></i>
      </h3>
      <h3 @click="addCourses()" class="h3-button">
        <i class="fa-solid fa-plus"></i>
        <i class="fa-solid fa-book-skull"></i>

      </h3>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  methods: {
    viewStudents() {
      this.$router.push(`/students/`)
    },
    viewCourses() {
      this.$router.push(`/courses/`)
    },
    addStudent() {
      this.$router.push(`/student/add`)
    },
    addCourses() {
      this.$router.push(`/courses/add`)
    }
  }
}
</script>
