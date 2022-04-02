<template>
  <div class="main">
    <!-- 右侧盒子 -->
    <div class="rightmain">
      <div class="rightmainInfo">
        <div class="box1">
          <div class="top">
            <img src="../../../assets/img/57.png" alt="">
          </div>
          <div class="bottom">
            <div class="img">
              <img src="../../../assets/img/1111.png" alt="">
            </div>
            <div class="img">
              <img src="../../../assets/img/资源 47.png" alt="">
            </div>
            <div class="img">
              <img src="../../../assets/img/8.png" alt="">
            </div>
            <div class="img">
              <img src="../../../assets/img/资源 30.png" alt="">
            </div>
            <div class="img">
              <img src="../../../assets/img/资源 32.png" alt="">
            </div>
            <div class="img">
              <img src="../../../assets/img/676.png" alt="">
            </div>
          </div>
        </div>
        <div class="box2">
          <span class="title">International Kids Design Week (BeiJing)</span>
          <span>Branding,Chief Planning & Curation
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
.rightmainInfo .box1 .top {
  width: 100%;
  height: 30vh;
}
.rightmainInfo .box1 .top img {
  width: 100%;
  height: 100%;
}
.rightmainInfo .box1 .bottom {
  width: 100%;
  height: 68h;
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
/* 6个图片 */
.rightmainInfo .box1 .bottom .img{
  width: 45%;
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
  top: 2vh;
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
  width: 30vw;
  height: 0.5vh;
  position: absolute;
  left: 0vw;
  top: -3vh;
  background-color: #43ff62;
}
.rightmainInfo .box2 span:last-child {
  font-size: 18pt;
  color: gray;
  font-weight: regular;
  font-family: 'Helvetica Neue';
  display: block;
  margin-top: 4vh;
  position: relative;
}

</style>