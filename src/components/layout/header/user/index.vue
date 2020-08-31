<template>
  <div class="header-user">
    <el-tooltip effect="dark" content="全屏" placement="bottom">
      <span class="inline-action preview">
        <i class="el-icon-full-screen"></i>
      </span>
    </el-tooltip>
    <el-dropdown placement="bottom" trigger="click">
      <span class="inline-action language"
        >语言<i class="el-icon-arrow-down el-icon--right"></i
      ></span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item>🇨🇳 简体中文</el-dropdown-item>
        <el-dropdown-item>🇭🇰 繁体中文</el-dropdown-item>
        <el-dropdown-item>🇺🇸 English</el-dropdown-item>
        <el-dropdown-item>🇧🇷 Português</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
    <el-dropdown placement="bottom" trigger="click">
      <span class="inline-action avatar">
        <el-avatar size="small"/><span class="name">张三</span
        ><i class="el-icon-arrow-down el-icon--right"></i
      ></span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item icon="el-icon-user-solid">个人中心</el-dropdown-item>
        <el-dropdown-item icon="el-icon-switch-button" divided
          >退出登录</el-dropdown-item
        >
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>

<style lang="less" scoped>
@import "./index.less";
</style>
