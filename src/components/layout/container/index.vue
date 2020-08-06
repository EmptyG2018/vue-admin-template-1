<template>
  <el-container class="layout-container" :direction="direction"
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
