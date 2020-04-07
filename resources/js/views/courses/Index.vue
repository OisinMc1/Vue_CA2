<!-- Courses Index -->

<template>
  <b-row align-h="center">
    <b-col cols="12">
      <div>
        <!-- Courses Table -->
        <b-table-simple hover small caption-top responsive>
          <colgroup><col><col></colgroup>
          <colgroup><col><col><col></colgroup>
          <colgroup><col><col></colgroup>
          <!-- Bootstrap Vue colorscheme -->
          <b-thead head-variant="dark">
            <b-tr>
              <!-- Table Headers -->
              <b-th>Title</b-th>
              <b-th>Code</b-th>
              <b-th>Description</b-th>
              <b-th>Level</b-th>
              <b-th>Points</b-th>
              <b-th colspan="2">Actions</b-th> <!-- Is colspan 2 to be able to have both actions below it-->
            </b-tr>
          </b-thead>
          <b-tbody>
            <!-- Retrieves items from below -->
            <b-tr v-for="item in items" :key="item.id">
              <!-- Retrieving Variables from the API -->
              <b-th>{{ item.title }}</b-th>
              <b-th>{{ item.code }}</b-th>
              <b-td>{{ item.description }}</b-td>
              <b-td>{{ item.level }}</b-td>
              <b-td>{{ item.points }}</b-td>
              <b-td><router-link :to="`/courses/edit/${item.id}`">Edit</router-link></b-td> <!-- Route to Courses Edit -->
              <b-td><router-link :to="`/courses/${item.id}`">Show</router-link></b-td> <!-- Route to Courses Show -->
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
      // Retrieves items
      items: []
    }
  },
  created(){
    let app = this;
    let token = localStorage.getItem('token');

    // Uses Axios to retrieve courses from the API
    axios.get('/api/courses', {
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
