<template>
  <div id="app" ref="app">
    <div v-if="!onTop && showNotif" class="bumper"></div>
    <notif-panel v-if="showNotif" @close="showNotif = false" :style="styleNotif">`</notif-panel>
    <app-header :name="fullname"></app-header>
    <highlight-panel></highlight-panel>
    <app-footer :name="fullname"></app-footer>
    <newsletter-panel
      v-if="showModal"
      :expiredTime.sync="expiredTime"
      :newsletterToggle.sync="newsletterToggle"
      @close="showModal = false"
    ></newsletter-panel>
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
    window.addEventListener("scroll", this.adjustComponent);
    window.onresize = this.adjustComponent;
  },
  destroyed() {
    window.removeEventListener("scroll", this.adjustComponent);
  },
  data() {
    return {
      fullname: "Dennis Harley",
      expiredTime: "",
      height: 0,
      newsletterToggle: false,
      showModal: false,
      showNotif: true,
      styleNotif: "",
      bodyWidth: 0,
      onTop: true
    };
  },
  methods: {
    getSize() {
      let app = this.$refs.app;
      this.height = app.clientHeight;
      this.bodyWidth = app.clientWidth;
    },
    adjustComponent() {
      //Get app size
      this.getSize();
      
      //Newsletter Panel
      this.checkNewsletter();

      //Notification Panel & Bumper
      this.notificationStyle();
    },
    checkNewsletter() {
      let now = new Date();
      if (
        (!this.expiredTime && window.scrollY > this.height / 3) ||
        this.newsletterToggle ||
        (parseInt(this.expiredTime) + 600000 <= now.getTime() &&
          window.scrollY > this.height / 3)
      ) {
        this.newsletterToggle = true;
        this.showModal = true;
      } else {
        this.showModal = false;
      }
    },
    notificationStyle(){
      if (window.scrollY === 0) {
        console.log("Update style. " + this.bodyWidth)
        this.styleNotif = `position: relative; width: ${this.bodyWidth}px`;
        this.onTop = true;
      } else {
        console.log("Update style." + this.bodyWidth)
        this.styleNotif = `position: fixed; width: ${this.bodyWidth}px`;
        this.onTop = false;
      }
    }
  },
  computed: {},
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
  width: 100%;
}
body {
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}
.bumper{
  width: 50%;
  height: 70px;
}
@media screen and (max-device-width: 480px) {
  .bumper{
    height: 140px;
  }
}
@media screen and (max-width: 480px) {
  .bumper{
    height: 140px;
  }
}
@media screen and (min-width: 1366px) {
  #app{
    max-width: 1366px;
  }
}
</style>
