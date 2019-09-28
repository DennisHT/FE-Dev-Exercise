<template>
  <div class="background-component">
    <div class="layer">
      <div class="container">
        <div class="logo">
          <img src="../assets/y-logo-white.png" alt style="width: 50px; height: auto;" />
        </div>

        <div class="hero-shot">
          <div class="hero-shot-title">
            <span>Hello! I'm {{name}}</span>
          </div>
          <div class="hero-shot-subtitle">
            <span>Consult, Design, and Develop Websites</span>
          </div>
          <div class="hero-shot-description">
            <span>
              Have something great in mind? Feel free to contact me.
              I'll help you to make it happen.
            </span>
          </div>
          <div class="hero-shot-button">
            <button class="button-contact">LET'S MAKE CONTACT</button>
          </div>
        </div>
        <div class="bumper"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["name"],
  data() {
    return {};
  }
};
</script>

<style scoped>
.background-component {
  /* background-color: #e8e9eb; */
  background-image: url(../assets/work-desk__dustin-lee.jpg);
  width: 100%;
  height: 400px;
  /* padding: 15px 0; */
}
.layer {
  background-color: rgba(0, 74, 117, 0.7);
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
}
.container {
  padding: 0 10px;
  width: 100%;
}
.logo {
  margin: 10px;
  display: flex;
  width: 100%;
  align-self: flex-start;
  justify-self: flex-start;
}
.hero-shot {
  align-self: center;
  color: white;
  justify-content: center;
}
.hero-shot-title {
  font-size: 24px;
}
.hero-shot-subtitle {
  font-size: 28px;
  margin: 15px 0 0 0;
  font-weight: bold;
}
.hero-shot-description {
  font-size: 13px;
  margin: 15px 0 0 0;
  font-weight: lighter;
}
.hero-shot-button {
  margin: 25px 0 0 0;
}
.button-contact {
  border: 2px solid white;
  border-radius: 4px;
  padding: 9px 18px;
  color: white;
  background-color: transparent;
  font-weight: bold;
  cursor: pointer;
}
.button-contact:hover {
  color: #004a75;
  background-color: white;
}
.bumper {
  height: 70px;
}

@media screen and (max-width: 480px) {
  .hero-shot {
    padding: 0 20px;
  }
}


@media screen and (max-device-width: 480px) {
  .hero-shot {
    padding: 0 20px;
  }
}
</style>