<template>
  <div id="root"></div>
</template>

<script type="text/ecmascript-6">
  export default {
    data() {
      return {
        decorateData: [],
      }
    },
    created() {
      _getDecorateData();
    },
    methods() {
      _getDecorateData() {
        return 'a';
      }
    },
  }
</script>

<style lang="scss" scoped>

</style>


