<template>
  <div :key="student.id" v-for="student in students">
    <StudentCard :student="student" @click="selectStudent(student.id)" />
  </div>
</template>

<script>
import StudentCard from '../components/StudentCard.vue'
import axios from 'axios'

export default {
  name: 'CourseDetails',
  data: () => ({
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
      const res = await axios.get(`http://localhost:3001/api/courses/${this.$route.params.course_id}`)
      console.log(res)
      this.students = res.data.students
    },
    selectStudent(studentId) {
      this.$router.push(`/students/${studentId}`)
    }
  }
}
</script>
