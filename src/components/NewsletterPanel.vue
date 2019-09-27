<template>
  <transition name="slide-fade">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <div class="modal-close">
            <slot name="close">
              <span class="exit-icon" @click="closeModal">x</span>
            </slot>
          </div>
          <div class="content-container">
            <div class="modal-header">
              <slot name="header">
                <span class="modal-header-content">Get latest updates in web technologies</span>
              </slot>
            </div>

            <div class="modal-body">
              <slot name="body">
                <span
                  class="modal-body-content"
                >I write articles related to web technologies, such as design trends, development tools, UI/UX case studies and reviews, and more. Sign up to my newsletter to get them all.</span>
              </slot>
            </div>
            <div class="modal-footer">
              <slot name="footer">
                <input type="text" class="modal-input-text" placeholder="Email address" />
                <button class="modal-button">Count me in!</button>
              </slot>
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
    props: ['expiredTime', 'newsletterToggle'],
    data() {
        return{
            
        }
    },
    methods: {
        closeModal(){
            let date = new Date();
            this.$emit('update:expiredTime', date.getTime());
            this.$emit('update:newsletterToggle', false);
            this.$emit('close');
        }
    }
};
</script>
<style scoped>
.modal-mask {
  position: fixed;
  z-index: 9998;
  bottom: 0;
  left: 0;
  background-color: transparent;
  opacity: 0.93;
  max-width: 640px;
  width: 56%;
}

.modal-container {
  margin: 0px auto;
  padding: 6px 10px 25px 20px;
  background-color: #007bc1;
  color: white;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  display: flex;
  flex-direction: column;
  text-align: left;
}

.content-container {
  margin-right: 20px;
}

.modal-header-content {
  font-weight: bold;
  font-size: 20px;
}

.modal-body {
  margin: 8px 10px 20px 0;
  font-weight: normal;
}

.modal-body-content {
  font-size: 13px;
}

.modal-close {
  margin-bottom: 10px;
}

.exit-icon {
  cursor: pointer;
  float: right;
  font-size: 12px;
}

.modal-input-text {
  width: 73%;
  border-radius: 2px;
  border: 1px solid white;
  font-size: 12px;
  padding: 4px 6px;
}

.modal-button {
  font-weight: bold;
  font-size: 12px;
  padding: 4px 8px;
  background-color: #ff8000;
  color: white;
  border: 1px solid #ff8000;
  border-radius: 2px;
  cursor: pointer;
}

.slide-fade.enter {
    opacity: 0;
}

.slide-fade-enter-active {
  animation: slide-in 0.5s;
  transition: opacity 0.5s;
  opacity: 1;
}

.slide-fade-leave {
  opacity: 0;
}

.slide-fade-leave-active {
  animation: slide-out 0.5s;
  transition: opacity 0.5s;
  opacity: 0;
}

@keyframes slide-in {
  from {
    transform: translateY(200px);
  }
  to {
    transform: translateY(0px);
  }
}

@keyframes slide-out {
  from {
    transform: translateY(0px);
  }
  to {
    transform: translateY(200px);
  }
}

@media screen and (max-device-width: 480px) {
  .modal-mask {
    bottom: 0;
    right: 0;
    left: auto;
    width: 70%;
  }
  .modal-input-text {
    width: 95%;
    margin-right: 0px;
    margin-bottom: 10px;
  }
  .modal-button {
    width: 100%;
    margin-right: 0px;
  }
}


@media screen and (min-device-width: 481px) and (max-device-width: 804px) {
.modal-input-text {
    width: 50%;
  }
}

@media screen and (max-width: 480px) {
  .modal-mask {
    bottom: 0;
    right: 0;
    left: auto;
    width: 70%;
  }
  .modal-input-text {
    width: 95%;
    margin-right: 0px;
    margin-bottom: 10px;
  }
  .modal-button {
    width: 100%;
    margin-right: 0px;
  }
}
@media screen and (min-width: 481px) and (max-width: 804px) {
.modal-input-text {
    width: 50%;
  }
}
</style>