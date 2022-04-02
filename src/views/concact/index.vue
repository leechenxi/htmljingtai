<template>
  <div class="main">
    <!-- 右侧盒子 -->
    <div class="rightmain">
      <div class="box">
       <div class="codeImg">
         <img src="../../assets/img/code.png" alt="">
       </div>
       <div class="email">
         <div class="title">
           <img src="../../assets/img/logo.gif" alt="">
         </div>
         <div class="info">
           <span class="titleInfo">Senses of life with lenses of design</span>
           <span class="emailNum">Email:info@wandersign.com</span>
         </div>
       </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.main {
  width: 95vw;
  height: 100vh;
  background-color: #fbfbfb;
  position: relative;
}
/* 右边内容区域  rightmain */
.rightmain .box {
  position: relative;
  top: -28vh;
  left: 22vw;
  width: 75vw;
  height: 20vh;
}
.rightmain .box .codeImg {
  position: absolute;
  width: 12vw;
  height: 24vh;
  margin-left: 2vw;
  z-index: 30;
}
.rightmain .box .codeImg img {
  width: 100%;
  height: 100%;
}
.rightmain .box .email {
  position: relative;
  left: 18vw;
  top: 0vh;
  width: 60%;
  height: 100%;
}
.rightmain .box .email .title {
  width: 32vw;
  height: 24vh;
  position: relative;
  left: -6vw;
  top: -4vw;
}
.rightmain .box .email .title img {
  width: 100%;
  height: 100%;
}
.rightmain .box .email .info {
  position: absolute;
  top: 10vh;
  left: -1vw;
}
.rightmain .box .email .titleInfo {
  font-size: 35pt;
  font-family: 'Helvetica Neue';
  font-weight: bold;
}
.rightmain .box .email .emailNum {
  margin-top: 2vh;
  font-weight: bold;
  display: block;
  font-size: 35pt;
  font-family: 'Helvetica Neue';
}

</style>