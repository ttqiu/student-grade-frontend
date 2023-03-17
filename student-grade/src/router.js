import { createWebHistory, createRouter } from 'vue-router'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ViewCourses from './pages/ViewCourses'
import ViewStudents from './pages/ViewStudents'
import CourseDetails from './pages/CourseDetails'
import StudentDetails from './pages/StudentDetails'
import CourseForm from './components/CourseForm'
import StudentForm from './components/StudentForm'
import EditCourseGrade from './components/EditCourseGrade'
import AssignStudentToCourse from './components/AssignStudentToCourse'

const routes = [
  { path: '/', component: HomePage, name: 'HomePage' },
  { path: '/about', component: AboutPage, name: 'AboutPage' },
  { path: '/courses', component: ViewCourses, name: 'ViewCourses' },
  { path: '/students', component: ViewStudents, name: 'ViewStudents' },
  {
    path: '/courses/:course_id',
    component: CourseDetails,
    name: 'CourseDetails'
  },
  {
    path: '/students/:student_id',
    component: StudentDetails,
    name: 'StudentDetails'
  },
  { path: '/courses/add', component: CourseForm, name: 'CourseForm' },
  { path: '/students/add', component: StudentForm, name: 'StudentForm' },
  {
    path: '/courses/edit/:student_id/:course_id',
    component: EditCourseGrade,
    name: 'EditCourseGrade'
  },
  {
    path: '/students/assign/:student_id/',
    component: AssignStudentToCourse,
    name: 'AssignStudentToCourse'
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
