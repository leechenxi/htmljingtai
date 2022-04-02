<template>
  <div class="main">
    <!-- 右侧盒子 -->
    <div class="rightmain">
      <div class="rightmainInfo">
        <div class="box1">
          <div class="bottom">
            <div class="img">
              <img src="../../../assets/img/44.png" alt="">
            </div>
            <div class="img">
              <img src="../../../assets/img/22.png" alt="">
            </div>
            <div class="img">
              <img src="../../../assets/img/2.png" alt="">
            </div>
            <div class="img">
              <img src="../../../assets/img/deng.png" alt="">
            </div>
            <div class="img">
              <img src="../../../assets/img/1.png" alt="">
            </div>
            <div class="img">
              <img src="../../../assets/img/33.png" alt="">
            </div>
          </div>
        </div>
        <div class="box2">
          <span class="title">Fuorisalone</span>
          <span>Juror for Mlano Design Award
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
  width: 40vw;
}

.rightmainInfo .box1 .bottom {
  width: 30vw;
  height: 68h;
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
/* 6个图片 */
.rightmainInfo .box1 .bottom .img{
  width: 48%;
  height: 21vh;

} 
.rightmainInfo .box1 .bottom .img img {
  width: 100%;
  height: 100%;
}
.rightmain .box1 .bottom .img:nth-child(3){
  margin: 2vh 0;
}
.rightmain .box1 .bottom .img:nth-child(4){
  margin: 2vh 0;
}
.rightmainInfo .box2 {
  position: absolute;
  top: 0vh;
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
  width: 30vw;
  height: 0.5vh;
  position: absolute;
  left: 0vw;
  top: -2vh;
  background-color: #43ff62;
}
.rightmainInfo .box2 span:last-child {
  font-size: 18pt;
  color: gray;
  font-weight: regular;
  font-family: 'Helvetica Neue';
  position: relative;
}

</style>