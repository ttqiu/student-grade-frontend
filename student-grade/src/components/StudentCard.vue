<template>
  <div class="card">
    <div class="info-wrapper flex-col">
      <h3>{{ student.firstName }} {{ student.lastName }}</h3>
      <h4>{{ student.email }}</h4>
      <h3 v-if="student.Grade">
        Grade: {{ numberToLetter(student.Grade.grade) }}
      </h3>
    </div>
  </div>
</template>

<script>
export default {
  name: 'StudentCard',
  props: {
    student: {}
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
