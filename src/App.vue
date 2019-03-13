<template>
  <Cascader :data="data"></Cascader>
</template>

<script>
  import Cascader from './components/Index'
  import data from './data'
  export default {
    components: {
      Cascader
    },

    data () {
      return {
        data: data
      }
    },

    created () {},

    methods: {}
  }
</script>

<style scoped>
  .cascader-wrap {
    display: inline-block;
    position: relative;
  }

  .cascader-text {
    height: 30px;
    line-height: 30px;
    border: 1px solid #dddee1;
    border-radius: 4px;
    padding: 0 10px;
    cursor: pointer;
    font-size: 12px
  }

  .cascader-drop {
    position: absolute;
    top: 38px;
    left: 0;
    white-space: nowrap;
    box-shadow: 0 1px 6px rgba(0,0,0,.2);
    border-radius: 4px;
  }
</style>