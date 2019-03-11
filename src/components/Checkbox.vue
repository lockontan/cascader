<template>
  <label class="checkbox-wrap">
    <span :class="{checkbox: true, 'checkbox-checked': newValue, 'checkbox-disabled': disabled}">
      <span class="checkbox-icon"></span>
      <input v-model="newValue" :disabled="disabled" class="checkbox-input" type="checkbox">
    </span>
    <slot></slot>
  </label>  
</template>

<script>
  export default {
    props: {
      value: {
        type: Boolean,
        default: false
      },

      disabled: {
        type: Boolean,
        default: false
      }
    },

    watch: {
      value (value) {
        this.newValue = value
      },

      newValue (value) {
        this.$emit('input', value)
      }
    },

    data () {
      return {
        newValue: this.value
      }
    },
    
    methods: {}
  }
</script>

<style scoped>
  .checkbox-wrap {
    cursor: pointer;
    font-size: 12px;
    display: inline-block;
    margin-right: 8px;
  }

  .checkbox {
    position: relative;
    overflow: hidden;
    display: inline-block;
    vertical-align: middle;
    line-height: 1;
  }

  .checkbox-icon {
    width: 14px;
    height: 14px;
    display: inline-block;
    position: relative;
    border: 1px solid #dcdee2;
    border-radius: 2px;
    background: #ffffff;
    transition: border-color .2s ease-in-out, background-color .2s ease-in-out;
  }

  .checkbox-checked .checkbox-icon {
    border-color: #2d8cf0;
    background-color: #2d8cf0;
  }

  .checkbox-disabled .checkbox-icon{
    background: #f3f3f3;
    border-color: #dfe3e7;
  }

  .checkbox-disabled .checkbox-icon::after{
    border-color: #f3f3f3;
  }

  .checkbox-disabled.checkbox-checked .checkbox-icon::after{
    border-color: #cecece;
  }

  .checkbox-icon::after {
    content: '';
    display: table;
    position: absolute;
    border: 2px solid #fff;
    border-left: 0;
    border-top: 0;
    width: 4px;
    height: 8px;
    top: 1px;
    left: 4px;
    transform: rotate(45deg);
  }

  .checkbox-input {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: none;
    cursor: pointer;
  }
</style>