<template>
  <div class="navbox">
    <div class="tabs">
      <div class="nav" v-for="item in tabs" :key="item.id">
        <div>
          <div
            class="name"
            style="font-size:18pt;"
            :class="{
              nameState: item.children.length != 0,
              click: item.id == isShow,
            }"
            @click="tabsClick(item);routergo(item)"
          >
            {{ item.name }}
          </div>
          <div
            class="children"
            v-if="item.children.length != 0 && isShow == item.id"
          >
            <div class="name" 
            v-for="el,index in item.children" :key="index" 
            :class="{active: index === currentIndex}"
            @click="tabClick(index);childroutergo(el)">
            <div class="before">&nbsp;</div>
              <div class="font">
                {{el.name}}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tabs: [
        { id: 1, path: "/about", name: "About", children: [] },
        {
          id: 2,
          path: "/project",
          name: "Project",
          children: [
            {
              id: 21,
              path: "/project/page1",
              name: "Beijing Desgin Week",
            },
            {
              id: 22,
              path: "/project/page2",
              name: "Hong Kong-Shenzhen Twin Cities Design Exhibitions",
            },
            {
              id: 23,
              path: "/project/page3",
              name: "Carmina Campus",
            },
            {
              id: 24,
              path: "/project/page4",
              name: "WanDiary Project @ Camplus",
            },
            {
              id: 25,
              path: "/project/page5",
              name: "International Kids Design Week(Beijing)",
            },
            {
              id: 26,
              path: "/project/page6",
              name: "Tencent Group",
            },
            {
              id: 27,
              path: "/project/page7",
              name: "Fuorisalone",
            },
            {
              id: 28,
              path: "/project/page8",
              name: "Miano Design Film Festival",
            },
            {
              id: 29,
              path: "/project/page9",
              name: "The Nonno Telling Stories 小姥爷讲故事",
            },
          ],
        },
        { id: 3, path: "/publication", name: "Publication", children: [] },
        { id: 4, path: "/people", name: "People", children: [] },
        { id: 5, path: "/network", name: "Network", children: [] },
        { id: 6, path: "/concact", name: "Contact", children: [] },
      ],
      isShow: null,
      currentIndex: 0,
    };
  },
  mounted(){
    this.routergo()
  },
  methods: {
    // 一级路由点击
    tabsClick(item) {
      if (this.isShow == item.id) {
        this.isShow = null;
      } else {
        this.isShow = item.id;
      }
    },
    // 二级路由点击
    tabClick(index) {
      this.currentIndex = index;
    },
    // 一级路由跳转
    routergo(item) {
      this.item.name = About
      this.$router.push(`${item.path}`);
      this.$eventBus.$emit("itemName", item.name);
      console.log(item.name);
    },
    // 二级路由跳转
    childroutergo(el) {
      this.$router.push(`${el.path}`);
    },
  },
};
</script>

<style lang="less" scoped>
.navbox {
  position: relative;
  left: 6vw;
  top: 9vh;
  width: 14vw;
  height: 35vh;
  z-index: 99;
  cursor: pointer;
  .tabs {
    height: 100vh;
    .nav {
      user-select: none;
      margin: 2vh 0;
      .children {
        .name {
          // margin: 1vh 0;
          font-size: 12pt;
          line-height: 30px;
          color: #999;
          display:flex;
          .before{
            height: -20px;
            min-width: 10px;
            background-color: #43ff62;
            margin-right: 10px;
          }
        }
      }
      .name {
        color: #666;
        font-size: 1rem;
        // height: auto;
      }
      .nameState {
        color: #000;
      }
      .click {
        font-weight: bold;
        &::before {
          // margin-right: 10px;
          width: 10px;
          height: 10px;
          padding: 5px;
          content: " ";
          background-color: #43ff62;
        }
      }
      .active {
        margin: 8px 0;
        .font{
          border-bottom: 0.5vh solid #43ff62;
          margin-top:-1px;
        }
      }
    }
  }
}

// hover
.tabs .nav .name:hover {
  color: #43ff62;
}
.tabs .nav .children .name:hover{
  color: #43ff62;
}
</style>