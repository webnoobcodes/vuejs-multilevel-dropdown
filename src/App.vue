<template>
  <div id="app">
    <Sidebar />
  </div>
</template>

<script>
  import Sidebar from './components/Sidebar'

  export default {
    components: {
      Sidebar
    }
  };
</script>

<style lang="scss">
  @import url("https://use.fontawesome.com/releases/v5.11.0/css/all.css");
  @import url("https://fonts.googleapis.com/css?family=Play");

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-size: 1rem;
    font-family: "Play", Tahoma;
    background-color: #ccc;
    color: #333;
  }

  #app {
    position: relative;
    min-height: 100vh;
    width: 100%;
  }
</style>
