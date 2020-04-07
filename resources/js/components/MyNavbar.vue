<!-- Navbar Component -->

<template>
  <div>
  <!-- Navbar light settings -->
  <b-navbar toggleable="sm" type="light" variant="light">
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
    <!-- Makes nav collapsable -->
    <b-collapse id="nav-collapse" is-nav>
    <!-- Navbar tabs -->
    <b-nav tabs fill>

      <!-- Nav home element -->
      <b-nav-item to="/">Home</b-nav-item>

      <!-- Courses Element with dropdown -->
      <b-nav-item-dropdown text="Courses" left>
        <b-dropdown-item to="/courses">View All</b-dropdown-item> <!-- Links to courses index -->
        <b-dropdown-item to="/courses/create">Create</b-dropdown-item> <!-- Links to courses create -->
      </b-nav-item-dropdown>

      <!-- Enrolment Element with dropdown -->
      <b-nav-item-dropdown text="Enrolment" left>
        <b-dropdown-item to="/enrolments">View All</b-dropdown-item> <!-- Links to enrolment index -->
        <b-dropdown-item to="/enrolments/create">Create</b-dropdown-item> <!-- Links to enrolment create -->
      </b-nav-item-dropdown>

      <!-- Lecturers Element with dropdown -->
      <b-nav-item-dropdown text="Lecturers" left>
        <b-dropdown-item to="/lecturers">View All</b-dropdown-item> <!-- Links to lecturers index -->
        <b-dropdown-item to="/lecturers/create">Create</b-dropdown-item> <!-- Links to lecturers create -->
      </b-nav-item-dropdown>

    </b-nav tabs fill>

    <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-item-dropdown right>
          <!-- Using 'button-content' slot -->
          <template v-slot:button-content>
            <em>User</em>
          </template>
          <!-- View user by id -->
          <router-link :to="`/users/1`">Profile</router-link>
          <b-dropdown-item @click="logout">Log Out</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>
</template>
<script>
export default {
  name: "myNavbar",
  methods: {

  }
};
</script>
<style>
.navbar {
  margin-bottom: 40px;
}
</style>
