<template>
  <div>
    <template>
      <form class="mt-4">
        <h1>Edit Employee</h1>
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
        <router-link to="/"><v-btn class="mr-4 black white--text" @click="update">submit</v-btn></router-link>
      </form>
    </template>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  data() {
    return {
        key:this.$route.params.id,
      formData:{
      name: "",
      designation: "",
      company: "",
      salary: "",
      }
    };
  },
  created(){
    this.getData()
  },
  methods:{
    async getData(){
    let prevData = await axios.get(`http://localhost:3000/Employees/${this.key}`)
    this.formData.name=prevData.data.name,
    this.formData.designation=prevData.data.designation,
    this.formData.company=prevData.data.company,
    this.formData.salary=prevData.data.salary
    },
     update(){
      axios.put(`http://localhost:3000/Employees/${this.key}`,this.formData)
      // console.log(newData);
    },
    
  }
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
v-btn {
  width: 500px;
}
</style>
