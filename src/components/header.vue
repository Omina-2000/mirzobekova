<template>
  <div class="Header">
    <div class="Navbar">
      <div class="Logo">
        <img src="../assets/logo.png" alt="" />
      </div>
      <ul class="List">
        <li class="ListItem" @click="setPageMode(0)">Главная</li>
        <li class="ListItem" @click="setPageMode(1)">Каталог</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  props: {
    currentMode: Number,
    setPageMode: Function,
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Castoro&display=swap");

.Navbar {
  display: grid;
  grid-template-columns: 1fr 4fr;
  height: 70px;
  background: rgb(119, 119, 119);
  border-bottom: 3px solid black;
}
.Logo {
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.List {
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.ListItem {
  cursor: pointer;
}

.List .ListItem {
  font-family: "Castoro", sans-serif;
  text-decoration: none;
  color: black;
  text-decoration: none;
  font-weight: bold;
}
.List .ListItem:hover {
  color: white;
}

.Logo img {
  height: 80%;
}
</style>
