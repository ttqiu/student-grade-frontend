<template>
  <div class="form-container">
    <h1>Add A course</h1>
    <form v-on:submit="handleSubmit">
      <div>
        <h3>Course Name</h3>
        <input
          class="dropdown"
          @input="handleChange"
          placeholder="Course Name"
          :value="name"
          name="name"
          type="name"
        />
      </div>
      <div>
        <h3>Department</h3>
        <input
          class="dropdown"
          @input="handleChange"
          placeholder="Department"
          :value="department"
          name="department"
          type="department"
        />
      </div>
      <button :disabled="!name">Add Courses</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'CourseForm',
  data: () => ({
    name: null,
    department: null
  }),
  methods: {
    handleChange(e) {
      this[e.target.name] = e.target.value
    },
    async handleSubmit(e) {
      e.preventDefault()
      await axios.post('http://localhost:3001/api/courses/create', {
        name: this.name,
        department: this.department
      })
      this.name = ''
      this.department = ''
      this.$router.push(`/courses/`)
    }
  }
}
</script>
