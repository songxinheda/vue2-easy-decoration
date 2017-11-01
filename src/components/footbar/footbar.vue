<template>
  <footer>
    <section class="foot-operation">
      <span class="foot-preview">客户端预览</span>
      <span class="foot-change">切换模版</span>
      <span class="foot-apply">应用到店铺</span>
    </section>
  </footer>
</template>

<script type="text/ecmascript6">
  export default {
  };
</script>

<style lang="scss" scoped>
$button-ready-color: #FFFFFF;
$button-use-color: #D01126;
$button-radius: 2px;
$buttom-font-size: 14px;

  footer {
    position:absolute;
    bottom:0;
    width: 100%;
    min-width: 1200px;
    height: 72px;
    background-color: #F7F7F7;
  }

  .foot-operation {
    position: relative;
    float: right;
    margin-right: 30px;
    margin-top: 20px;
  }

  .foot-preview,
  .foot-change,
  .foot-apply  {
    display: inline-block;
    border-radius: $button-radius;
    font: "PingFangSC-Regular" $buttom-font-size/32px;
    height: 32px;
    line-height: 32px;
    padding: 0 30px;
    float: left;
    margin-left: 10px;
  }

  .foot-preview,
  .foot-change {
    background: $button-ready-color;
    border: 1px solid #DDDDDD;
    color: #404040;
  }

  .foot-apply {
    background: #D01126;
    color: #FFFFFF;
  }

</style>
