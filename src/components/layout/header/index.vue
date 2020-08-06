<template>
  <el-header
    class="layout-header"
    :height="`${layout.headerHeight}px`"
  ></el-header>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters("app", ["layout"])
  }
};
</script>

<style lang="less" scoped>
@import "./index.less";
</style>
