<template>
<div>

  <table>
  <thead>
    <tr>
      <td>Kamper</td>
      <th>Mats</th>
      <th>Erling</th>
      <th>Are</th>
      <th>Bjørn</th>
      <th>Daniel</th>
      <th>Anne-Merethe</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="game in games" :key="game.id">
      <th>{{ game['fields']['Games'] }}</th>
      <td>{{ game['fields']['Mats'] }}</td>
      <td>{{ game['fields']['Erling'] }}</td>
      <td>{{ game['fields']['Are'] }}</td>
      <td>{{ game['fields']['Bjørn'] }}</td>
      <td>{{ game['fields']['Daniel'] }}</td>
      <td>{{ game['fields']['Anne-Merethe'] }}</td>
      <td>{{ game['fields']['Date'] }}</td>
    </tr>
  </tbody>
</table>
        <!-- <ul class="games">
            <li v-for="game in games" :key="game.id">
                <h3>{{ game['fields']['Games'] }}</h3>
                <p>{{ game['fields']['Mats'] }}</p>
                <p>{{ game['fields']['Erling'] }}</p>
                <p>{{ game['fields']['Are'] }}</p>
                <p>{{ game['fields']['Bjørn'] }}</p>
                <p>{{ game['fields']['Daniel'] }}</p>
            </li>
        </ul> -->
</div>
</template>

<script>
/* eslint-disable */
import axios from 'axios'
export default {
  name: 'Games',
  data() {
    return {
      games: []
    }
  },
  mounted: function() {
    this.loadGames()
  },
  methods: {
    loadGames: function() {
      // Init variables
      var self = this
      var app_id = 'appaNNBVbxJQnakcx'
      var app_key = 'keyksrPPBVEvcigUa'
      this.games = []
      axios
        .get(
          'https://api.airtable.com/v0/appaNNBVbxJQnakcx/Kamper?maxRecords=300&view=Grid%20view',
          {
            headers: { Authorization: 'Bearer ' + app_key }
          }
        )
        .then(function(response) {
          self.games = response.data.records
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
