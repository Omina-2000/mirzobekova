<template>
  <div class="Main">
    <div class="NavContent">
      <div class="NavContent-Text">
        <p class="NavContent-Title">Купить авто</p>
        <div class="NavContent-Info">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati quidem sit
          atque debitis blanditiis, natus dicta aut facilis amet id! Nostrum consectetur
          vero labore veniam quo magni perspiciatis! Error, tempora?
        </div>
      </div>
      <div class="NavContent-Img">
        <img src="../assets/car.png" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Main",
  props: {},
};
</script>

<style scoped>
.NavContent {
  display: grid;
  grid-template-columns: 1fr 1fr;
  background: rgb(48, 48, 48);
  color: #f2f2f2;
  font-family: "Castoro", sans-serif;
}
.NavContent-Text {
  padding-top: 50px;
}

.NavContent-Img {
  display: flex;
  justify-content: center;
  align-items: center;
}

.NavContent-Img img {
  width: 100%;
}

.NavContent-Title {
  text-align: center;
  font-size: 1em;
}

.NavContent-Info {
  font-size: 0.8em;
  font-family: "Castoro", sans-serif;
}
</style>
