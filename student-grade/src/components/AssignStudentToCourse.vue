<template>
  <div class="form-container">
    <div>
      <h3>{{ studentDetails.firstName }} {{ studentDetails.lastName }}</h3>
    </div>
    <form @submit="handleSubmit">
      <div>
        <select  class="dropdown" @input="handleCourseChange">
          <option value="">Select a Course</option>
          <option v-for="course in courses" :value="course.id" :key="course.id">
            {{ course.name }}
          </option>
        </select>
      </div>
      <div>
        <select class="dropdown" v-model="grade" @input="handleGradeChange">
          <option value="" disabled>Select a Grade</option>
          <option
            v-for="option in options"
            :value="option.value"
            :key="option.id"
          >
            {{ option.text }}
          </option>
        </select>
      </div>
      <button @click="$router.go(-1)">submit</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'AssignStudentToCourse',
  data: () => ({
    studentDetails: {},
    courses: [],
    grade: '',
    course: '',
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
    this.getCourses()
  },
  methods: {
    async getStudentDetails() {
      const res = await axios.get(
        `http://localhost:3001/api/students/${this.$route.params.student_id}`
      )
      this.studentDetails = res.data
    },
    async getCourses() {
      const res = await axios.get('http://localhost:3001/api/courses')
      res.data = res.data.sort((a, b) =>
        a.name.localeCompare(b.name, 'en', { sensitivity: 'base' })
      )
      this.courses = res.data
    },
    handleCourseChange(e) {
      this.course = e.target.value
    },
    handleGradeChange(e) {
      this.grade = e.target.value
    },
    async handleSubmit(e) {
      e.preventDefault()
      const studentId = this.$route.params.student_id
      await axios.post(`http://localhost:3001/api/grades/assign/`, {
        studentId: studentId,
        courseId: this.course,
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
