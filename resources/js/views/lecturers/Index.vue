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
          <b-tr v-for="item in items" :key="item.id">
            <b-th>{{ item.name }}</b-th>
            <b-th>{{ item.address }}</b-th>
            <b-td>{{ item.phone }}</b-td>
            <b-td>{{ item.email }}</b-td>
            <b-td><router-link :to="`/lecturers/edit/${item.id}`">Edit</router-link></b-td>
            <b-td><router-link :to="`/lecturers/${item.id}`">Show</router-link></b-td>
          </b-tr>
        </b-tbody>
        <b-tfoot>
          <b-tr>
            <b-td colspan="7" variant="secondary" class="text-right">
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
      items: []
    }
  },
  created(){
    let app = this;
    let token = localStorage.getItem('token');
    axios.get('/api/lecturers', {
      headers: { Authorization: "Bearer " + token}
    })
    .then(function (response) {
       console.log(response.data);
       app.items = response.data.data;
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
