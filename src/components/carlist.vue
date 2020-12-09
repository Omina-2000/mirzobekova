<template>
  <div class="CarList">
    <div class="CarList-Title">Список машин</div>
    <Carcard
      v-for="car in cars"
      :key="car.id"
      v-bind:name="car.name"
      v-bind:payment="car.payment"
      v-bind:mileage="car.mileage"
      v-bind:year="car.year"
      v-bind:condition="car.condition"
      v-bind:img="car.img"
    />
  </div>
</template>

<script>
import Carcard from "./carcard.vue";

export default {
  name: "CarList",
  props: {},
  data() {
    return {
      cars: [],
    };
  },

  created() {
    this.getAllCars();
  },
  components: {
    Carcard,
  },
  methods: {
    async getAllCars() {
      return await fetch("http://localhost:3000/cars", {
        method: "GET",
      })
        .then((res) => res.json())
        .then((data) => {
          this.cars = data;
        })
        .catch((e) => e);
    },
  },
};
</script>

<style scoped>
.CarList {
  background: rgb(48, 48, 48);
  color: #f2f2f2;
  font-family: "Castoro", sans-serif;
}
</style>
