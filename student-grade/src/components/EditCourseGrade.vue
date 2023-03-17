<template>
  <div class="form-container">
    <div>
      <h3>{{ studentDetails.firstName }} {{ studentDetails.lastName }}</h3>
      <div :key="course.id" v-for="course in studentDetails.courses">
        <div v-if="course.id === parseInt(this.$route.params.course_id)">
          <h3>Course: {{ course.name }}</h3>
          <h3>Current Grade: {{ numberToLetter(course.Grade.grade) }}</h3>
        </div>
      </div>
    </div>
    <form @submit="handleSubmit">
      <h3>Please select Grade</h3>
      <select v-model="grade" @input="handleChange">
        <option value="" disabled>Select a Grade</option>
        <option
          v-for="option in options"
          :value="option.value"
          :key="option.id"
        >
          {{ option.text }}
        </option>
      </select>
      <button @click="$router.go(-1)">submit</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'EditCourseGrade',
  data: () => ({
    studentDetails: {},
    grade: '',
    options: [
      { text: 'A', value: 4, id: 1 },
      { text: 'B', value: 3, id: 2 },
      { text: 'C', value: 2, id: 3 },
      { text: 'D', value: 1, id: 4 },
      { text: 'F', value: 0, id: 5 }
    ]
  }),
  mounted() {
    this.getStudentDetails()
  },
  methods: {
    async getStudentDetails() {
      const res = await axios.get(
        `http://localhost:3001/api/students/${this.$route.params.student_id}`
      )
      this.studentDetails = res.data
      console.log(res.data.courses)
    },
    handleChange(e) {
      this.grade = e.target.value
    },
    async handleSubmit(e) {
      e.preventDefault()
      const studentId = this.$route.params.student_id
      const courseId = this.$route.params.course_id
      await axios.put(`http://localhost:3001/api/grades/grade/`, {
        studentId: studentId,
        courseId: courseId,
        grade: this.grade
      })
      this.grade = ''
    },
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
