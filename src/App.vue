<template>
 <v-app>
  <!-- <AllEmployee/> -->
  <!-- <PaginationComp/> -->
  <nav>
      <NavbarComp />
      <!-- <PaginationComp/> -->
      <router-link to="/"></router-link>
    <router-link to="/create-new-employee"></router-link>
  </nav>
  <router-view/>
 </v-app>
</template>

<script>
import NavbarComp from "./components/NavbarComp.vue";
// import AllEmployee from "./components/AllEmployee.vue";
// import PaginationComp from "./components/PaginationComp.vue";
export default {
  name: "App",
  data() {
    return {};
  },
  components: {
    NavbarComp,
    // AllEmployee,
    // PaginationComp
},
};
</script>

<style></style>
