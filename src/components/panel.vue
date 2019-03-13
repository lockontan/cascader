<template>
  <span>
    <ul class="cascader-panel">
      <Item
        v-for="(item, index) in data" 
        :key="index"
        :data="item"
        @click.native="handleClickItem(item, index)">
      </Item>
    </ul>
    <Panel v-if="clickItemChildData.length" :data="clickItemChildData"></Panel>
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

  watch: {
    data () {
      this.clickItemChildData = []
    }
  },

  data () {
    return {
      clickItemData: {},
      clickItemChildData: []
    }
  },

  created () {},

  methods: {
    handleClickItem (item, index) {
      console.log(item)
      this.clickItemData = item
      this.clickItemChildData = item.children
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


