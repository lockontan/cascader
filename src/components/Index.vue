<template>
  <div class="cascader-wrap" v-click-outside="handleClose" style="width: 120px">
    <div class="cascader-text" @click="handleShow">
      测试
    </div>
    <div class="cascader-drop" v-show="visible">
      <Panel :data="newData" @on-select="select"></Panel>
    </div>
  </div>
</template>

<script>
  import { checked } from './keys'
  import clickoutside from './clickoutside'
  import Panel from './panel'
  export default {
    components: {
      Panel
    },

    props: {
      data: {
        type: Array
      }
    },

    data () {
      return {
        visible: true,
        newData: []
      }
    },

    created () {
      this.newData = this.format(this.data) 
    },

    methods: {
      handleShow () {
        this.visible = true
      },

      handleClose () {
        this.visible = false
      },

      format (arr) {
        return arr.map(item => {
          let obj =  {
            value: item.value,
            label: item.label,
            children: item.children && item.children.length ? this.format(item.children) : []
          }
          obj[checked] = false
          return obj
        })
      },

      select (value) {
        console.log(this.newData)
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