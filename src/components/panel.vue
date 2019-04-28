<template>
  <span>
    <ul class="cascader-panel">
      <Item
        v-for="(item, index) in data" 
        :key="item.value"
        :data="item"
        :active="activeIndex === index"
        @on-select="selectItem($event, item, index)"
        @click.native.stop.prevent="handleClickItem(item, index)">
      </Item>
    </ul>
    <Panel v-if="clickItemChildren.length" @on-select="selectItemChildren" :data="clickItemChildren"></Panel>
  </span>
</template>

<script>
import { checked } from './keys'
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
    data (value) {
      this.clickItemChildren = []
    }
  },

  data () {
    return {
      clickItem: {},
      clickItemChildren: [],
      activeIndex: null
    }
  },

  created () {},

  methods: {
    handleClickItem (item, index) {
      this.clickItemChildren = item.children
      this.clickItem = item
      this.activeIndex = index
    },

    selectItem (value, item, index) {
      this.clickItem = item
      this.clickItemChildren = item.children
      this.setChildrenChecked(item.children, value)
      this.activeIndex = index
      this.$emit('on-select')
    },

    selectItemChildren (value) {
      if (this.clickItem.children.some(item => item[checked])) {
        this.clickItem[checked] = true
      } else {
        this.clickItem[checked] = false
      }
      this.$emit('on-select')
    },

    setChildrenChecked (arr, value) {
      arr.forEach(item => {
        item[checked] = value
        if (item.children.length) {
          this.setChildrenChecked1(item.children, value)
        }
      })
    },

    setChildrenChecked1 (arr, value) {
      return arr.map(item => {
        item[checked] = value
        item.children = item.children && item.children.length ? this.setChildrenChecked(item.children, value) : []
        return item
      })
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


