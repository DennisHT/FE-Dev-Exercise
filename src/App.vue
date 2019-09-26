<template>
  <div id="app">
    <notif-panel>`</notif-panel>
    <app-header :name="name"></app-header>
    <highlight-panel></highlight-panel>
    <app-footer :name="name"></app-footer>
    <newsletter-panel v-if="showModal" @close="showModal = false"></newsletter-panel>
  </div>
</template>

<script>
import NotificationPanelVue from './components/NotificationPanel.vue'
import AppHeaderVue from './components/AppHeader.vue'
import HighlightPanelVue from './components/HighlightPanel.vue'
import AppFooterVue from './components/AppFooter.vue'
import NewsletterPanelVue from './components/NewsletterPanel.vue'
export default {
  components: {
    'notif-panel' : NotificationPanelVue,
    'app-header' : AppHeaderVue,
    'highlight-panel' : HighlightPanelVue,
    'app-footer' : AppFooterVue,
    'newsletter-panel' : NewsletterPanelVue
  },
  name: 'app',
  data () {
    return {
      name: 'Dennis Harley',
      showModal: true
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
  background-color: #e5e5e5;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
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
