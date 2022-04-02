<template>
  <div>
    <div class="navInfo">
      <span v-for="item in 12" :key="item" >{{name}}</span>
      <!-- <span v-for="item in 12" :key="item">{{$route.name.name || $route.matched[0].name.name}}</span> -->
      <!-- <span v-for="item in 12" :key="item" class="about">about</span> -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavInfo',
  data(){
    return {
      name: ''
    }
  },
  methods: {
  },
  mounted(){
    this.$eventBus.$on('itemName',(val)=>{
      this.name = val
    })
  },
}
</script>

<style scoped>

/* 侧边栏文字 */
.navInfo {
  width: 300vh;
  height: 6vh;
  z-index: 10;
  position: fixed;
  top: 0;
  left: 3vw;
  background: #43ff62;
  transform: rotate(90deg);
  transform-origin: top left;
  font-size: 36pt;
  font-weight: light;
  font-family: 'Helvetica Neue';
  display: flex;
  justify-content: flex-start;
} 
.navInfo span {
  margin: 0px 10px;
}
.navInfo .about {
  font-size: 36pt;
  font-weight: light;
  font-family: 'Helvetica Neue';
  display: flex;
  justify-content: flex-start;
}
</style>