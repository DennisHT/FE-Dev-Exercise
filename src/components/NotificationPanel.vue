<template>
  <transition name="slide" mode="out-in">
    <div class="background-component">
      <div class="flex-center content" style="width: 50%">
        <div class="flex-center" style="width: 80%; float: left">
          <span>
            By accessing and using this website, you acknowledge that you have read and
            understand our</span> <span class="blue-text">Cookie Policy</span>, <span class="blue-text">Privacy Policy</span>, and our <span class="blue-text">Terms of Service</span>.
          
        </div>
        <div>
          <button class="button-notif" @click="$emit('close')">Got it</button>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {};
</script>

<style scoped>
.background-component {
  background-color: #e8e9eb;
  height: auto;
  padding: 20px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: left;
  position: relative;
  top: 0px;
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
  border-radius: 2px;
  border: 1px solid #007bc1;
  margin-left: 30px;
}
.content {
  display: flex;
  flex-direction: row;
}

.blue-text{
  font-weight: bold;
  color: #4232cf;
  cursor: pointer;
}

.slide.enter {
  opacity: 0;
}

.slide-enter-active {
}

.slide-leave {
  opacity: 0;
  overflow: hidden;
}

.slide-leave-active {
  animation: slide-out 0.1s ease-out forwards;
}

@keyframes slide-out {
  from {
    transform: translateY(0px);
    height: auto;
  }
  to {
    transform: translateY(-100px);
    height: 0;
  }
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
    margin-left: 0px;
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
    margin-left: 0px;
  }
}
</style>