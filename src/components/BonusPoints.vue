<template>
<div>

  <table>
  <thead>
    <tr>
      <td>Navn</td>
      <th>Vinner</th>
      <th>Toppscorer</th>
      <th>Mål</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="name in names" :key="name.id">
      <th>{{ name['fields']['Name'] }}</th>
      <td>{{ name['fields']['VInner'] }}</td>
      <td>{{ name['fields']['Toppscorer'] }}</td>
      <td>{{ name['fields']['Mål'] }}</td>
    </tr>
  </tbody>
</table>

</div>
</template>

<script>
/* eslint-disable */
import axios from 'axios'
export default {
  name: 'BonusPoints',
  data() {
    return {
      names: []
    }
  },
  mounted: function() {
    this.loadNames()
  },
  methods: {
    loadNames: function() {
      // Init variables
      var self = this
      var app_id = 'appaNNBVbxJQnakcx'
      var app_key = 'keyksrPPBVEvcigUa'
      this.names = []
      axios
        .get(
          'https://api.airtable.com/v0/appaNNBVbxJQnakcx/Bonus%20Poeng?maxRecords=30&view=Grid%20view',
          {
            headers: { Authorization: 'Bearer ' + app_key }
          }
        )
        .then(function(response) {
          self.names = response.data.records
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
