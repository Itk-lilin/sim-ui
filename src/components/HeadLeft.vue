<template>
  <div class="head-left flex items-center">
    <a-dropdown class="first-menu" position="bl" @select="chooseMenu">
      <div class="left-edit bg-no-repeat bg-right cursor-pointer">
        <svg
          width="20px"
          height="17px"
          viewBox="0 0 20 17"
          version="1.1"
        >
          <g
            id="页面-1"
            stroke="none"
            stroke-width="1"
            fill="none"
            fill-rule="evenodd"
          >
            <path
              d="M0.969696989,1.81818182 L19.030303,1.81818182 C19.5151515,1.81818182 20,1.45454545 20,0.848484858 C20,0.242424261 19.5151515,0 18.9090909,0 L0.969696989,0 C0.363636392,0 0,0.484848494 0,0.969696989 C0,1.45454548 0.363636364,1.81818182 0.969696989,1.81818182 Z M18.9090909,7.51515153 L0.969696989,7.51515153 C0.484848494,7.51515153 0,7.8787879 0,8.48484849 C0,9.09090909 0.363636364,9.45454545 0.969696989,9.45454545 L19.030303,9.45454545 C19.5151515,9.45454545 20,9.09090909 20,8.48484849 C20,7.8787879 19.5151515,7.51515153 18.9090909,7.51515153 Z M18.9090909,15.1515152 L0.969696989,15.1515152 C0.484848494,15.1515152 0,15.5151515 0,16.1212121 C0,16.7272727 0.363636364,16.969697 0.969696989,16.969697 L19.030303,16.969697 C19.5151515,16.969697 20,16.6060606 20,16 C20,15.3939394 19.5151515,15.1515152 18.9090909,15.1515152 Z"
              id="形状"
              fill="#E0E0E0"
              fill-rule="nonzero"
            ></path>
          </g>
        </svg>
      </div>
      <template #content>
        <a-dsubmenu value="文件" class="second-menu">
          <template #default>文件</template>
          <template #content>
            <a-doption>新建</a-doption>
            <a-doption>载入模型</a-doption>
            <a-doption>保存模型</a-doption>
            <a-doption>另存为</a-doption>
            <a-doption>HefeiMetro-L3.ksm</a-doption>
            <a-doption>HefeiMetro-L3-L5.ksm</a-doption>
            <a-doption>导入</a-doption>
            <a-doption>导出</a-doption>
            <a-doption>补丁(高级)</a-doption>
            <a-doption>显示参数</a-doption>
            <a-doption>退出</a-doption>
          </template>
        </a-dsubmenu>
        <a-dsubmenu value="编辑" class="second-menu">
          <template #default>编辑</template>
          <template #content>
            <a-doption>编辑1</a-doption>
            <a-doption>编辑2</a-doption>
            <a-doption>编辑3</a-doption>
            <a-doption>编辑4</a-doption>
            <a-doption>编辑5</a-doption>
          </template>
        </a-dsubmenu>
        <a-dsubmenu value="显示" class="second-menu">
          <template #default>显示</template>
          <template #content>
            <a-doption>显示1</a-doption>
            <a-doption>显示2</a-doption>
            <a-doption>显示3</a-doption>
            <a-doption>显示4</a-doption>
            <a-doption>显示5</a-doption>
          </template>
        </a-dsubmenu>
        <a-dsubmenu value="工具" class="second-menu">
          <template #default>工具</template>
          <template #content>
            <a-doption>工具1</a-doption>
            <a-doption>工具2</a-doption>
            <a-doption>工具3</a-doption>
            <a-doption>工具4</a-doption>
            <a-doption>工具5</a-doption>
          </template>
        </a-dsubmenu>
        <a-dsubmenu value="选项" class="second-menu">
          <template #default>选项</template>
          <template #content>
            <a-doption>选项1</a-doption>
            <a-doption>选项2</a-doption>
            <a-doption>选项3</a-doption>
            <a-doption>选项4</a-doption>
            <a-doption>选项5</a-doption>
          </template>
        </a-dsubmenu>
        <a-dsubmenu value="调试" class="second-menu">
          <template #default>调试</template>
          <template #content>
            <a-doption>调试1</a-doption>
            <a-doption>调试2</a-doption>
            <a-doption>调试3</a-doption>
            <a-doption>调试4</a-doption>
            <a-doption>调试5</a-doption>
          </template>
        </a-dsubmenu>
        <a-dsubmenu value="帮助" class="second-menu">
          <template #default>帮助</template>
          <template #content>
            <a-doption>帮助1</a-doption>
            <a-doption>帮助2</a-doption>
            <a-doption>帮助3</a-doption>
            <a-doption>帮助4</a-doption>
            <a-doption>帮助5</a-doption>
          </template>
        </a-dsubmenu>
      </template>
    </a-dropdown>
    <div class="left-logo bg-no-repeat bg-auto">
      <img src="../assets/images/logo.png" alt="加载失败" />
    </div>
    <div class="left-title text-white truncate">
      北京地铁仿真测试测试测试测试
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "HeadLeft",
  setup() {
    //选择菜单
    const chooseMenu = (value:any) => {
    };
    return {
      chooseMenu,
    };
  },
});
</script>
<style lang="less" scoped>
.head-left {
  .left-edit {
    width: 20px;
    height: 17px;
    margin: 0 24px;
  }
  .left-logo {
    width: 104px;
    height: 27px;
    // background-image: url("../assets/images/1111.png");
    padding: 0 10px 0 24px;
    border-left: 1px solid #555;
    border-right: 1px solid #555;
  }
  .left-title {
    margin-left: 10px;
    width: 126px;
    height: 21px;
    // display: -webkit-box;
  }
}
</style>
