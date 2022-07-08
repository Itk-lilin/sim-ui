<template>
  <div class="h-full right-table">
    <a-tabs type="card" class="r-table">
      <a-tab-pane key="access" title="进路" class="access">
          <TableBottom />  
          <TableBottom />   
      </a-tab-pane>
      <a-tab-pane key="transponder" title="应答器" class="transponder">
        应答器
      </a-tab-pane>
      <a-tab-pane key="chain" title="连锁" class="chain">
        连锁
      </a-tab-pane>
      <a-tab-pane key="signal" title="信号接口" class="signal">
        信号接口
      </a-tab-pane>
      <a-tab-pane key="map" title="地图" class="signal">
        地图
      </a-tab-pane>
      <a-tab-pane key="modal" title="模型" class="signal">
        模型
      </a-tab-pane>

      <a-tab-pane key="timetable" title="Timetable Opt." class="signal">
        Timetable Opt.
      </a-tab-pane>
      <a-tab-pane key="facility" title="基础设施" class="signal">
        基础设施
      </a-tab-pane>
      <a-tab-pane key="chart" title="运行图" class="signal">
        运行图
      </a-tab-pane>
      <a-tab-pane key="moment" title="计划时刻表" class="signal">
        计划时刻表
      </a-tab-pane>
      <a-tab-pane key="type" title="列车类型" class="signal">
        列车类型
      </a-tab-pane>

      <a-tab-pane key="train" title="车辆" class="signal">
        车辆
      </a-tab-pane>
      <a-tab-pane key="station" title="车站" class="signal">
        车站
      </a-tab-pane>
      <template #content>
        <TableBottom />   
      </template>
    </a-tabs>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { IconDoubleRight } from "@arco-design/web-vue/es/icon";
import TableBottom from "../components/TableBottom.vue";
export default defineComponent({
  name: "RightTable",
  components: {
    TableBottom,
    IconDoubleRight,
  },
  setup() {},
});
</script>

<style lang="less" scoped>
.right-table {
  // min-width: 461px;
  background-color: #43434b;
  //去除边框
  :deep(.arco-tabs-tab-closable) {
    border: none;
  }
  :deep(.arco-tabs-content) {
    border: none;
    padding-top: 0;
  }
  :deep(.arco-tabs-nav::before) {
    height: 0;
  }
  :deep(.arco-tabs-nav) {
    border-bottom: 1px solid rgba(0, 0, 0, 1);
    justify-content: start;
  }
  :deep(.arco-tabs-tab-active) {
    background-color: #666;
    color: #ffffff;
  }
  :deep(.arco-tabs-nav-tab-list) {
    height: 36px;
  }

  :deep(.arco-tabs-tab) {
    height: 36px;
    color: #fff;
    font-size: 16px;
  }
  :deep(.arco-tabs-tab:hover) {
    background-color: #666;
  }
  :deep(.arco-tabs-tab:nth-child(13)) {
    border: none;
    font-size: 16px;
  }
  :deep(.arco-tabs-nav-tab) {
    flex: none;
  }
}
</style>
