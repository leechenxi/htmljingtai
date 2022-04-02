<template>
  <div class="main">
    <!-- 右侧盒子 -->
    <div class="rightmain">
      <div class="rightmainInfo">
        <div class="box1">
          <div class="bottom">
            <div class="img">
              <img src="../../../assets/img/6.png" alt="">
            </div>
            <div class="img">
              <img src="../../../assets/img/3.png" alt="">
            </div>
            <div class="img">
              <img src="../../../assets/img/4.png" alt="">
            </div>
            <div class="img">
              <img src="../../../assets/img/资源 46.png" alt="">
            </div>
          </div>
        </div>
        <div class="box2">
          <span class="title">Beijing Desgin Week</span>
          <span>Project Planing for Theme Forum
          Exhibition Curation & Coordination for various projects
          <div class="bottomline"></div></span>
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
  position: relative;
}
/* 右边内容区域  rightmain */
.rightmain {
  position: relative;
  top: -28vh;
  left: 22vw;
  height: 100vh;
  width: 60vw;
}
.rightmainInfo .box1{
  width: 30vw;
}
.rightmainInfo .box1 .bottom {
  position: absolute;
  top: 0vh;
  left: 0;
  width: 30vw;
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.rightmainInfo .box1 .bottom .img img {
  width: 100%;
  height: 100%
}
/* 4个图片 */
.rightmainInfo .box1 .bottom .img:nth-child(1){
  width: 30%;
  height: 24vh;
  margin-bottom: 1vh;
} 
.rightmainInfo .box1 .bottom .img:nth-child(3){
  width: 30%;
  height: 24vh;
} 
.rightmainInfo .box1 .bottom .img:nth-child(2){
  width: 65%;
  height: 24vh;
  margin-bottom: 1vh;
} 
.rightmainInfo .box1 .bottom .img:nth-child(4){
  width: 65%;
  height: 24vh;
} 
.rightmainInfo .box2 {
  position: absolute;
  top: 3vh;
  left: 32vw;
  width: 30vw;
  height: 10vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.rightmainInfo .box2 .title {
  font-size: 21pt;
  font-weight: bold;
  font-family: 'Helvetica Neue';
}
.rightmainInfo .box2 .bottomline {
  width: 18vw;
  height: 0.5vh;
  position: absolute;
  left: 0vw;
  top: -3vh;
  background-color: #43ff62;
}
.rightmainInfo .box2 span:last-child {
  margin-top: 4vh;
  font-size: 18pt;
  font-weight: regular;
  font-family: 'Helvetica Neue';
  color: gray;
  position: relative;
}




</style>