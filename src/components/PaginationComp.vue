<template>
    <div>
        <h3 class="card-header">Vue.js Pagination Tutorial & Example</h3>
        <div class="card-body">
            <div v-for="item in pageOfItems" :key="item.id">{{item.name}}</div>

        </div>
        <v-card
      class="align-center justify-center ma-2 pa-4 mx-auto"
      max-width="550"
      min-height="76"
      outlined
    >
      <h1 class="text-center">Employee Details</h1>
      <v-btn class="text-center" @click="getData">Display Data</v-btn>
    </v-card>
    <v-simple-table>
      <thead>
        <tr>
          <th class="text-left">Id</th>
          <th class="text-left">Name</th>
          <th class="text-left">Designaiton</th>
          <th class="text-left">Company</th>
          <th class="text-left">Salary</th>
          <th class="text-left">Skillset</th>

          <th class="text-left">Edit</th>
          <th class="text-left">Delete</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="emp of allData" :key="emp.id">
          <td>{{ emp.id }}</td>
          <td>{{ emp.name }}</td>
          <td>{{ emp.designation }}</td>
          <td>{{ emp.company }}</td>
           <td>{{ emp.salary }}</td>
          <td>
            <template v-for="skill in emp.skillset">
              {{ skill }}
            </template>
          </td>
          <td><v-btn>Edit</v-btn></td>
          <td><v-btn>Delete</v-btn></td>
        </tr>
      </tbody>
    </v-simple-table>
        <div class="card-footer pb-0 pt-3">
            <jw-pagination :maxPages="2" :pageSize="5" :items="exampleItems" @changePage="onChangePage"></jw-pagination>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
// an example array of items to be paged
const exampleItems = [...Array(10).keys()].map(i => ({ id: (i+1), name: 'Item ' + (i+1) }));
export default {
    data() {
        return {
           exampleItems,
            pageOfItems: [],
            allData:[],
        };
    },
    methods: {
        onChangePage(pageOfItems) {
            // update page of items
            this.pageOfItems = pageOfItems;
        },
       getData() {
      axios.get("http://localhost:3000/Employees").then(data => {
        let fetchedData = data.data;
        this.allData = fetchedData;
      });
    },
    }
};
</script>
