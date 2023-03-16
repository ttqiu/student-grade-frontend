<template>
  <div>
    <h1>Add A course</h1>
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
      this[event.target.name] = event.target.value
    },
    async handleSubmit(event) {
      event.preventDefault()
      await axios.post('http://localhost:3001/api/courses/create', { name: this.name, department: this.department })
      this.name = ''
      this.department = ''

    }
  }
}

</script>