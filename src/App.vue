<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="less">
html,
body,
#app {
  position: relative;
  width: 100%;
  height: 100%;
  background-color: #fff;
  &::before {
    display: table;
    content: "";
  }
}
</style>
