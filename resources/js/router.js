import Vue from 'vue'
import Router from 'vue-router'

//Routers for the Index & Example
import Index from './views/Index'
import Example from './views/Example'

//Routes for Courses Table
import CoursesIndex from './views/courses/Index'
import CoursesEdit from './views/courses/Edit'
import CoursesCreate from './views/courses/Create'
import CoursesShow from './views/courses/Show'

//Routes for Enrolment Table
import EnrolmentsIndex from './views/enrolments/Index'
import EnrolmentsEdit from './views/enrolments/Edit'
import EnrolmentsCreate from './views/enrolments/Create'
import EnrolmentsShow from './views/enrolments/Show'

//Routes for Lecturer Table
import LecturersIndex from './views/lecturers/Index'
import LecturersEdit from './views/lecturers/Edit'
import LecturersCreate from './views/lecturers/Create'
import LecturersShow from './views/lecturers/Show'

//Tells the application to use this router
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      //Default page route
      path: '/',
      name: 'index',
      component: Index
    },
    {
      //Example page route
      path: '/example',
      name: 'example',
      component: Example
    },
    {
      //Courses Index route
      path: '/courses',
      name: 'coursesIndex',
      component: CoursesIndex
    },
    {
      //Courses Edit route
      path: '/courses/edit/:id',
      name: 'coursesEdit',
      component: CoursesEdit
    },
    {
      //Courses Create route
      path: '/courses/create',
      name: 'coursesCreate',
      component: CoursesCreate
    },
    {
      //Courses Show route
      path: '/courses/:id',
      name: 'coursesShow',
      component: CoursesShow
    },



    {
      //Enrolments Index route
      path: '/enrolments',
      name: 'enrolmentsIndex',
      component: EnrolmentsIndex
    },
    {
      //Enrolments Edit route
      path: '/enrolments/edit/:id',
      name: 'enrolmentsEdit',
      component: EnrolmentsEdit
    },
    {
      //Enrolments Create routee
      path: '/enrolments/create',
      name: 'enrolmentsCreate',
      component: EnrolmentsCreate
    },
    {
      //Enrolments Show route
      path: '/enrolments/:id',
      name: 'enrolmentsShow',
      component: EnrolmentsShow
    },



    {
      //Enrolments Index route
      path: '/lecturers',
      name: 'lecturersIndex',
      component: LecturersIndex
    },
    {
      //Enrolments Edit route
      path: '/lecturers/edit/:id',
      name: 'lecturersEdit',
      component: LecturersEdit
    },
    {
      //Enrolments Create route
      path: '/lecturers/create',
      name: 'lecturersCreate',
      component: LecturersCreate
    },
    {
      //Enrolments Show route
      path: '/lecturers/:id',
      name: 'lecturersShow',
      component: LecturersShow
    },
  ]
})
