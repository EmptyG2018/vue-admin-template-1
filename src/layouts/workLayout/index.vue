<template>
  <layout-window>
    <layout-header></layout-header>
    <layout-view>
      <el-container style="height: 100%;" direction="horizontal">
        <layout-aside></layout-aside>
        <layout-main>
          <layout-history></layout-history>
        </layout-main>
      </el-container>
    </layout-view>
  </layout-window>
</template>

<script>
import {
  window,
  header,
  view,
  aside,
  main,
  history
} from "@/components/layout";
export default {
  components: {
    layoutWindow: window,
    layoutHeader: header,
    layoutView: view,
    layoutAside: aside,
    layoutMain: main,
    layoutHistory: history
  }
};
</script>

<style lang="less" scoped>
@import "./index.less";
</style>
