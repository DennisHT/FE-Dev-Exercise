<template>
  <div class="background-component">
    <div class="first-row">
      <div class="card-title">{{title}}</div>
      <div class="card-icon"><i :class="icon" class="fa-lg"></i></div>
    </div>
    <div class="card-description">{{description}}</div>
  </div>
</template>

<script>
export default {
  props: ["title", "icon", "description"],
  data() {
    return {
      
    };
  }
};
</script>

<style scoped>
.background-component {
  margin: 5px;
  border: 1px solid #b4b4b4ab;
  background-color: #e5e5e5;
  height: auto;
  /* padding: 15px 0; */
}
.first-row {
  display: flex;
  justify-content: space-between;
  padding: 15px 15px;
}
.card-title {
    font-weight: bold;
    font-size: 1.5rem;
    color: #818181;
}
.card-icon{
  align-items: center;
  display: flex;
  color: #818181;
}
.card-description {
  padding: 0px 15px 20px 15px;
  text-align: left;
  font-size: 1rem;
}



@media screen and (max-width: 480px) {
  .background-component {
    width: 90%;
  }
  .card-description{
      font-size: 0.6rem;
  }
  .card-title{
      font-size: 1.5rem;
  }
}
@media screen and (min-width: 480px) and (max-width: 959px) {
  .background-component {
    width: 45%;
  }
}
@media screen and (min-width: 960px) {
  .background-component {
    width: 30%;
  }
}
@media screen and (max-device-width: 480px) {
  .background-component {
    width: 90%;
  }
  .card-description{
      font-size: 0.6rem;
  }
  .card-title{
      font-size: 1.5rem;
  }
}
@media screen and (min-device-width: 480px) and (max-device-width: 959px) {
  .background-component {
    width: 45%;
  }
}
@media screen and (min-device-width: 960px) {
  .background-component {
    width: 30%;
  }
}
</style>