<template>
  <div id="app">
    <notif-panel>`</notif-panel>
    <app-header></app-header>
    <highlight-panel></highlight-panel>
    This is App.
  </div>
</template>

<script>
import NotificationPanelVue from './components/NotificationPanel.vue'
import AppHeaderVue from './components/AppHeader.vue'
import HighlightPanelVue from './components/HighlightPanel.vue'
export default {
  components: {
    'notif-panel' : NotificationPanelVue,
    'app-header' : AppHeaderVue,
    'highlight-panel' : HighlightPanelVue
  },
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  background-color: #e5e5e5;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
