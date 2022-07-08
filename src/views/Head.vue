<template>
  <a-dropdown
    trigger="contextMenu"
    alignPoint
    :style="{ display: 'block' }"
    class="head-dropdown"
    @select="choseIconText"
  >
    <div class="head w-full flex items-center justify-between">
      <HeadLeft />
      <HeadCenter :isIconText="isIconText" />
      <HeadRight/>
    </div>
    <template #content>
      <a-doption class="icon-text">
        <div class="icon-logo">
          <icon-check v-show="isIconText" />
        </div>
        <span>图标和文本</span>
      </a-doption>
      <a-doption class="only-icon">
        <div class="icon-logo"><icon-check v-show="!isIconText" /></div>
        <span>仅文本</span>
      </a-doption>
    </template>
  </a-dropdown>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from "vue";
import { IconCheck } from "@arco-design/web-vue/es/icon";
import HeadLeft from "@/components/HeadLeft.vue";
import HeadCenter from "@/components/HeadCenter.vue";
import HeadRight from "@/components/HeadRight.vue";


interface stateValue {
  isIconText?: boolean;
}
export default defineComponent({
  name: "Header",
  components: {
    HeadLeft,
    HeadCenter,
    HeadRight,
    IconCheck,
  },
  setup() {
    //定义基础数据
    const state: stateValue = reactive({
      isIconText: true,
    });
    //选择模式
    const choseIconText = (value:any) => {
      console.log(value)
      if (value === "图标和文本") {
        state.isIconText = true;
      } else {
        state.isIconText = false;
      }
    };

    return {
      ...toRefs(state),
      choseIconText,
    };
  },
});
</script>

<style lang="less" scoped>
.head {
  height: 49px;
  background-color: #2e2e33;
}
</style>
