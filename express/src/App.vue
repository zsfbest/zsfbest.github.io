<template>
  <div id="app">
    <h3>快递查询</h3>
    <ExpressInput v-on:translateNumber="getData($event)"></ExpressInput>
    <hr>
    <ExpressResult :result="result"></ExpressResult>
  </div>
</template>

<script>
import ExpressInput from "./components/ExpressInput.vue";
import ExpressResult from "./components/ExpressResult.vue";

export default {
  name: "app",
  data: function() {
    return {
      result: null
    };
  },
  components: {
    ExpressInput,
    ExpressResult
  },
  methods: {
    getData: function(n) {
      // console.log(n);
      this.axios
        .get("https://api.apiopen.top/EmailSearch", {
          params: {
            number: n
          }
        })
        .then(response => {
          // console.log(response.data.result);
          this.result = response.data.result;
        });
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
