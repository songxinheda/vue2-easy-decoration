<template>
  <header>
    <section>
      <img src="../../assets/images/logo.png" alt="微店" class="head-logo">
      <aside class="head-service">
        <span class="head-helper">帮助中心</span>
        <drop-down></drop-down>
      </aside>
    </section>
  </header>
</template>

<script type="text/ecmascript6">
  import DropDown from '../../base/drop-down';

  export default {
    components: {
      DropDown,
    },
  };
</script>

<style lang="scss" scoped>
  header {
    width: 100%;
    min-width: 1200px;
    height: 80px;
    background-color: #222222;
  }

  .head-logo {
    width: 61px;
    height: 32px;
    margin-top: 24px;
    margin-left: 48px;
  }

  .head-service {
    position: relative;
    float: right;
    margin-right: 30px;
    margin-top: 33px;
  }

  .head-helper {
    display: inline-block;
    font-family: PingFangSC-Regular;
    font-size: 14px;
    color: #FFFFFF;
    letter-spacing: 0;
    line-height: 14px;
    height: 14px;
    padding: 0 10px;
    cursor: pointer;
  }
</style>
