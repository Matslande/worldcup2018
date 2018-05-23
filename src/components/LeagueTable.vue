<template>
<div>
<h1>Tabell</h1>
<table>
  <thead>
    <tr>
      <td>Navn</td>
      <th>Poeng</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="item in items" :key="item.id">
      <th>{{ item ['fields']['Item'] }}</th>
      <td>{{ item['fields']['Point'] }}</td>
    </tr>
  </tbody>
</table>
</div>
</template>

<script>
/* eslint-disable */
import axios from 'axios'
export default {
  name: 'LeagueTable',
  data() {
    return {
      items: []
    }
  },
  mounted: function() {
    this.loadItems()
  },
  methods: {
    loadItems: function() {
      // Init variables
      var self = this
      var app_id = 'appaNNBVbxJQnakcx'
      var app_key = 'keyksrPPBVEvcigUa'
      this.items = []
      axios
        .get(
          'https://api.airtable.com/v0/appaNNBVbxJQnakcx/Standings?maxRecords=30&view=Grid%20view',
          {
            headers: { Authorization: 'Bearer ' + app_key }
          }
        )
        .then(function(response) {
          self.items = response.data.records
        })
        .catch(function(error) {
          console.log(error)
        })
    }
  }
}
</script>

<style scoped>
table {
  width: 100%;
  border-top: 1px solid #ccc;
  border-left: 1px solid #ccc;
  border-collapse: collapse;
  margin-bottom: 1em;
}
table th,
table td {
  padding: 0.5em 1em;
  border-bottom: 1px solid #ccc;
  border-right: 1px solid #ccc;
  white-space: pre;
  text-align: left;
}
table thead th,
table tbody td {
  text-align: left;
}
table thead {
  color: white;
  background: #0cf;
}
table thead th {
  padding: 1em;
}
table[data-comparing="active"] tbody th {
  border-bottom: none;
  font-size: 0.75em;
  color: #767676;
  padding-bottom: 0;
}
</style>
