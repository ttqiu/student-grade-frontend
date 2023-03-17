<template>
  <div class="details">
    <div class="student-info">
      <h1>{{ studentDetails.firstName }} {{ studentDetails.lastName }}</h1>
      <h3>{{ studentDetails.email }}</h3>
      <h3>GPA: {{ GPA(courses) }}</h3>
      <h3 @click="deleteStudent()" class="h3-button">
        Delete {{ studentDetails.firstName }} {{ studentDetails.lastName }}
      </h3>
    </div>
    <h3 @click="assignCourse(studentDetails.id)" class="h3-button">
      Assign Student to Course
    </h3>
    <div class="detail-grid">
      <div :key="course.id" v-for="course in courses" class="course">
        <CourseCard :course="course" @click="selectCourse(course.id)" />
        <button @click="editCourseGrade(studentDetails.id, course.id)">
          Edit
        </button>
        <button @click="deleteCourseGrade(course.id)">Delete</button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import CourseCard from '@/components/CourseCard.vue'

export default {
  name: 'StudentDetails',
  components: {
    CourseCard
  },
  data: () => ({
    studentDetails: {},
    courses: [],
    edit: false,
    popupActivo: false
  }),
  mounted() {
    this.getStudentDetails()
  },
  methods: {
    async getStudentDetails() {
      const studentId = this.$route.params.student_id
      const res = await axios.get(
        `http://localhost:3001/api/students/${studentId}`
      )
      this.studentDetails = res.data
      res.data.courses = res.data.courses.sort((a, b) =>
        a.name.localeCompare(b.name, 'en', { sensitivity: 'base' })
      )
      this.courses = res.data.courses
    },
    async deleteStudent() {
      const studentId = this.$route.params.student_id
      await axios.delete(
        `http://localhost:3001/api/students/${studentId}/delete`
      )
      this.$router.push(`/students/`)
    },
    async deleteCourseGrade(courseId) {
      await axios.delete(
        `http://localhost:3001/api/grades/delete/${this.$route.params.student_id}/${courseId}`
      )
      this.$router.go(0)
    },
    GPA(grades) {
      let gpa = 0
      for (let i = 0; i < grades.length; i++) {
        gpa += grades[i].Grade.grade
      }
      gpa =
        Math.floor((gpa / grades.length) * Math.pow(10, 2)) / Math.pow(10, 2)
      if (isNaN(gpa)) {
        gpa = 0
      }
      return gpa
    },
    selectCourse(courseId) {
      this.$router.push(`/courses/${courseId}`)
    },
    editCourseGrade(studentId, courseId) {
      this.$router.push(`/courses/edit/${studentId}/${courseId}`)
    },
    assignCourse(studentId) {
      this.$router.push(`/students/assign/${studentId}/`)
    }
  }
}
</script>
