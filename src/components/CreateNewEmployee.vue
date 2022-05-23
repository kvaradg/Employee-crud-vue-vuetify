<template>
  <div>
    <template>
      <form class="mt-4">
        <h1>Create New Employee</h1>
        <v-text-field
          v-model="formData.name"
          label="Name"
          required
        ></v-text-field>
        <v-text-field
          v-model="formData.designation"
          label="Designation"
          required
        ></v-text-field>
        <v-text-field
          v-model="formData.company"
          label="Company"
          required
        ></v-text-field>
        <v-text-field
          v-model="formData.salary"
          label="Salary"
          required
        ></v-text-field>

        <router-link to="/"><v-btn  class="mr-4 black white--text" @click="submitForm">submit</v-btn
        ></router-link>
      </form>
    </template>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "CreateNewEmployee",
  data() {
    return {
      formData: {
        name:"",
        designation:"",
        company:"",
        salary:"",
      },
    };
  },
  methods: {
    submitForm() {
      axios
        .post("http://localhost:3000/Employees", this.formData)
        .then(response => {console.log(response.data)}).catch(error => console.log(error))
    },
  },
};
</script>

<style scoped>
div {
  display: flex;
  align-items: center;
  justify-content: center;
}
form {
  width: 500px;
}
</style>
