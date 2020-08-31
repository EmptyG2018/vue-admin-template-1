<template>
  <el-container class="layout-window" :direction="direction"
    ><slot
  /></el-container>
</template>

<script>
export default {
  data() {
    return {
      direction: "vertical"
    };
  }
};
</script>

<style lang="less" scoped>
@import "./index.less";
</style>
