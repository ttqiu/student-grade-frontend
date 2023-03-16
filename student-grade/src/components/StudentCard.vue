<template>
  <div class="card student-card">
    <div class="info-wrapper flex-col">
      <h3>{{ student.firstName }} {{ student.lastName }}</h3>
      <h4>{{ student.email }}</h4>
    </div>
  </div>
</template>

<script>
export default {
  name: 'StudentCard',
  props: {
    student: {}
  },
}
</script>