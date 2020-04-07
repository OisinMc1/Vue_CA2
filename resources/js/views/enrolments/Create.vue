<!-- Enrolment Create -->

<template>
  <b-row>
    <b-col cols="8">
      <!-- Create Form -->
      <b-card title="Add Enrolment" tag="article">

      <!-- Date -->
      <b-form @submit="onSubmit">
        <b-form-group
          id="input-group-1"
          label="Date:"
          label-for="input-1"
        >
          <b-form-input
            id="input-1"
            v-model="enrolment.date"
            type="date"
            required
            placeholder="Enter date"
          ></b-form-input>
        </b-form-group>

        <!-- Time -->
        <b-form-group
          id="input-group-2"
          label="Date:"
          label-for="input-2"
        >
          <b-form-input
            id="input-2"
            v-model="enrolment.time"
            type="time"
            required
            placeholder="Enter time"
          ></b-form-input>
        </b-form-group>


        <!-- Status -->
        <b-form-group
          id="input-group-3"
          label="Status:"
          label-for="input-3"
        >
          <b-form-input
            id="input-3"
            v-model="enrolment.status"
            type="text"
            required
            placeholder="Enter status"
          ></b-form-input>
        </b-form-group>

        <!-- Course ID -->
        <b-form-group
          id="input-group-4"
          label="Course:"
          label-for="input-4"
        >
        <!-- Courses Dropdown that gets variables from courses table -->
          <b-form-select
            name='courses'
            v-model='enrolment.course_id'
            class='form-control'>

            <option
            placeholder="Select A Course"
            v-for="course in courses"
            v-bind:value='course.id'>

            {{course.title}}

          </option>
          </b-form-select>
        </b-form-group>

        <!-- Lecturer ID -->
        <b-form-group
          id="input-group-5"
          label="Lecturer:"
          label-for="input-5"
        >
        <!-- Lecturers Dropdown that gets variables from lecturers table -->
          <b-form-select
            name='lecturers'
            v-model='enrolment.lecturer_id'
            class='form-control'>

            <option
            placeholder="Select A Lecturer"
            v-for="lecturer in lecturers"
            v-bind:value='lecturer.id'>

            {{lecturer.name}}

          </option>
          </b-form-select>
        </b-form-group>



          <b-button type="submit" variant="primary">Submit</b-button>
        </b-form>
      </b-card>
    </b-col>
  </b-row>
</template>
<script>
export default {
  data() {
    return {
      // Returns enrolment
      enrolment: {
        date: '',
        time: '',
        status: '',
        course_id: '',
        lecturer_id: ''
      },
      // Returns courses
      courses: {

      // Returns lecturers
      },
      lecturers: {

      },

      loggedIn: false,
      errors: []
    }
  },
  computed: {

  },
  created() {
    if (localStorage.getItem('token')) {
      this.loggedIn = true;
    }
    else {
      this.loggedIn = false;
      this.$router.push('/');
    }

    let app = this;
    let token = localStorage.getItem('token');

    axios.get('/api/courses', { // Fetching Courses
        headers: { Authorization: "Bearer " + token }
    })
    .then(function (response) {
        console.log(response.data);
        app.courses = response.data.data;
    })
    .catch(function (error) {
        console.log(error);
    })

    axios.get('/api/lecturers', { // Fetching Lects
        headers: {
            Authorization: "Bearer " + token
        }
    })
    .then(function (response) {
        console.log(response.data);
        app.lecturers = response.data.data;
    })
    .catch(function (error) {
        console.log(error);
    })
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault()

      let app = this;
      let token = localStorage.getItem('token');

      // Uses Axios to post to API
      axios.post('/api/enrolments', {
        date: app.enrolment.date,
        time: app.enrolment.time,
        status: app.enrolment.status,
        course_id: app.enrolment.course_id,
        lecturer_id: app.enrolment.lecturer_id
      }, {
        headers: { Authorization: `Bearer ${token}`}
      })
      .then(function(response) {
        app.$router.push('/enrolments');
      })
      .catch(function (error) {
        console.log(error.response.data);

        app.errors = error.response.data.errors
      });
    }
  }
}
</script>
