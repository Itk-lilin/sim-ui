<template>
  <div class="h-full w-full" id="drawing"></div>
</template>

<script lang="ts">
interface stateValue {
  datasource?: any;
  loadingComplete?: boolean;
  nodes?: any;
  tracks?: any;
}
import { Graph, Edge as BaseEdge } from "@antv/x6";
import { defineComponent, onMounted, reactive, toRefs } from "vue";
// import nodes11 from "../../public/data/nodes.json";
// import edges from "../../public/data/track.json";
import { getTracks, getNodes } from "@/api/index.ts";


export default defineComponent({
  name: "DrawingBoard",
  setup() {
    //定义线的形状
    class Track extends BaseEdge {}
    Track.config({
      markup: [
        {
          tagName: "path",
          selector: "line",
        },
      ],
      attrs: {
        line: {
          connection: false,
          stroke: "rgba(255, 56, 77, 1)",
          strokeWidth: 0.1,
        },
      },
    });
    Graph.registerEdge("track", Track, false);
    const state: stateValue = reactive({
      datasource: {
        nodes: [],
        edges: [],
      },
      loadingComplete: false,
      nodes: [],
      tracks: [],
    });

    onMounted(async () => {
      //创建画板实例
      const graph = new Graph({
        container: document.getElementById("drawing") as HTMLDivElement,
        width: 40000,
        height: 40000,
        //滚动
        scroller: {
          enabled: true,
          pageVisible: true,
          pageBreak: true,
          pannable: true,
        },
        //网格布局
        grid: {
          size: 10,
          visible: true,
          type: "mesh", // 'dot' | 'fixedDot' | 'mesh'
          args: {
            color: "#333", // 网格线/点颜色
            thickness: 0.1, // 网格线宽度/网格点大小
          },
        },
        // minimap: {
        //   enabled: true,
        // container: minimapContainer,
        // },
        //滚轮缩放
        mousewheel: {
          enabled: true,

          modifiers: ["ctrl", "meta"],
        },
      });
      const resNodes: any = await getNodes();
      state.nodes = JSON.parse(JSON.stringify(resNodes.data.entities));
      state.nodes.map((value: any) => {
        state.datasource.nodes.push({
          shape: "circle",
          id: `${value.key}`, // String，可选，节点的唯一标识
          x: value.x + 10000, // Number，必选，节点位置的 x 值
          y: 30000 + value.y, // Number，必选，节点位置的 y 值
          width: 1, // Number，可选，节点大小的 width 值
          height: 1, // Number，可选，节点大小的 height 值
          markup: [
            {
              tagName: "circle",
              selector: "body",
            },
          ],
          attrs: {
            body: {
              fill: "#fff",
              stroke: "#000",
              strokeWidth: 0.1,
            },
          },
          html(){
            return (`
            <div class="point"><div>
            `)
          }
        });
      });

      const resTracks: any = await getTracks();

      state.tracks = JSON.parse(JSON.stringify(resTracks.data.entities));
      state.tracks.map((value: any) => {
        state.datasource.edges.push({
          source: `${value.start}`,
          target: `${value.end}`,
          shape: "track",
        
        });
      });
      (graph as Graph).fromJSON(state.datasource);
     

     
    
    });
    return {
      ...toRefs(state),
    };
  },
});
</script>

<style lang="less" scoped>

</style>

