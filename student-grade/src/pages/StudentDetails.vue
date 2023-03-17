<template>
  <div class="details">
    <div class="student-info">
      <h1>{{ studentDetails.firstName }} {{ studentDetails.lastName }}</h1>
      <h3>{{ studentDetails.email }}</h3>
      <h3>GPA: {{ GPA(courses) }}</h3>
    </div>
    <button @click="assignCourse(studentDetails.id)">
      Assign Student to Course
    </button>
    <div class="container-grid">
      <div :key="course.id" v-for="course in courses">
        <CourseCard :course="course" @click="selectCourse(course.id)" />
        <button @click="editCourseGrade(studentDetails.id, course.id)">
          Edit
        </button>
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
