<template>
  <div class="main">
    <!-- 右侧盒子 -->
    <div class="rightmain">
      <div class="rightmainInfo">
        <div class="box1">
          <div class="top">
            <div class="img">
              <img src="../../../assets/img/资源 6.png" alt="">
            </div>
            <div class="rightbox">
              <div class="img2">
                <img src="../../../assets/img/98.png" alt="">
              </div>
              <div class="img2">
                <img src="../../../assets/img/567.png" alt="">
              </div>
            </div>
        </div>
        </div>
        <div class="box2">
          <span class="title">Hong Kong-Shenzhen Twin-Cities Design Exhibitions
          </span>
          <span>
            Design Thinking Consultant for Higher Education Sector and Uni Curation
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
  width: 40vw;
}

/* 图片 */
.rightmainInfo .box1 .top {
  height: 50vh;
  width: 30vw;
  margin-top: 34px;
  display: flex;
  
}
.rightmainInfo .box1 .top .img img {
  width: 100%;
  height: 100%;
}
.rightmainInfo .box1 .top .img{
  height: 100%;
  width: 48%;
}
.rightmainInfo .box1 .top .rightbox {
  width: 48%;
  height: 100%;
  margin-left: 1vw;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.box1 .top .rightbox .img2 {
  width: 100%;
  height: 48%;
}
.box1 .top .rightbox .img2 img {
  width: 100%;
  height: 100%;
}
.rightmainInfo .box2 {
  position: absolute;
  top: 0vh;
  left: 32vw;
  width: 34vw;
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
  width: 34vw;
  height: 0.5vh;
  position: absolute;
  left: 0vw;
  top: -2vh;
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