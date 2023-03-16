<template>
  <div class="card">
    <div class="info-wrapper flex-col">
      <h3>{{ course.name }}</h3>
      <h3>{{ course.department }}</h3>
<<<<<<< HEAD
      <!-- <h3>{{ course.Grade.grade }}</h3> -->
=======
>>>>>>> c1a8d19d7f9292ac9457a8f2a0defd919bfdfb22
    </div>
  </div>
</template>

<script>
export default {
  name: 'CourseCard',
  props: {
    course: {}
  }
}
</script>
