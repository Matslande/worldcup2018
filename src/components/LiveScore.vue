<template>
<div>

<h1>Live</h1>
  <ul>
    <li :key="match.score" v-for="match in matches">
      <p>{{match.score}}</p>
    </li>
  </ul>

</div>


</template>

<script>
import axios from 'axios'

export default {
  name: 'LiveScore',
  data() {
    return {
      match: []
    }
  },
  created() {
    fetch(
      'http://livescore-api.com/api-client/scores/live.json?key=DCxesfVulBziL4QX&secret=FLOp5hgv8ggjDwmh9TvB9r6u3FMPKDMp'
    )
      .then(res => res.json())
      .then(data => {
        data.forEach(d => {
          this.match.push(d)
        })
      })
  }
}
</script>