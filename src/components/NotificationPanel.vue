<template>
  <div class="background-component">
    <div class="flex-center content" style="width: 50%">
      <div class="flex-center" style="width: 80%; float: left">
        <span class="d-flex" style="justify-content: flex-start">
          By accessing and using this website, you acknowledge that you have read and
          understand our Cookie Policy, Privacy Policy, and our Terms of Service.
        </span>
      </div>
      <div>
        <button class="button-notif">Got it</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.background-component {
  background-color: #e8e9eb;
  width: 100%;
  height: auto;
  padding: 20px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: left;
}
.d-flex {
  display: flex;
}
.flex-center {
  align-items: center;
  justify-content: center;
}
.button-notif {
  padding: 7px 12px;
  background-color: #007bc1;
  color: white;
  border-radius: 7px;
  border: 1px solid #007bc1;
}
.content {
  display: flex;
  flex-direction: row;
}

@media screen and (max-device-width: 480px) {
  .content {
    flex-direction: column;
    align-items: flex-start;
  }
  .background-component {
    padding: 20px 0 10px 0;
  }
  .button-notif {
    margin-top: 15px;
  }
}
@media screen and (max-width: 480px) {
  .content {
    flex-direction: column;
    align-items: flex-start;
  }
  .background-component {
    padding: 20px 0 10px 0;
  }
  .button-notif {
    margin-top: 15px;
  }
}
</style>