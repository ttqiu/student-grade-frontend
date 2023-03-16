<template>
  <div class="game-content">
    <h1>{{ studentDetails.firstName }} {{ studentDetails.lastName }}</h1>
    <section class="details">
      <div class="flex-row space"></div>
      <div className="panel">
        <h3>{{ studentDetails.email }}</h3>
        <!-- <h3>Overall GPA: {{ studentDetails. }}</h3> -->
      </div>
      <div className="courses">
        <CourseCard
          :key="course.id"
          v-for="course in studentDetails.courses"
          :course="course"
          @click="selectCourse(course.id)"
        />
      </div>
    </section>
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
    studentDetails: {}
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
    },
    selectCourse(courseId) {
      this.$router.push(`/courses/${courseId}`)
    }
  }
}
</script>
