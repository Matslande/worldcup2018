<template>
  <div id="app">
    <div class="menu">
      <a href="/">Home</a>
      <a href="#/games">Kamper</a>
      <a href="#/tabell">Tabell</a>
      <a href="#/live">Live</a>
      <a href="#/bonus-poeng">Bonus poeng</a>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}

img {
  max-width: 100%;
  height: auto;
}
.menu {
  display: flex;
  height: 100px;
}

.menu a {
  color: #000000;
  font-size: 1rem;
  margin-right: 10px;
}

ul {
  list-style: none;
  padding-left: 0;
}
li {
  padding: 4px 0;
}
</style>
