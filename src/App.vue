<template>
  <div id="app">
    <notif-panel>`</notif-panel>
    <app-header :name="fullname"></app-header>
    <highlight-panel></highlight-panel>
    <app-footer :name="fullname"></app-footer>
    <newsletter-panel v-if="showModal" :expiredTime.sync="expiredTime"></newsletter-panel>
  </div>
</template>

<script>
import NotificationPanelVue from "./components/NotificationPanel.vue";
import AppHeaderVue from "./components/AppHeader.vue";
import HighlightPanelVue from "./components/HighlightPanel.vue";
import AppFooterVue from "./components/AppFooter.vue";
import NewsletterPanelVue from "./components/NewsletterPanel.vue";
export default {
  components: {
    "notif-panel": NotificationPanelVue,
    "app-header": AppHeaderVue,
    "highlight-panel": HighlightPanelVue,
    "app-footer": AppFooterVue,
    "newsletter-panel": NewsletterPanelVue
  },
  name: "app",
  mounted() {
    if (localStorage.expiredTime) {
      this.expiredTime = localStorage.expiredTime;
    }
  },
  created() {
    this.updateTime();
    setInterval(this.updateTime, 1000);
  },
  destroyed() {
    clearInterval(this.updateTime);
  },
  data() {
    return {
      fullname: "Dennis Harley",
      expiredTime: "",
      now: ""
    };
  },
  methods: {
    updateTime() {
      let date = new Date();
      this.now = date.getTime();
    }
  },
  computed: {
    showModal() {
      if (!this.expiredTime) {
        return true;
      }
      if (parseInt(this.expiredTime) + 3000 <= this.now) {
        return true;
      }
      return false;
    }
  },
  watch: {
    expiredTime() {
      localStorage.expiredTime = this.expiredTime;
    }
  }
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #e5e5e5;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
}

h1,
h2 {
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
