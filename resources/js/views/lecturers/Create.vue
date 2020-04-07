<template>
  <b-row>
    <b-col cols="8">

      <b-card title="Add Lecturer" tag="article">

      <b-form @submit="onSubmit">
        <b-form-group
          id="input-group-1"
          label="Name:"
          label-for="input-1"
        >
          <b-form-input
            id="input-1"
            v-model="lecturer.name"
            type="text"
            required
            placeholder="Enter name"
          ></b-form-input>
        </b-form-group>

        <b-form-group
          id="input-group-2"
          label="Address:"
          label-for="input-2"
        >
          <b-form-input
            id="input-2"
            v-model="lecturer.address"
            type="text"
            required
            placeholder="Enter address"
          ></b-form-input>
        </b-form-group>

        <b-form-group
          id="input-group-3"
          label="Phone Number:"
          label-for="input-3"
        >
          <b-form-input
            id="input-3"
            v-model="lecturer.phone"
            type="number"
            required
            placeholder="Enter phone number"
          ></b-form-input>
        </b-form-group>

        <b-form-group
          id="input-group-4"
          label="Email:"
          label-for="input-4"
        >
          <b-form-input
            id="input-4"
            v-model="lecturer.email"
            type="email"
            required
            placeholder="Enter email"
          ></b-form-input>
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
      lecturer: {
        name: '',
        address: '',
        phone: '',
        email: ''
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
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault()

      let app = this;
      let token = localStorage.getItem('token');

      axios.post('/api/lecturers', {
        name: app.lecturer.name,
        address: app.lecturer.address,
        phone: app.lecturer.phone,
        email: app.lecturer.email
      },
      {
        headers: { Authorization: `Bearer ${token}`}
      })
      .then(function(response) {
        app.$router.push('/lecturers');
      })
      .catch(function (error) {
        console.log(error.response.data);

      });
    }
  }
}
</script>
