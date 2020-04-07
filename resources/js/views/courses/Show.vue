<!-- Courses Show -->

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
              <!-- Retrieving Variables from the API -->
              <b-th>{{ course.title }}</b-th>
              <b-th>{{ course.code }}</b-th>
              <b-td>{{ course.description }}</b-td>
              <b-td>{{ course.level }}</b-td>
              <b-td>{{ course.points }}</b-td>
              <b-td><router-link :to="`/courses/edit/${course.id}`">Edit</router-link></b-td> <!-- Route to Courses Edit -->
              <b-td><b-button type="delete" variant="danger" @click="deleteCourse(course.id)">&#10005</b-button></b-td> <!-- Route to Delete "Unfinished" -->
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
      // Declares course & enrolment as arrays
      course: [],
      enrolment: [],
    }
  },
  created(id){
    let app = this;
    let token = localStorage.getItem('token');

    // Axios gets current ID & uses it to display single object
    axios.get(`/api/courses/${app.$route.params.id}`, {
      headers: { Authorization: "Bearer " + token}
    })
    .then(function (response) {
       console.log(response.data);
       app.course = response.data.data;
    })
    .catch(function (error) {
       console.log(error);
    })
  },
  methods: {

    // Delete Method
    deleteCourse(id){
      let app = this;
      let token = localStorage.getItem('token');

      // Gets course based on id
      axios.get('/api/courses/' + id,{
        headers: { Authorization: "Bearer " + token}
      })
      .then(function(response){
        // Gets the number of enrolments connected to the current course
        const enrolmentArray = response.data.data.enrolments

        // If it isn't empty
        if(enrolmentArray.length!==0){
          // Loops until the end of connected enrolments
          for (var i = 0; i < enrolmentArray.length; i++){
            const enrolment = enrolmentArray[i]
            // Deletes Enrolments to do with the current course
            axios.delete("api/enrolments/" + enrolment.id, {
              headers: { Authorization: "Bearer " + token}
            })
          }
          // Deletes the current course
          axios.delete("api/courses/" + id, {
            headers: { Authorization: "Bearer " + token}
          })
          .then(function(response){
            app.$delete(app.items)
            app.items = app.items.filter(data => data.id !== id)
          })
        } else {
          app.deleteCourse(id);
          app.items = app.items.filter(data => data.id !== id)
        }
      })
    }
  }
}
</script>
<style>
</style>
