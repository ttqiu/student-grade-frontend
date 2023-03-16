<template>
  <div class="container-grid">
    <div className="course" :key="student.id" v-for="student in students">
      <StudentCard :student="student" @click="selectStudent(student.id)" />
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import StudentCard from '../components/StudentCard.vue'

export default {
  name: 'ViewGames',
  components: {
    StudentCard
  },
  data: () => ({
    students: []
  }),
  mounted() {
    this.getAllStudents()
  },
  methods: {
    async getAllStudents() {
      const res = await axios.get(`http://localhost:3001/api/students/`)
      res.data = res.data.sort((a, b) =>
        a.lastName.localeCompare(b.lastName, 'en', { sensitivity: 'base' })
      )
      this.students = res.data
    },
    selectStudent(studentId) {
      this.$router.push(`/students/${studentId}`)
    }
  }
}
</script>
