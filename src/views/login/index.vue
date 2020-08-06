<template>
  <el-card class="user-card">
    <div class="user-card-main">
      <div class="logo"><i class="icon-logo el-icon-eleme" />Element</div>
      <div class="user-form">
        <el-form :model="user" :rules="userRules" ref="userRef">
          <el-form-item class="form-item" prop="email">
            <el-input
              type="email"
              placeholder="请输入邮箱"
              prefix-icon="el-icon-message"
              v-model="user.email"
            />
          </el-form-item>
          <el-form-item class="form-item-mini" prop="password">
            <el-input
              placeholder="请输入密码"
              prefix-icon="el-icon-lock"
              v-model="user.password"
            />
          </el-form-item>
          <el-form-item class="form-item-mini" prop="long">
            <el-checkbox v-model="user.long">一周有效</el-checkbox>
          </el-form-item>
          <el-button class="login-btn" type="primary">安全登录</el-button>
        </el-form>
      </div>
    </div>
  </el-card>
</template>

<script>
export default {
  data() {
    return {
      user: {
        email: "",
        password: "",
        long: false
      },
      userRules: {
        email: [{ required: true, message: "请输入邮箱", trigger: "blur" }],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }],
        long: [{ required: false }]
      }
    };
  }
};
</script>

<style lang="less" scoped>
@import "./index.less";
</style>
