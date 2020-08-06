<template>
  <el-container class="layout-view" :style="viewStyle" :direction="direction">
    <el-container class="layout-inner" :style="innerStyle"
      ><slot
    /></el-container>
  </el-container>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      direction: "vertical"
    };
  },
  computed: {
    ...mapGetters("app", ["layout"]),
    viewStyle() {
      let layoutSpace = this.layout.layoutSpace;
      return { padding: `${layoutSpace}px 0 ${layoutSpace}px` };
    },
    innerStyle() {
      let layoutInner = this.layout.layoutInner;
      return { width: `${layoutInner}px` };
    }
  }
};
</script>

<style lang="less" scoped>
@import "./index.less";
</style>
