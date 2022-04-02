<template>
  <div class="main">
    <!-- 右侧盒子 -->
    <div class="rightmain">
      <div class="rightmainInfo">
        <div class="box1">
          <div class="bottom">
            <div class="img">
              <img src="../../../assets/img/资源 40.png" alt="">
            </div>
            <div class="img">
              <img src="../../../assets/img/资源 41.png" alt="">
            </div>
          </div>
        </div>
        <div class="box2">
          <span class="title">Carmina Campus</span>
          <span>Special Consultant
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
  top: -30vh;
  left: 22vw;
  height: 100vh;
  width: 70vw;
}
.rightmainInfo .box1{
  height: 100vh;
  width: 30vw; 
}

.rightmainInfo .box1 .bottom {
  width: 24vw;
  height: 68vh;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
/* 2个图片 */
.rightmainInfo .box1 .bottom .img{
  width: 100%;
  height: 44vh;
  margin-top: 20px;
} 
.rightmainInfo .box1 .bottom .img img {
  width: 100%;
  height: 100%;
}

.rightmainInfo .box2 {
  position: absolute;
  top: 3vh;
  left: 28vw;
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
  width: 12vw;
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
  position: relative;
}
</style>


