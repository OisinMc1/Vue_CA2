<!-- Courses Create -->

<template>
  <b-row>
    <b-col cols="8">
      <!-- Create Form -->
      <b-card title="Add Course" tag="article">
        <b-form @submit="onSubmit">

          <!-- Title -->
          <b-form-group
            id="input-group-1"
            label="Title:"
            label-for="input-1"
          >
          <b-form-input
            id="input-1"
            type="text"
            required
            placeholder="Enter title"
            v-model="course.title"
          >
          </b-form-input>
          </b-form-group>

          <!-- Code -->
          <b-form-group
            id="input-group-2"
            label="Code:"
            label-for="input-2"
          >
          <b-form-input
            id="input-2"
            type="text"
            required
            placeholder="Enter code"
            v-model="course.code"
          >
          </b-form-input>
          <!-- In form error status -->
          <b-form-invalid-feedback :state="codeValid">
           The code may not be greater than 5 characters.
          </b-form-invalid-feedback>
          <b-form-valid-feedback :state="codeValid">
            Looks Good.
          </b-form-valid-feedback>
          </b-form-group>


          <!-- Description -->
          <b-form-group
            id="input-group-3"
            label="Description:"
            label-for="input-3"
          >
          <b-form-input
            id="input-3"
            type="text"
            required
            placeholder="Enter description"
            v-model="course.description"
          >
          </b-form-input>
          </b-form-group>

          <!-- Points -->
          <b-form-group
            id="input-group-4"
            label="Points:"
            label-for="input-4"
          >
          <b-form-input
            id="input-4"
            type="number"
            required
            placeholder="Enter points"
            v-model="course.points"
          >
          </b-form-input>
          </b-form-group>

          <!-- Level -->
          <b-form-group
            id="input-group-5"
            label="Level:"
            label-for="input-5"
          >
          <b-form-input
            id="input-5"
            type="number"
            required
            placeholder="Enter level"
            v-model="course.level"
          >
          </b-form-input>
          </b-form-group>

          <!-- Submit Button -->
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
      // Returns course
      course: {
        title: '',
        code: '',
        description: '',
        points: '',
        level: ''
      },
      loggedIn: false,
      errors: []
    }
  },
  computed: {
    codeValid() {
      // To check code for length
      return this.course.code.length <= 5 && this.course.code.length > 0
    }
  },
  created() {
    // Checking if user is logged in
    if (localStorage.getItem('token')) {
      this.loggedIn = true;
    }
    else {
      this.loggedIn = false;
      this.$router.push('/');
    }
  },
  methods: {

    // When submited
    onSubmit(evt) {
      evt.preventDefault()

      let app = this;
      let token = localStorage.getItem('token');

      // Using Axios to post data to the API which alters the database
      axios.post('/api/courses', {
        title: app.course.title,
        code: app.course.code,
        description: app.course.description,
        points: app.course.points,
        level: app.course.level
      }, {
        headers: { Authorization: `Bearer ${token}`}
      })
      .then(function(response) {
        // pushes the changes to /courses
        app.$router.push('/courses');
      })
      .catch(function (error) {
        console.log(error.response.data);

        app.errors = error.response.data.errors
      });
    }
  }
}
</script>
