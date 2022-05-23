<template>
  <div>
    <v-card
      class="align-center justify-center ma-2 pa-4 mx-auto"
      max-width="550"
      min-height="76"
      outlined
    >
      <h1 class="text-center">Employee Details</h1>
      <!-- <v-btn class="text-center" @click="getData">Display Data</v-btn> -->
    </v-card>
    <v-layout>
      <v-btn class="ma-4" @click="sortA()">
        <!-- <v-icon></v-icon> -->
        <span>up</span>
      </v-btn>
      <v-btn class="ma-4" @click="sortB()">
        <!-- <v-icon>mdi-import_export</v-icon> -->
        <span>down</span>
      </v-btn>
    </v-layout>
    <v-simple-table>
      <thead>
        <tr>
          <th class="text-left">Name</th>
          <th class="text-left">Designaiton</th>
          <th class="text-left">Company</th>
          <th class="text-left">Salary</th>
          <!-- <th class="text-left">Skillset</th> -->

          <th class="text-left">
            <v-icon>mdi-edit</v-icon>
            <span>Edit</span>
          </th>
          <th class="text-left">
            <v-icon>mdi-delete</v-icon>
            <span>Delete</span>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="emp of paginatedData" :key="emp.id">
          <td>{{ emp.name }}</td>
          <td>{{ emp.designation }}</td>
          <td>{{ emp.company }}</td>
          <td>{{ emp.salary }}</td>
          <!-- <td>
            <template v-for="skill in emp.skillset">
              {{ skill }}
            </template>
          </td> -->
          <td>
            <v-btn @click="edit(emp.id)">Edit</v-btn>
          </td>
          <td>
            <router-link to="/"
              ><v-btn @click="remove(emp.id)">Delete</v-btn></router-link
            >
          </td>
        </tr>
      </tbody>
    </v-simple-table>
    <hr />
    <template>
      <div class="text-center d-flex align-center">
        <v-select
          label="Select rows"
          type="number"
          v-model="rows"
          :items="items"
        ></v-select>

        <v-pagination
          :length="Math.ceil(allData.length / rows)"
          circle
          dark
          :value="currentPage"
          @next="pageNext"
          @previous="prevPage"
          @input="goToPage"
        >
        </v-pagination>
      </div>
    </template>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "AllEmployee",
  components: {},
  data() {
    return {
      allData: [],
      rows: 5,
      items: [5, 10, 15],
      currentPage: 1,
      paginatedData: [],
    };
  },
  watch: {
    rows() {
      this.currentPage = 1;
      this.setTableSize();
    },
  },
  created() {
    this.getData();
    setTimeout(() => {
      this.setTableSize();
    }, 1000);
    console.log("created");
  },
  methods: {
    getData() {
      axios.get("http://localhost:3000/Employees").then(data => {
        let fetchedData = data.data;
        this.allData = fetchedData;
        console.log(this.allData);
      });
    },
    remove(num) {
      axios.delete(`http://localhost:3000/Employees/${num}`);
      // this.getData();
    },
    edit(num) {
      this.$router.push(`/edit-employee/${num}`);
    },

    //sort by salary
    async sortA() {
      this.allData = await (
        await axios.get("http://localhost:3000/Employees")
      ).data;
      this.paginatedData = this.paginatedData.sort((a, b) => {
        return a.salary - b.salary;
      });
    },
    async sortB() {
      this.allData = await (
        await axios.get("http://localhost:3000/Employees")
      ).data;
      this.paginatedData = this.paginatedData.sort((a, b) => {
        return b.salary - a.salary;
      });
    },

    //pagination
    setTableSize: function () {
      let start = this.currentPage * this.rows - this.rows;
      let end = this.currentPage * this.rows;
      this.paginatedData = this.allData.slice(start, end);
      console.log(this.paginatedData);
    },
    pageNext: function () {
      console.log("Go to next page");
      this.setTableSize();
    },
    prevPage: function () {
      console.log("Go to previous page");
      this.setTableSize();
    },
    goToPage: function (n) {
      console.log("Go to page number", n);
      this.currentPage = n;
      this.setTableSize();
    },
  },
};
</script>

<style></style>
