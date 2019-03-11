<template>
  <!-- <div v-click-outside="test" id="11">
    <Checkbox v-model="value">Checkbox</Checkbox>
  </div>   -->
  <div class="cascader-wrap" v-click-outside="handleClose" style="width: 120px">
    <div class="cascader-text" @click="handleShow">
      测试
    </div>
    <div class="cascader-drop" v-show="visible">
      <Panel :data="[{children: []}]"></Panel>
    </div>
  </div>
</template>

<script>
  import clickoutside from './components/clickoutside'
  import Checkbox from './components/Checkbox'
  import Panel from './components/panel'
  export default {
    components: {
      Checkbox,
      Panel
    },

    watch: {
      // value (value) {
      //   console.log(value)
      // }
    },

    data () {
      return {
        // value: true,
        visible: true
      }
    },

    methods: {
      handleShow () {
        this.visible = true
      },

      handleClose () {
        this.visible = false
      }
    },

    directives: {
      'click-outside': clickoutside
    }
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