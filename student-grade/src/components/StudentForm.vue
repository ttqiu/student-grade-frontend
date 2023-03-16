<template>
  <div class="form-container">
    <h1>Add a new student</h1>
    <form @submit="handleSubmit">
      <input
        @input="handleChange"
        placeholder="First Name"
        :value="firstName"
        name="firstName"
        type="firstName"
      />
      <input
        @input="handleChange"
        placeholder="Last Name"
        :value="lastName"
        name="lastName"
        type="lastName"
      />
      <input
        @input="handleChange"
        placeholder="Email"
        :value="email"
        name="email"
        type="email"
      />
      <button :disabled="!email || !firstName || !lastName">Add Student</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'StudentForm',
  data: () => ({
    firstName: '',
    lastName: '',
    email: ''
  }),
  methods: {
    handleChange(e) {
      this[e.target.name] = e.target.value
    },
    async handleSubmit(e) {
      e.preventDefault()
      await axios.post(`http://localhost:3001/api/students/register`, {
        firstName: this.firstName,
        lastName: this.lastName,
        email: this.email
      })
      this.firstName = ''
      this.lastName = ''
      this.email = ''
    }
  }
}
</script>
