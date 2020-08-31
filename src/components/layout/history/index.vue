<template>
	<div>
  <div class="tags">
    <div class="tags-btns tags-btns-prev">
      <div class="tags-actions">
        <i class="el-icon-arrow-left"></i>
      </div>
      <div class="tags-shadow"></div>
    </div>
    <div class="tags-btns tags-btns-after">
      <div class="tags-shadow"></div>
      <div class="tags-actions">
        <i class="el-icon-arrow-right"></i>
      </div>
    </div>
    <div class="tag-view"></div>
    <el-tag type="info" closable>首页</el-tag>
    <el-tag type="info" closable>首页</el-tag>
    <el-tag closable>首页</el-tag>
    <el-tag type="info" closable>首页</el-tag>
    <el-tag type="info" closable>首页</el-tag>
    <el-tag type="info" closable>首页</el-tag>
    <el-tag type="info" closable>首页</el-tag>
  </div>
	<el-breadcrumb separator-class="el-icon-arrow-right">
  <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
  <el-breadcrumb-item>活动管理</el-breadcrumb-item>
  <el-breadcrumb-item>活动列表</el-breadcrumb-item>
  <el-breadcrumb-item>活动详情</el-breadcrumb-item>
</el-breadcrumb>
</div>
</template>

<style lang="less" scoped>
.tags {
  position: relative;
  height: 40px;
  line-height: 40px;
  background-color: #f0f2f5;
  .tags-btns {
    position: absolute;
    height: 100%;
    top: 0;
    bottom: 0;
    .tags-actions {
      vertical-align: top;
      display: inline-block;
      height: 100%;
      background-color: #fff;
    }
    .tags-shadow {
      vertical-align: top;
      display: inline-block;
      height: 100%;
      width: 20px;
    }
    &.tags-btns-prev {
      left: 0;
      .tags-shadow {
        background: linear-gradient(
          to right,
          rgba(255, 255, 255, 1),
          rgba(255, 255, 255, 0)
        );
        content: "";
      }
    }
    &.tags-btns-after {
      right: 0;
      &::after {
        background: linear-gradient(
          to right,
          rgba(255, 255, 255, 1),
          rgba(255, 255, 255, 0)
        );
        content: "";
      }
    }
  }
}
.el-tag {
  margin-right: 10px;
}
</style>
