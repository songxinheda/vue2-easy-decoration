<template>

</template>

<script type="text/ecmascript6">
  import modules from 'assets/js/modules.conf.js';
  import request from '../../api/request.js';

  export default {
    data() {
      return {
        modules: modules,
      };
    },
    created() {
      request().then((res) => {
        console.log(res);
      });
    }
  };
</script>

