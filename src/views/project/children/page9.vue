<template>
  <div class="main">
    <!-- 右侧盒子 -->
    <div class="rightmain">
      <div class="rightmainInfo">
        <div class="box1">
          <div class="top">
            <div class="img">
              <img src="../../../assets/img/99.png" alt="">
            </div>
            <div class="img">
              <img src="../../../assets/img/999.png" alt="">
            </div>
          </div>
        </div>
        <div class="box2">
          <span class="title">The Nonno Telling Stories 小姥爷讲故事</span>
          <span>New Media Design for Tradition Chinese Project
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
  top: -14vh;
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
  height: 28vh;
  width: 34vw;
  margin-top: 118px;
  display: flex;
  justify-content: space-between;
}
.rightmainInfo .box1 .top .img img {
  width: 100%;
  height: 100%;
}
.rightmainInfo .box1 .top .img:first-child{
  height: 100%;
  width: 44%;
}
.rightmainInfo .box1 .top .img:last-child{
  height: 100%;
  width: 52%;
}

.rightmainInfo .box2 {
  position: absolute;
  top: -24vh;
  left: 36vw;
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
  margin-top: 4vh;
  font-size: 18pt;
  font-weight: regular;
  font-family: 'Helvetica Neue';
  color: gray;
  position: relative;
}
</style>