<template>
  <div class="h-full w-full" id="container"></div>
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive, toRefs } from "vue";
import { getTracks, getNodes } from "@/api/index.ts";

export default defineComponent({
  name: "DrawingBoard",
  setup() {
  },
});
</script>

<style lang="less" scoped></style>
