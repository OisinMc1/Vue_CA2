<!-- App.vue -->

<template>
  <div>
    <MyNavbar />
    <b-container>
      <router-view />
    </b-container>
  </div>
</template>

<script>
//Imports navbar component
import MyNavbar from './components/MyNavbar'
export default {
  name: 'app',
  components: {
    //Uses the navbar component in all files
    MyNavbar
  },
  data() {
    return {

    }
  }
}
</script>
<style>
</style>
