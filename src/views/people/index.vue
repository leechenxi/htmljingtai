<template>
    <div class="main">
    <!-- 右侧盒子 -->
    <div class="rightmain">
      <div class="box">
        <div class="photo">
          <img src="../../assets/img/资源 28.png" alt="">
        </div>
        <div class="jieshao">
          <div class="xinxi">
            <span class="name">韩 晗 Dr.Han Han
              <div class="green"></div></span><br>
            <span class="jianjie">Ph.D in Design,Politecnico dimilano,italy <br>Master in Global Fashion 
              Management,<br>The Hong Kong Polytechnic University<br> Assistant Professor,College of
              Arts & Design,Shenzhen University<br>Visiting Lecturer,
              Academy of Arts & Design,Tsinghua University<br>Co-initiator,Internationnal Kids
              Design Week (KDW,China) <br>Distinguished Export,Sino-Eu Innovation Center
              Italy <br>External Expert,UNESCO ICCSD(Italy Branch)
            </span>
            <div class="xueli">
              <span>北京人</span>
              <span>旅居香港八年</span>
              <span>意大利米兰理工大学 设计学博士</span>
              <span>香港理工大学 全球时尚管理 硕士</span>
              <span>深圳大学 美术与设计学院 助理教授 硕士生导师</span>
              <span>清华大学 美术学院 客座讲师</span>
              <span>国际亲子设计节联合发起人</span>
              <span>米兰中欧创新中心 特聘专家</span>
              <span>联合国教科文组织国际创意与可持续发展中新意大利分部 外聘顾问</span>
              <span>米兰设计周Fuorisalone米兰设计奖 评审</span>
            </div>
          </div>
          <div class="member">
            <span class="title">MEMBER:
              <div class="green1"></div>
            </span>
            <div class="memberList">
              <span>钟雅瑄 AMY</span>
              <span>王梓桐 ZITTON</span>
              <span>谭钧心 CINDY</span>
              <span>裴鑫 REYMOND</span>
              <span>黄洋婧</span>
              <span>徐星城 ALEXIA</span>
              <span>蔡品言 ED WIND</span>
              <span>吴悠 WU YOU</span>
              <span>蔡品言 ED WIND</span>
              <span>阮晋安 AUGUST</span>
              <span>AND YOU</span>
            </div>
          </div>
          <div class="friends">
            <span class="title">FRIENDS OF WANDERSIGN:
              <div class="green2"></div>
            </span>
            <div class="friendsList">
              <span>Francesco Zurlo</span>
              <span>Vittorio Sun</span>
              <span>Luca Fois</span>
              <span>Raymond Au</span>
              <span>The Nonno</span>
              <span>Fatina Saikaly</span>
              <span>Shaoning Pang</span>
              <span>Amber Yang</span>
              <span>CiLab</span>
              <span>Tencent</span>
              <span>Kids Design Week</span>
              <span>UNESCO LCCSD(Italy)</span>
              <span>Politecnico di Milano</span>
              <span>Tsinghua University</span>
              <span>Shenzhen University</span>
              <span>The Hong Kong Polytechnic University</span>
              <span>World Design Weeks</span>
              <span>AND YOU</span>
            </div>
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
  position: relative;
}



/* 右边内容区域  rightmain */
.rightmain .box {
  position: relative;
  top: -26vh;
  left: 32vw;
  width: 66vw;
  height: 100vh;
}
.rightmain .box .photo {
  position: absolute;
  top: 2vh;
  width: 20%;
  height: 38%;
  margin-left: -8vw;
}
.rightmain .box .photo img {
  width: 100%;
  height: 100%;
}
.rightmain .box .jieshao {
  position: relative;
  left: 14vw;
  top: 0vh;
  width: 60%;
  height: 100%;
  display: flex;
  flex-direction: column;
  /* justify-content: flex-start; */
}
.rightmain .box .jieshao .xinxi .name {
  font-size: 21pt;
  font-weight: bold;
  margin-left: 0;
  position: relative;
}
/* 绿点 */
.rightmain .box .jieshao .xinxi .green {
  width: 20px;
  height: 20px;
  position: absolute;
  left: -3vw;
  top: 1vh;
  background-color: #43ff62;
}
.rightmain .box .jieshao .xinxi .jianjie {
  line-height: 5vh;
  font-size: 18pt;
  font-weight: light;
  font-family: 'Helvetica Neue';
}
.rightmain .box .jieshao .xinxi .xueli {
  margin-top: 2vh;
  display: flex;
  flex-direction: column;
  font-size: 18pt;
  font-weight: light;
  font-family: 'Helvetica Neue';
}
.rightmain .box .jieshao .xinxi .xueli span {
  margin: 1vh 0;
}
.rightmain .box .jieshao .member {
  margin-top: 2vh;
}
.rightmain .box .jieshao .member .title {
  font-size: 21pt;
  font-weight: bold;
  position: relative;
}
/* 绿点 */
.rightmain .box .jieshao .member .green1 {
  width: 20px;
  height: 20px;
  position: absolute;
  left: -3vw;
  top: 1vh;
  background-color: #43ff62;
}
.rightmain .box .jieshao .member .memberList {
  font-size: 18pt;
  font-weight: thin;
  display: flex;
  flex-wrap: wrap;
}
.rightmain .box .jieshao .member .memberList span {
  display: flex;
  justify-content: space-between;
  margin: 2vh 2vw;
}
/* friends */
.rightmain .box .jieshao .friends {
  margin-top: 2vh;
}
.rightmain .box .jieshao .friends .title {
  font-size: 21pt;
  font-weight: bold;
  position: relative;
}
/* 绿点 */
.rightmain .box .jieshao .friends .green2 {
  width: 20px;
  height: 20px;
  position: absolute;
  left: -3vw;
  top: 1vh;
  background-color: #43ff62;
}
.rightmain .box .jieshao .friends .friendsList {
  font-size: 18pt;
  font-weight: thin;
  display: flex;
  flex-wrap: wrap;
}
.rightmain .box .jieshao .friends .friendsList span {
  display: flex;
  justify-content: space-between;
  margin: 2vh 2vw;
}
</style>