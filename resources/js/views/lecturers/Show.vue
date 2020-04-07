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
              <b-th>Name</b-th>
              <b-th>Address</b-th>
              <b-th>Phone</b-th>
              <b-th>Email</b-th>
              <b-th colspan="2">Actions</b-th>
            </b-tr>
          </b-thead>
          <b-tbody>
              <b-th>{{ lecturer.name }}</b-th>
              <b-th>{{ lecturer.address }}</b-th>
              <b-td>{{ lecturer.phone }}</b-td>
              <b-td>{{ lecturer.email }}</b-td>
              <b-td><router-link :to="`/lecturer/edit/${lecturer.id}`">Edit</router-link></b-td>
              <b-td><b-button type="delete" variant="danger" @click="deleteCourse(lecturer.id)">&#10005</b-button></b-td>
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
      lecturer: []
    }
  },
  created(id){
    let app = this;
    let token = localStorage.getItem('token');
    axios.get(`/api/lecturers/${app.$route.params.id}`, {
      headers: { Authorization: "Bearer " + token}
    })
    .then(function (response) {
       console.log(response.data);
       app.lecturer = response.data.data;
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
