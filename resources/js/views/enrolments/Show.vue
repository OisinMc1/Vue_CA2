<!-- Enrolment Show -->

<template>
  <b-row align-h="center">
    <b-col cols="12">

      <div>
        <b-table-simple hover small caption-top responsive>
          <colgroup><col><col></colgroup>
          <colgroup><col><col><col></colgroup>
          <colgroup><col><col></colgroup>
          <b-thead head-variant="dark">
            <b-tr>
              <b-th>Date</b-th>
              <b-th>Time</b-th>
              <b-th>Status</b-th>
              <b-th>Course ID</b-th>
              <b-th>Lecturer ID</b-th>
              <b-th colspan="2">Actions</b-th>
            </b-tr>
          </b-thead>
          <b-tbody>
              <b-th>{{ enrolment.date }}</b-th>
              <b-th>{{ enrolment.time }}</b-th>
              <b-td>{{ enrolment.status }}</b-td>
              <b-td>{{ enrolment.course_id }}</b-td>
              <b-td>{{ enrolment.lecturer_id }}</b-td>
              <b-td><router-link :to="`/enrolment/edit/${enrolment.id}`">Edit</router-link></b-td>
              <b-td><b-button type="delete" variant="danger" @click="deleteCourse(enrolment.id)">&#10005</b-button></b-td>
            </b-tr>
          </b-tbody>
          <b-tfoot>
            <b-tr>
              </b-td>
            </b-tr>
          </b-tfoot>
        </b-table-simple>
      </div>

    </b-col>
  </b-row>
</template>
<script>
export default {
  data() {
    return {
      enrolment: []
    }
  },
  created(id){
    let app = this;
    let token = localStorage.getItem('token');
    axios.get(`/api/enrolments/${app.$route.params.id}`, {
      headers: { Authorization: "Bearer " + token}
    })
    .then(function (response) {
       console.log(response.data);
       app.enrolment = response.data.data;
    })
    .catch(function (error) {
       console.log(error);
    })
  },
  methods: {

  }
}
</script>
<style>
</style>
