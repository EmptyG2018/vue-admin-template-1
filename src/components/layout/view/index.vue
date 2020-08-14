<template>
  <el-container class="layout-view" :style="viewStyle" :direction="direction">
    <slot />
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
      let { headerHeight } = this.layout;
      return {
        height: `calc(100% - ${headerHeight}px)`
      };
    }
  }
};
</script>

<style lang="less" scoped>
@import "./index.less";
</style>
