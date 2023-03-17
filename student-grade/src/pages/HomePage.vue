<template>
  <div class="background">
    <img class="logoimage" src="../images/hedge.png" alt="hedgehoglogo" />
    <div class="view">
      <h3 @click="viewStudents()" class="h3-button">View Students</h3>
      <h3 @click="viewCourses()" class="h3-button">View Courses</h3>
      <h3 @click="addStudent()" class="h3-button">Add A New Student</h3>
      <h3 @click="addCourses()" class="h3-button">Add A New Course</h3>
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
