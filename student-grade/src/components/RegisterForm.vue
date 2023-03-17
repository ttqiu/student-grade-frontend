<!-- <template>
  <div>
    <form @submit="handleSubmit">
      <div>
        <h3>First Name</h3>
        <input @input="handleChange" placeholder="First Name" :value="firstName" name="firstName" type="firstName" />
      </div>
      <div>
        <h3>Last Name</h3>
        <input @input="handleChange" placeholder="Last Name" :value="lastName" name="lastName" type="lastName" />
      </div>
      <div>
        <h3>Email</h3>
        <input @input="handleChange" placeholder="Email" :value="email" name="email" type="email" />
      </div>
      <div>
        <h3>Password</h3>
        <input @input="handleChange" placeholder="password" :value="password" name="password" type="password" />
      </div>
      <div>
        <h3>Confirm Password</h3>
        <input @input="handleChange" placeholder="confirmPassword" :value="confirmPassword" name="confirmPassword"
          type="confirmPassword" />
      </div>

    </form>
  </div>
</template>

<script>
// import { RegisterUser } from '../services/Auth'
import axios from 'axios'

export default {
  name: 'RegisterForm',
  data: () => ({
    firstName: null,
    lastName: null,
    email: null,
    password: null,
    confirmPassword: null
  }),
  methods: {
    handleChange(e) {
      this[e.target.name] = e.target.value
    },
    async handleSubmit(e) {
      e.preventDefault()
      await axios.post('http://localhost:3001/api/auth/register', {
        firstName: this.firstName,
        lastName: this.lastName,
        email: this.email,
        password: this.password,
        confirmPassword: this.confirmPassword
      })
      this.firstName = null
      this.lastName = null
      this.email = null
      this.password = null
      this.confirmPassword = null
      this.$router.push(`/login/`)
    }

  }

}
</script> -->