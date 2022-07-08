<template>
  <div class="h-full right-table">
    <a-tabs type="card" class="r-table">
      <a-tab-pane key="access" title="进路" class="access">
        <TableRight />
        <TableRight />
      </a-tab-pane>
      <a-tab-pane key="transponder" title="应答器" class="transponder">
        <TableRight
      /></a-tab-pane>
      <a-tab-pane key="chain" title="连锁" class="chain">
        <TableRight />
      </a-tab-pane>
      <a-tab-pane key="signal" title="信号接口" class="signal">
        <TableRight />
      </a-tab-pane>
      <a-tab-pane key="more" class="more">
        vxcvxcv
        <template #title>
          <a-dropdown position="bl" class="table-more" trigger="hover">
            <icon-double-right />
            <template #content>
              <a-doption>地图</a-doption>
              <a-doption>模型</a-doption>
              <a-doption>Timetable Opt.</a-doption>
              <a-doption>基础设施</a-doption>
              <a-doption>运行图</a-doption>
              <a-doption>计划时刻表</a-doption>
              <a-doption>运行表</a-doption>
              <a-doption>列车类型</a-doption>
              <a-doption>车辆</a-doption>
              <a-doption>车站</a-doption>
            </template>
          </a-dropdown>
        </template>
      </a-tab-pane>
    </a-tabs>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { IconDoubleRight } from "@arco-design/web-vue/es/icon";
import TableRight from "../components/TableRight.vue";
export default defineComponent({
  name: "RightTable",
  components: {
    TableRight,
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
  :deep(.arco-tabs-tab:nth-child(5)) {
    border: none;
    font-size: 16px;
  }
  :deep(.arco-tabs-nav-tab) {
    flex: none;
  }
}
</style>
