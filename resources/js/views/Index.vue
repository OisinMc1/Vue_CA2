<template>
  <div>
    <!-- If logged in -->
    <div v-if="loggedIn">

      <!-- Creates a number of tabs with it justified into the centre of the page -->
      <b-tabs content-class="mt-3" justified>

        <!-- First tab: Courses -->
        <b-tab title="Courses" active>
          <div>
            <b-card
              title="Courses"
              img-src="https://images.unsplash.com/photo-1457369804613-52c61a468e7d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2700&q=80"
              img-alt="Image"
              img-top
              tag="article"
              style="max-width: 200rem;"
              class="mb-2"
            >
              <!-- Text & Submit Button -->
              <b-card-text>
                A list of courses that are offered by the college.
              </b-card-text>
              <b-button to="/courses" variant="primary">To Courses</b-button>
            </b-card>
          </div>
        </b-tab>

        <!-- First tab: Enrolments -->
        <b-tab title="Enrolments">
          <div>
            <b-card
              title="Enrolments"
              img-src="https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80"
              img-alt="Image"
              img-top
              tag="article"
              style="max-width: 200rem; img-height: 2px;"
              class="mb-2"
            >
              <!-- Text & Submit Button -->
              <b-card-text>
                A list of enrolments that the college has recorded in its database.
              </b-card-text>
              <b-button to="/enrolments" variant="success">To Enrolments</b-button>
            </b-card>
          </div>
        </b-tab>

        <!-- First tab: Lecturers -->
        <b-tab title="Lecturers">
          <div>
            <b-card
              title="Lecturers"
              img-src="https://images.unsplash.com/photo-1549278663-a18afbd53940?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
              img-alt="Image"
              img-top
              tag="article"
              style="max-width: 200rem;"
              class="mb-2"
            >
              <!-- Text & Submit Button -->
              <b-card-text>
                A list of lecturers that the college is currently employing.
              </b-card-text>
              <b-button to="/lecturers" variant="warning">To Lecturers</b-button>
            </b-card>
          </div>
        </b-tab>
      </b-tabs>
    </div>

    <!-- If not logged in give login form -->
    <b-form v-else @submit="onSubmit" >
      <b-form-group
        id="input-group-1"
        label="Email address:"
        label-for="input-1"
        description="We'll never share your email with anyone else."
      >
      <b-form-input
        id="input-1"
        type="email"
        required
        placeholder="Enter email"
        v-model="form.email"
      >
      </b-form-input>
      </b-form-group>

      <b-form-group
        id="input-group-2"
        label="Password:"
        label-for="input-2"
      >
      <b-form-input
        id="input-2"
        type="password"
        required
        placeholder="Enter password"
        v-model="form.password"
      >
      </b-form-input>
      </b-form-group>

      <b-button type="submit" variant="primary">Submit</b-button>
    </b-form>
  </div>
</template>
<script>
export default {
  name: 'index',
  components: {

  },
  data() {
    return {
      form: {
        email: '',
        password: ''
      },
      loggedIn: false
    }
  },
  created() {

    // If logged in
    if (localStorage.getItem('token')) {
      this.loggedIn = true;
    }
    else {
      this.loggedIn = false;
    }
  },
  methods: {

    onSubmit(evt) {
      evt.preventDefault();

      let app = this;

      axios.post('/api/login', {
        email: app.form.email,
        password: app.form.password
      })
      .then(function(response) {
        localStorage.setItem('token', response.data.token)
        app.loggedIn = true;
      })
      .catch(function(error) {
        console.log(error.response.data);
      });
    }
  }
}
</script>
<style>
</style>
