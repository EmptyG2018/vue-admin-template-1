<template>
  <el-header
    class="layout-header"
    :style="headerStyle"
    :height="`${layout.headerHeight}px`"
  >
    <header-logo></header-logo>
    <header-user></header-user>
  </el-header>
</template>

<script>
import logo from "./logo";
import user from "./user";
import { mapGetters } from "vuex";
export default {
  components: {
    headerLogo: logo,
    headerUser: user
  },
  computed: {
    ...mapGetters("app", ["layout"]),
    headerStyle() {
      let { layoutSpace } = this.layout;
      return { padding: `0 ${layoutSpace}px` };
    }
  }
};
</script>

<style lang="less" scoped>
@import "./index.less";
</style>
