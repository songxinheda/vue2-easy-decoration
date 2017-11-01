<template>
  <div class="decorate">
    <head-bar></head-bar>
    <drag-bar></drag-bar>
    <foot-bar></foot-bar>
  </div>
</template>

<script type="text/ecmascript-6">
  import HeadBar from 'components/headbar/headbar';
  import DragBar from 'components/dragbar/dragbar';
  import FootBar from 'components/footbar/footbar';

  export default {
    data() {
      return {
        msg: 'Welcome to Your Vue.js App',
      };
    },
    components: {
      HeadBar,
      DragBar,
      FootBar,
    },
  };
</script>

<style lang="scss" scoped>
  .decorate {
    width: 100%;
    position: relative;
  }
</style>
