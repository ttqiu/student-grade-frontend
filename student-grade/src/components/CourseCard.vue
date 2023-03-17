<template>
  <div class="card">
    <div class="info-wrapper flex-col">
      <h3>{{ course.name }}</h3>
      <h3 v-if="course.department !== null">
        Department: {{ course.department }}
      </h3>
      <h3 v-if="course.Grade">
        Grade: {{ numberToLetter(course.Grade.grade) }}
      </h3>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CourseCard',
  props: {
    course: {}
  },
  methods: {
    numberToLetter(grade) {
      if (grade === 4) {
        grade = 'A'
      } else if (grade === 3) {
        grade = 'B'
      } else if (grade === 2) {
        grade = 'C'
      } else if (grade === 1) {
        grade = 'D'
      } else {
        grade = 'F'
      }
      return grade
    }
  }
}
</script>
