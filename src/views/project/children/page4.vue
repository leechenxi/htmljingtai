<template>
  <div class="main">
    <!-- 右侧盒子 -->
    <div class="rightmain">
      <div class="rightmainInfo">
        <div class="box1">
          <div class="top">
            <img src="../../../assets/img/资源 39.png" alt="">
          </div>
          <div class="bottom">
            <div class="img">
              <img src="../../../assets//img/000.png" alt="">
            </div>
          </div>
        </div>
        <div class="box2">
          <span class="title">WanDiary Project @ Camplus</span>
          <span>Design Ethnography-Experience Design Experiment of Sound Notes
            <div class="bottomline"></div>
          </span>
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
  width: 70vw;
}
.rightmainInfo .box1{
  height: 100vh;
  width: 32vw;
}
/* top图片 */
.rightmainInfo .box1 .top {
  width: 100%;
  height: 40vh;
  margin-top: 4vh;
}
.rightmainInfo .box1 .top img {
  width: 100%;
  height: 100%;
}
.rightmainInfo .box1 .bottom {
  width: 100%;
  height: 40vh;
  margin-top: 2vh;
  display: flex;
  justify-content: space-between;
}
.rightmainInfo .box1 .bottom .img {
  width: 100%;
  height: 40vh;
}
.rightmainInfo .box1 .bottom .img img {
  width: 100%;
  height: 100%;
}

.rightmainInfo .box2 {
  position: absolute;
  top: 0vh;
  left: 34vw;
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
  width: 20vw;
  height: 0.5vh;
  position: absolute;
  left: 0vw;
  top: 4vh;
  background-color: #43ff62;
}
.rightmainInfo .box2 span:last-child {
  font-size: 18pt;
  font-weight: regular;
  font-family: 'Helvetica Neue';
  margin-top: 4vh;
}
</style>