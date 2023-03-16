<template>
  <div class="container-grid">
    <div :key="course.id" v-for="course in courses" class="course">
      <CourseCard :course="course" @click="selectCourse(course.id)" />
    </div>
  </div>
</template>

<script>
import CourseCard from '../components/CourseCard.vue'
import axios from 'axios'
export default {
  name: 'ViewCourses',
  data: () => ({
    courses: []
  }),
  components: {
    CourseCard
  },
  mounted: function () {
    this.getCourses()
  },
  methods: {
    async getCourses() {
      const res = await axios.get('http://localhost:3001/api/courses')
      console.log(res.data)
      this.courses = res.data
    },
    selectCourse(courseId) {
      this.$router.push(`/courses/${courseId}`)
    }
  }
}
</script>


