<template>
  <div class="card">
    <div class="info-wrapper flex-col">
      <h3>{{ course.name }}</h3>
      <h3>{{ course.department }}</h3>
      <!-- <h3>{{ course.Grade.grade }}</h3> -->
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
