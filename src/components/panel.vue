<template>
  <span>
    <ul class="cascader-panel">
      <Item></Item>
      <Item></Item>
      <Item></Item>
      <Item></Item>
      <Item></Item>
    </ul>
    <Panel v-if="data.length" :data="newData"></Panel>
  </span>
</template>

<script>
import Item from './item'
export default {
  name: 'Panel',

  components: {
    Item
  },

  props: {
    data: {
      type: Array,
      default () {
        return []
      }
    }
  },

  created () {
    if (this.data[0]) {
      this.newData = this.data[0].children
      console.log(this.newData)
    }
  }
}
</script>

<style scoped>
  .cascader-panel {
    list-style: none;
    margin: 0;
    padding: 5px 0;
    border-right: 1px solid #eeeeee;
    max-height: 180px;
    overflow: auto;
    display: inline-block;
    vertical-align: top
  }

  .cascader-panel:last-child {
    border-right: none;
  }
</style>


