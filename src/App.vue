<template>
  <div id="app">
      <h1>Hello Service!</h1>
  </div>
</template>

<script>
import { MyService, AnotherService } from './bundle'

export default {
  name: 'app',
  mounted: function() {
    MyService.getItems().then((response) => {
      // eslint-disable-next-line
      console.log(response.body)
    })
    AnotherService.sayHello()
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
