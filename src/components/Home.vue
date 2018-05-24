<template>

  <div class="flex-split">

      <div class="flex-split-left">
           <Games />
      </div>

      <div class="flex-split-right">
        <div class="right-header">
          <h1>LIVE SCORE</h1>
          <Iframe />
        </div>
      </div>

    </div>

</template>

<script>
import Games from '../components/Games.vue'
import Iframe from '../components/Iframe.vue'
/* eslint-disable */

export default {
  name: 'Home',
  components: {
    Games,
    Iframe
  }
}
</script>
<style scoped>
.flex-split-left {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  border-right: 1px solid;
  color: #000000;
  height: auto;
  padding-bottom: 2em;
  padding: 2rem;
  /*this in the flex-item that we want scrollable*/
  overflow: auto;
  -webkit-overflow-scrolling: touch;
  -ms-overflow-style: none;
  height: auto;
}

.flex-split-right {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: start;
  -webkit-justify-content: flex-start;
  -ms-flex-pack: start;
  justify-content: flex-start;
  color: hsl(0, 0%, 14%);
}

.flex-split {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  min-height: 100vh;
}

@media all and (min-width: 60em) {
  .flex-split > div {
    min-width: 50%;
    width: 50%;
  }
  .flex-split {
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -webkit-flex-direction: row;
    -ms-flex-direction: row;
    flex-direction: row;
    height: 100vh;
    overflow: hidden;
  }

  .flex-split > div {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
  }
}
</style>
