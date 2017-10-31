<template>
  <div class="decorate">
    <head-bar></head-bar>
    <drag-bar></drag-bar>
  </div>
</template>

<script type="text/ecmascript6">
  import HeadBar from 'components/headbar/headbar';
  import DragBar from 'components/dragbar/dragbar';

  export default {
    data() {
      return {
        msg: 'Welcome to Your Vue.js App',
      };
    },
    components: {
      HeadBar,
      DragBar,
    }
  };
</script>

<style scoped>
</style>


