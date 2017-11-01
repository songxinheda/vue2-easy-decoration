<template>
  <section>
      <span class="head-market" @click="headOpen">装修市场</span>
      <span class="head-list" v-bind:class="{'head-show': isActive}"></span>
  </section>
</template>

<script type="text/ecmascript6">
  export default {
    data() {
      return{
        isActive: true,
      }
    },
    methods: {
      headOpen() {
        this.isActive = !this.isActive;
      },
    },
  };
</script>

<style lang="scss" scoped>
  .head-market {
    display: inline-block;
    font-family: "PingFangSC-Regular";
    font-size: 14px;
    color: #FFFFFF;
    letter-spacing: 0;
    line-height: 14px;
    height: 14px;
    padding: 0 10px;
    border-left: 1px solid #404040;
    cursor: pointer;
  }

  .head-show {
    -webkit-transform: rotate(180deg);
    -ms-transform: rotate(180deg);
    transform: rotate(180deg);
    -webkit-transition: all .5s;
    transition: all .5s;
  }

  .head-list {
    display: inline-block;
    width: 9px;
    height: 14px;
    background-image: url("../assets/images/header-enter.png");
    background-size: 9px 6px;
    background-position: center center;
    background-repeat: no-repeat;
    vertical-align: top;
    -webkit-transition: all .5s;
    transition: all .5s;
  }
</style>
