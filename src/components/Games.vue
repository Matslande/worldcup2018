<template>
<div>
    <div v-for="game in games" :key="game.id" >
      <div class="games--header">
        <h1> {{ game['fields']['Games'] }}</h1>
        <p> Date: <br> <strong>{{ game['fields']['Date'] }}</strong></p>
        <h1 class="final--result">{{ game['fields']['Ekte Resultat'] }}</h1>
      </div>
<ul class="list--games">

      <li class="list--games__item">

        <img src="https://cdn.sanity.io/images/l3oee2le/production/CNSnpYXCptJyrgWRrTUdYnEG-1716x2289.jpg?fit=crop&crop=focalpoint&w=80&h=80" alt="">
        <h2>{{ game['fields']['Mats'] }}</h2>
        {{ Deltakere['fields']['Hvem hadde rett'] }}

      </li>
      <li class="list--games__item">
        <img src="https://cdn.sanity.io/images/l3oee2le/production/5klx83z34i_oOGGI2GfLPzCMQQjwdG1CiQ4-800x800.png?fit=crop&crop=focalpoint&w=80&h=80" alt="">
        <h2>{{ game['fields']['Erling'] }}</h2>

      </li>
      <li class="list--games__item">
        <img src="https://cdn.sanity.io/images/l3oee2le/production/vxDWFNFTv2ZX5uYyfDfPqEKd-539x717.jpg?fit=crop&crop=focalpoint&w=80&h=80" alt="">
        <h2>{{ game['fields']['Are'] }}</h2>

      </li>
      <li class="list--games__item">
        <img src="https://cdn.sanity.io/images/l3oee2le/production/5klx83z34i_eKXrwB9RajtW4uIx95CKtKpG-1932x1931.jpg?fit=crop&crop=focalpoint&w=80&h=80" alt="">
        <h2>{{ game['fields']['Bjørn'] }}</h2>

      </li>
      <li class="list--games__item">
        <img src="https://cdn.sanity.io/images/l3oee2le/production/9HkCMPOsdMDLzMhF4hJZQJWf-790x1186.jpg?fit=crop&crop=focalpoint&w=80&h=80" alt="">
        <h2>{{ game['fields']['Daniel'] }}</h2>

      </li>
      <li class="list--games__item">
        <img src="https://cdn.sanity.io/images/l3oee2le/production/haP8IHeaToxc5d9fqGVn9LeU-2048x1365.jpg?fit=crop&crop=focalpoint&w=80&h=80" alt="">
        <h2>{{ game['fields']['Anne-Merethe'] }}</h2>

      </li>
</ul>

    </div>


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
.list--games {
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
}
.true {
  background-color: green;
}
.true--text {
  font-size: 0px;
}
.list--games__item {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}
.list--games__item img {
  width: 80px;
  height: 80px;
}
.circle {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: #29cb7e;
  text-align: center;
}
.final--result {
}
.games--header {
  display: flex;
  justify-content: space-between;
  border-top: 2px solid #f8f7f5;
}
</style>
