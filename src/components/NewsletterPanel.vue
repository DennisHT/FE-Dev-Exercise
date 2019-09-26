<template>
  <transition name="slide-fade">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <div class="modal-close">
            <slot name="close">
              <span class="exit-icon" @click="$emit('close')">x</span>
            </slot>
          </div>
          <div class="modal-header">
            <slot name="header">
              <span class="modal-header-content">Get latest updates in web technologies</span>
            </slot>
          </div>

          <div class="modal-body">
            <slot name="body">
              <span class="modal-body-content">I write articles related to web technologies, such as design trends, development tools, UI/UX case studies and reviews, and more. Sign up to my newsletter to get them all.</span>
            </slot>
          </div>
          <div class="modal-footer">
              <slot name="footer">
                  <input type="text" class="modal-input-text" placeholder="Email address">
                  <button class="modal-button">Count me in!</button>
              </slot>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {};
</script>
<style scoped>
.modal-mask {
  position: fixed;
  z-index: 9998;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
}

.modal-container {
  width: 500px;
  margin: 0px auto;
  padding: 10px 10px 25px 20px;
  background-color: #007bc1;
  color: white;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  display: flex;
  flex-direction: column;
  text-align: left;
}

.modal-header-content {
  font-weight: bold;
  font-size: 20px;
}

.modal-body {
  margin: 20px 10px 20px 0;
}

.modal-body-content {
    font-size: 13px;
}

.modal-close{
    margin-bottom: 10px;
}

.exit-icon {
  cursor: pointer;
  float: right;
  font-size: 12px;
}

.modal-input-text{
    width: 75%;
    border-radius: 2px;
    border: 1px solid white;
    font-size: 12px;
    padding: 4px 6px;
}

.modal-footer{
    margin-right: 12px;
}

.modal-button{
    font-weight: bold;
    font-size: 12px;
    padding: 4px 8px;
    background-color: #ff8000;
    color: white;
    border: 1px solid #ff8000;
    border-radius: 2px;
}

.slide-fade-enter {
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
</style>