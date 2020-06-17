<template>
  <div class="box">
    <el-container>
      <!-- 侧边栏 -->
      <el-aside width="200px">
        <!-- logo标志 -->
        <div class="logoTitle">logo标志</div>
        <div class="ueseInfo">
          <div class="userIco"></div>
          <div class="userTxt">
            <p>超级管理员</p>
            <p>部门：管理中心</p>
          </div>
        </div>
        <!-- 导航菜单栏 -->
        <el-menu
          :default-active="$router.path"
          class="el-menu-vertical-demo"
          :collapse="isCollapse"
          router
        >
          <!-- 一级菜单 -->
          <el-submenu :index=" '/'+item.path" v-for="item in itemList" :key="item.id">
            <template slot="title">
              <i :class="iconobj[item.id]"></i>
              <span slot="title">{{item.name}}</span>
            </template>
            <!-- 二级菜单 -->
            <el-menu-item-group v-for="items in item.children" :key="items.id">
              <el-menu-item :index=" '/'+ items.path">{{items.name}}</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-container>
        <el-header>
          <div class="headerTitle">
            <p>用户管理</p>
            <div class="headerRight">
              <span>消息</span>
              <span class="spanTxt">乙丑</span>
              <div class="userImg"></div>
              <i class="el-icon-caret-bottom"></i>
            </div>
          </div>
        </el-header>
        <el-main>
          <div class="tagPage">
            <el-tabs editable >
              <el-tab-pane label="用户管理" name="first">用户管理</el-tab-pane>
            </el-tabs>
          </div>
          <router-view />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isCollapse: false,
      itemList: [
        {
          id: 1,
          name: "组织管理",
          path: "zuzhi",
          children: [
            {
              id: 1 - 1,
              name: "林杰组织",
              path: "linjunjie"
            },
            {
              id: 1 - 2,
              name: "联网组织",
              path: "junjie"
            },
            {
              id: 1 - 3,
              name: "校园组织",
              path: "jie"
            }
          ]
        },
        {
          id: 2,
          name: "系统管理",
          path: "xitong",
          children: [
            {
              id: 2 - 1,
              name: "用户管理",
              path: "xitong"
            }
          ]
        }
      ],
      iconobj: {
        "1": "el-icon-user-solid",
        "2": "el-icon-s-order"
      },
    };
  }
};
</script>

<style scoped>
.el-container {
  height: 100%;
}
.logoTitle {
  height: 60px;
  width: 100%;
  border: 1px solid #000;
  line-height: 60px;
}
.ueseInfo {
  width: 100%;
  height: 80px;
  border: 1px solid #000;
  display: flex;
  align-items: center;
  justify-content: center;
}
.userIco {
  width: 30%;
  height: 80%;
  border: 1px solid #000;
  border-radius: 50%;
}
.userTxt {
  width: 70%;
}
.el-header {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
}
.headerTitle {
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: space-between;
}
.headerRight {
  display: flex;
  align-items: center;
  justify-content: center;
}
.spanTxt {
  margin-left: 20px;
  margin-right: 20px;
}
.userImg {
  width: 40px;
  height: 40px;
  border: 1px solid #000;
  border-radius: 50%;
}
.headerRight .el-icon-caret-bottom {
  margin-top: 20px;
  font-size: 12px;
}
/* .downMenu {
  width: 60px;
  height: 50px;
  border: 1px solid #000;
} */
.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  /* line-height: 160px; */
  padding: 0px;
}
.tagPage {
  width: 100%;
  height: 39px;
  background-color: #fff;
  padding-left: 20px;
}
</style>
<style>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
/* .el-header {
  text-align: left!important;
} */
</style>
