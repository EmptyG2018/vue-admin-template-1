<template>
  <layout-container>
    <layout-header></layout-header>
    <layout-view>
      <layout-aside></layout-aside>
      <layout-main></layout-main>
    </layout-view>
  </layout-container>
</template>

<script>
import { container, header, view, aside, main } from "@/components/layout";
export default {
  components: {
    layoutContainer: container,
    layoutHeader: header,
    layoutView: view,
    layoutAside: aside,
    layoutMain: main
  }
};
</script>

<style lang="less" scoped>
@import "./index.less";
</style>
