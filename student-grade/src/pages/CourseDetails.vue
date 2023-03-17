<template>
  <div class="course-info">
    <h1>{{ courseDetails.name }}</h1>
    <h3 v-if="courseDetails.department !== null">
      Department: {{ courseDetails.department }}
    </h3>
  </div>
  <div class="detail-grid">
    <div :key="student.id" v-for="student in students" class="course">
      <StudentCard :student="student" @click="selectStudent(student.id)" />
      <button @click="editCourseGrade(student.id, courseDetails.id)">
        Edit
      </button>
    </div>
  </div>
</template>

<script>
import StudentCard from '../components/StudentCard.vue'
import axios from 'axios'

export default {
  name: 'CourseDetails',
  data: () => ({
    courseDetails: {},
    students: []
  }),
  components: {
    StudentCard
  },
  mounted: function () {
    this.getStudentsFromCourse()
  },
  methods: {
    async getStudentsFromCourse() {
      const res = await axios.get(
        `http://localhost:3001/api/courses/${this.$route.params.course_id}`
      )
      this.courseDetails = res.data
      res.data.students = res.data.students.sort((a, b) =>
        a.lastName.localeCompare(b.lastName, 'en', { sensitivity: 'base' })
      )
      this.students = res.data.students
    },
    selectStudent(studentId) {
      this.$router.push(`/students/${studentId}`)
    },
    editCourseGrade(studentId, courseId) {
      this.$router.push(`/courses/edit/${studentId}/${courseId}`)
    }
  }
}
</script>
