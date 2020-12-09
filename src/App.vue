<template>
  <div id="app">
    <Header v-bind:currentMode="currentMode" v-bind:setPageMode="setPageMode" />
    <Main v-if="currentMode === 0" v-bind:currentMode="currentMode" />
    <Carlist v-if="currentMode === 1" v-bind:currentMode="currentMode" />
    <Footer />
  </div>
</template>

<script>
import Main from "./components/main.vue";
import Header from "./components/header.vue";
import Carlist from "./components/carlist.vue";
import Footer from "./components/footer.vue";
export default {
  name: "App",
  data() {
    return {
      currentMode: 0,
    };
  },
  components: {
    Main,
    Header,
    Carlist,
    Footer,
  },
  methods: {
    setPageMode(mode) {
      this.currentMode = mode;
    },
  },
};
</script>

<style>
body {
  margin: 0;
  padding: 0;
}
</style>
