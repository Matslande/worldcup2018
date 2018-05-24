<template>
<div>

<h1>Live</h1>
  <ul>
    <li :key="match.score" v-for="match in matches">
      <p>{{match.score}}</p>gfdgdf
    </li>
  </ul>
</div>
</template>

<script>
/* eslint-disable */
import axios from 'axios'

export default {
  name: 'LiveScore',
  data() {
    return {
      matches: []
    }
  },

  created() {
    axios
      .get(
        'http://livescore-api.com/api-client/scores/live.json?key=DCxesfVulBziL4QX&secret=FLOp5hgv8ggjDwmh9TvB9r6u3FMPKDMp'
      )
      .then(response => {
        this.matches = response.data
      })
      .catch(error => {
        console.log(error)
      })
  }
}
</script>
