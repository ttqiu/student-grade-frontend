<template>
  <div>
    <form v-on:submit="handleSubmit">
      <input @input="handleChange" placeholder="Course Name" :value="name" name="name" type="name" />
      <input @input="handleChange" placeholder="Department" :value="department" name="department" type="department" />
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
    handleChange(event) {
      console.log(event)
      this[e.target.name] = e.target.value
    },
    async handleSubmit(e) {
      e.preventDefault()
      await axios.post({ name: this.name, department: this.department }, 'http://localhost:3001/api/courses/create')
      this.name = ''
      this.department = ''

    }
  }
}

</script>