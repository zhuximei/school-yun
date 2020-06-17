<template>
  <div class="box">
    <!-- 登录框 -->
    <div class="loginBox">
      <el-form :model="logineForm" :rules="loginRules" ref="loginRef" label-width="70px">
        <el-form-item label="用户名" prop="username">
          <el-input v-model="logineForm.username"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input
            v-model="logineForm.password"
            type="password"
            @keyup.enter.native="submitForm('loginRef')"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('loginRef')" class="loginBtn">登陆</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      logineForm: {
        username: "",
        password: ""
      },
      loginRules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" }
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          { min: 6, max: 10, message: "长度在 6 到 10 个字符", trigger: "blur" }
        ]
      }
    };
  },
  methods: {
    // 点击登陆按钮
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.$router.push("/index");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    }
  }
};
</script>
<style scoped>
.box {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ccc;
}
.loginBox {
  width: 500px;
  height: 400px;
  border: 1px solid #000000;
}
.loginBtn {
  width: 100%;
}
</style>
