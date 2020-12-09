<template>
  <div class="Carcard" @click="setVisible()">
    <div class="Carcard-Img">
      <img v-bind:src="imgName()" alt="" />
    </div>
    <div class="Carcard-Title">{{ name }}</div>
    <div v-bind:class="visClassNamehelp('Help')">
      Нажмите, чтобы посмотреть подробнее...
    </div>
    <div v-bind:class="visClassName('Carcard-Paymen')">Цена: {{ payment }} Р</div>
    <div v-bind:class="visClassName('Carcard-Year')">Год Выпуска: {{ year }}</div>
    <div v-bind:class="visClassName('Carcard-Mileage')">Пробег: {{ mileage }} км</div>
    <div v-bind:class="visClassName('Carcard-Condition')">Состояние: {{ condition }}</div>
    <button v-bind:class="visClassName('BuyButton')">Купить</button>
  </div>
</template>

<script>
export default {
  name: "Carcard",
  data() {
    return {
      isVis: false,
    };
  },
  props: {
    name: String,
    payment: Number,
    mileage: Number,
    year: Number,
    condition: String,
    img: String,
  },
  methods: {
    imgName() {
      return this.img;
    },
    visClassName(cls) {
      return cls + " " + "Visible_" + this.isVis;
    },
    visClassNamehelp(cls) {
      return cls + " " + "Visible-Help_" + this.isVis;
    },
    setVisible() {
      this.isVis = !this.isVis;
    },
  },
};
</script>

<style scoped>
.Carcard {
  display: grid;
  grid-template-areas:
    "img name payment"
    "img  mileage year"
    "img  condition btn";
  margin-bottom: 30px;
  padding: 20px;
  align-items: center;
  border: 1.5px solid white;
}

.Help {
  grid-area: mileage;
}

.BuyButton {
  background: red;
  border-radius: 5px;
  cursor: pointer;
}

.BuyButton {
  grid-area: btn;
}

.Carcard-Img {
  grid-area: img;
  display: flex;
  justify-content: center;
  align-items: center;
}

.Carcard-Img img {
  width: 270px;
  text-align: center;
  border: 4px solid white;
}
.Carcard-Title {
  grid-area: name;
  font-size: 1.3em;
}

.Carcard-Payment {
  grid-area: payment;
}

.Carcard-Year {
  grid-area: year;
}

.Carcard-Mileage {
  grid-area: mileage;
}

.Carcard-Condition {
  grid-area: condition;
}

.Visible_false {
  visibility: hidden;
}

.Visible-Help_true {
  display: none;
}

.Visible-Help_false {
  display: block;
}

@media (max-width: 700px) {
  .Carcard {
    display: block;
    text-align: center;
  }
}
</style>
