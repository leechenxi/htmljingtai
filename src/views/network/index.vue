<template>
  <div class="main">
    <!-- 右侧盒子 -->
    <div class="rightmain">
      <div class="box">
        <img src="../../assets/img/map.png" alt="">
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.main {
  width: 95vw;
  height: 100vh;
  position: relative;
}

/* 右边内容区域  rightmain */
.rightmain {
  position: relative;
  top: -18vh;
  left: 24vw;
  height: 100vh;
  width: 70vw;
}
.rightmain .box {
  position: absolute;
  width: 45vw;
  height: 50vh;
}
.rightmain .box img {
  transform: scale(1.2);
}
</style>