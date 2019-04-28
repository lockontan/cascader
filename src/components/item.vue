<template>
  <li :class="{'cascader-item': true, 'cascader-item-active': active}">
    <Checkbox
      @on-change="change"
      v-model="data[checked]">
    </Checkbox>{{data.label}}
  </li>
</template>

<script>
  import { checked } from './keys'
  import Checkbox from './Checkbox'
  export default {
    components: {
      Checkbox
    },

    props: {
      data: {
        type: Object
      },

      active: {
        type: Boolean,
        default () {
          return false
        }
      }
    },

    data () {
      return {
        checked: checked
      }
    },

    methods: {
      change (value) {
        this.$emit('on-select', value)
      }
    }
  }
</script>

<style scoped>
  .cascader-item {
    padding: 5px 16px;
    color: #515a6e;
    max-width: 100px;
    cursor: pointer;
    font-size: 12px;
  }

  .cascader-item-active {
    background-color: #eeeeee
  }

  .cascader-item:hover {
    background-color: #eeeeee
  }
  
  .cascader-item-label {
    margin-left: 8px;
    font-size: 12px;
  }
</style>
