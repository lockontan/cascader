<template>
  <li class="cascader-item">
    <Checkbox></Checkbox>深圳
  </li>
</template>

<script>
  import Checkbox from './Checkbox'
  export default {
    components: {
      Checkbox
    },
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

  .cascader-item:hover {
    background: #eeeeee
  }
  
  .cascader-item-label {
    margin-left: 8px;
    font-size: 12px;
  }
</style>
