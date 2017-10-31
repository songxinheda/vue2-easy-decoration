<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script type="text/ecmascript6">
export default {
  name: 'app',
};
</script>

<style lang="scss">
  @import './assets/styles/reset.css';

  html,
  body {
    height: 100%;
  }

  #app {
    display: flex;
    height: 100%;
  }
</style>
