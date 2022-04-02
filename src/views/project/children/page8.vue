<template>
  <div class="main">
    <!-- 右侧盒子 -->
    <div class="rightmain">
      <div class="rightmainInfo">
        <div class="box1">
          <div class="bottom">
            <div class="img">
              <img src="../../../assets/img/资源 15.png" alt="">
            </div>
            <div class="btm">
              <div class="img">
                <img src="../../../assets/img/7.png" alt="">
              </div>
              <div class="img">
                <img src="../../../assets/img/资源 14.png" alt="">
              </div>
            </div>
          </div>
        </div>
        <div class="box2">
          <span class="title">Milano Design Film Festival</span>
          <span>Project Coordination
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
  width: 30vw;
}

.rightmainInfo .box1 .bottom {
  width: 30vw;
  height: 68h;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
/* 3个图片 */
.rightmainInfo .box1 .bottom .img{
  width: 100%;
  height: 28vh;
  margin-top: 20px;
} 
.rightmainInfo .box1 .bottom .img img {
  width: 100%;
  height: 100%;
}
.rightmainInfo .box1 .bottom .btm {
  display: flex;
}
.rightmainInfo .box1 .bottom .btm .img img {
  width: 100%;
  height: 100%;
}
.rightmainInfo .box1 .bottom .btm .img:first-child {
  width: 30%;
  height: 22vh;
}
.rightmainInfo .box1 .bottom .btm .img:last-child {
  width: 70%;
  height: 22vh;
}

.rightmainInfo .box2 {
  position: absolute;
  top: 5vh;
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
  position: relative;
  margin-top: 4vh;
  font-size: 18pt;
  font-weight: regular;
  font-family: 'Helvetica Neue';
}
</style>