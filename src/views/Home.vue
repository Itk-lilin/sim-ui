<template>

  <div class="home">
    <a-layout>
      <a-layout-header class="head"><Head/></a-layout-header>
      <a-layout>
        <a-layout-sider class="toolbar"> <ToolBar/> </a-layout-sider>
        <a-layout>
            <a-layout-content class="drawing-board">
              <DrawingBoard/>
              </a-layout-content>
            <a-layout-sider v-if="isRight" class="right-table" :resize-directions="['left']"><RightTable/> </a-layout-sider>
            <a-layout-footer v-if="!isRight">
               <a-resize-box :directions="['top']">
                 <BottomTable/>
               </a-resize-box>
            </a-layout-footer>
        </a-layout>
      </a-layout>
    </a-layout>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from "vue";
import Head from "./Head.vue";
import DrawingBoard from "./DrawingBoard.vue";
import RightTable from "./RightTable.vue";
import BottomTable from "./BottomTable.vue";

import ToolBar from "./ToolBar.vue";


interface stateValue {
  isRight?:boolean;
}
export default defineComponent({
  name: "Home",
  components: {
    Head,
    DrawingBoard,
    RightTable,
    BottomTable,
    ToolBar,
  },
  setup() {
    const state:stateValue = reactive({
      isRight:true
    })

    return {
      ...toRefs(state)
    }
  },
});
</script>

<style lang="less" scoped>
.home {
  width: 100%;
  height: 100%;
  .head {
    width: 100%;
    height: 49px;
  }
}
:deep(.arco-layout-sider:nth-child(1)) {
  width: 44px !important;
  height: calc(100vh - 49px) !important;
}
:deep(.arco-layout-content) {
  height: calc(100vh - 49px) !important;;
  overflow-x: scroll !important;
  overflow-y: scroll;

}

</style>
