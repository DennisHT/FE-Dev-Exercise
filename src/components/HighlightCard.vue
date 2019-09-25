<template>
  <div class="background-component">
    <div class="first-row">
      <div class="card-title">{{title}}</div>
      <div class="card-icon">{{icon}}</div>
    </div>
    <div class="card-description">{{description}}</div>
  </div>
</template>

<script>
export default {
  props: ["title", "icon", "description"],
  data() {
    return {
      title: "",
      icon: "",
      description: ""
    };
  }
};
</script>

<style scoped>
.background-component {
  margin: 5px;
  border: 1px solid #b4b4b4ab;
  background-color: #e5e5e5;
  width: 100%;
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
    font-size: 24px;
    color: #818181;
}
.card-icon {
}
.card-description {
  padding: 0px 15px 20px 15px;
  text-align: left;
}
</style>