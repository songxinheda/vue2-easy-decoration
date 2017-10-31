<template>

</template>

<script type="text/ecmascript-6">
  import modules from 'assets/js/modules.conf';
  import request from '../../api/request';

  export default {
    data() {
      return {
        modules,
      };
    },
    created() {
      request().then((res) => {
        this.dataConf = res.result;
      });
    },
  };
</script>

<style lang="sass" scoped>

</style>


