<template>
  <div class="main">
    <!-- 右侧盒子 -->
    <div class="rightmain">
      <div class="rightmainInfo">
        <div class="box1">
          <div class="title">
            <img src="../../assets/img/logo.gif" alt="">
          </div>
          <div class="infoContent">
            <span class="title2">Senses of life with lenses of design</span>
            <span class="infotitle">A creative lab taking DESIGN as an inte grative appgroach to mutually</br>
            empower perceptions (wander) and interpretations (sign)</span>
            <span class="info">
              The best time of your life may still be ahead of you but it won't just magically show up, 
              you have to create it. It's in your power to create whatever future you want for your life. 
              Even if your best days are truly behind you, you can still have plenty of great days ahead of you if you decide to make it so.
            </span>
          </div>
        </div>
        <div class="box2">
          <div class="bg">
            <span class="title1">WANDER</span>
            <span class="title2">SIGN</span>
            <span class="title3">DESIGN</span>
            <div class="bgline"></div>
          </div>
          <div class="boxInfo">
            <span>Perception</span>
            <span>Interpretation</span>
            <span>Design</span>
          </div>
        </div>
        <div class="box3">
          <div class="info">
            <span>Directions & Approaches</span>
            <span>Cross-Area Design Practice</span>
          </div>
          <div class="imgbox">
            <img src="../../assets/img/map11.png" alt="">
          </div>
        </div>
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
  background-color: #fbfbfb;
  position: relative;
}

/* 右边内容区域  rightmain */
.rightmain {
  position: relative;
  top: -8vh;
  left: 22vw;
  height: 100vh;
  width: 70vw;
}
.rightmainInfo .box1 {
  position: absolute;
  top: 8vh;
  left: -2vw;
  width: 39vw;
  height: 60vh;
  display: flex;
  flex-direction: column;
}
.rightmainInfo .box1 .title{
  margin-left: -56px;
  width: 32vw;
  height: 24vh;
  z-index: 20;
  position: relative;
}
.rightmainInfo .box1 .title img {
  width: 100%;
  height: 100%;
}
.rightmainInfo .box1 .infoContent .title2{
  font-family: 'Helvetica Neue';
  font-size: 35pt;
  font-weight: medium italic;
}
.rightmainInfo .box1 .infoContent{
  margin-top: -38px;
  z-index: 20;
  padding: 5px 10px;
  width: 39vw;
  height: 24vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.rightmainInfo .box1 .infoContent .infotitle{
  margin-top: 4vh;
  color: gray;
  font-size: 30pt;
  font-weight: medium italic;
  font-family: 'Helvetica Neue';
}
.rightmainInfo .box1 .infoContent .info {
  margin-top: 6vh;
  color: #000;
  font-size: 30pt;
  font-weight: medium italic;
  font-family: 'Helvetica Neue';
}
/* box2 */
.rightmainInfo .box2 {
  position: absolute;
  top: 34vh;
  left: 40vw;
  width: 20vw;
  height: 10vh;
}
.rightmainInfo .box2 .bg{
  padding: 0 10px;
  position: relative;
  width: 30vw;
  height: 5vh;
  line-height: 5vh;
  display: flex;
  justify-content: space-between;
}
/* 背景线 */
.rightmainInfo .box2 .bg .bgline{
  position: absolute;
  left:1vw;
  top:2.3vh;
  width: 30vw;
  height: 0.5vh;
  background-color: #43ff62;
}
.rightmainInfo .box2 .bg span {
  z-index:10;
  font-size: 21pt;
}
.rightmainInfo .box2 .boxInfo{
  padding:5px 10px;
  width: 30vw;
  height: 5vh;
  font-size: 20pt;
  display: flex;
  justify-content: space-between
}
.rightmainInfo .box3 {
  position: absolute;
  top: 110vh;
  left: -1vw;
  width: 70vw;
  height: 60vh;
}
.rightmainInfo .box3 .info {
  padding: 4vh 0;
  font-size: 21pt;
  display: flex;
  justify-content: space-around;
}
.rightmainInfo .box3 .imgbox {
  position: absolute;
  top:13vh;
  left: 0vw;
  width: 70vw;
  height: 48vh;
}
.rightmainInfo .box3 .imgbox img {
  width: 100%;
  height: 100%;
}
</style>