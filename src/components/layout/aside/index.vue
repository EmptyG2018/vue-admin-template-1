<template>
  <el-aside
    class="layout-aside"
    :style="asideStyle"
    :width="`${layout.asideWidth}px`"
  >
    <el-menu router>
      <el-menu-item-group title="分组一">
        <el-menu-item index="/dashboard">
          <i class="el-icon-menu"></i>
          <span slot="title">首页</span>
        </el-menu-item>
      </el-menu-item-group>
    </el-menu>
  </el-aside>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters("app", ["layout"]),
    asideStyle() {
      let layoutSpace = this.layout.layoutSpace;
      return { marginRight: `${layoutSpace}px` };
    }
  }
};
</script>

<style lang="less" scoped>
@import "./index.less";
</style>
