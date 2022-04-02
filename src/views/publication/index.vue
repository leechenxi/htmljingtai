<template>
  <div class="main">
    <!-- 右侧盒子 -->
    <div class="rightmain">
      <div class="box">
        <div class="bookbox">
          <div class="book">
            <img src="../../assets/img/资源 21.png" alt="">
          </div>
          <div class="bookInfo">
            <span>New Approach to Look into Strategic Design for Luxury Brands</span>
            <br>
            <span class="info">From pedagogy of multiliterracies to design for brand consumer conmmunication</span>
            <br>
            <div class="writer">
              Han Han; Francesco Zurlo
              <div class="line"></div>
            </div>
          </div>
        </div>
        <div class="bookbox">
          <div class="book">
            <img src="../../assets/img/资源 22.png" alt="">
          </div>
          <div class="bookInfo">
            <span>An Exploratory Study of the Business Strategies for Virtual Idols in The Era of Phygitalization</span>
            <br>
            <span class="info">Analysis in the perspective of cases in China</span>
            <br>
            <div class="writer">
              Han Han; Minling Lin*; Francesco Zurlo
              <div class="line"></div>
            </div>
          </div>
        </div>
        <div class="bookbox">
          <div class="book">
            <img src="../../assets/img/资源 25.png" alt="">
          </div>
          <div class="bookInfo">
            <span>审美符号:<br>
            数字时代的Burberry品牌设计转型</span>
            <br>
            <!-- <span class="info">From pedagogy of multiliterracies to design for brand consumer conmmunication</span> -->
            <br>
            <div class="writer">
              韩晗; 苏展
              <div class="line"></div>
            </div>
          </div>
        </div>
        <div class="bookbox">
          <div class="book">
            <img src="../../assets/img/资源 26.png" alt="">
          </div>
          <div class="bookInfo">
            <span>An Exploratory Study of the Mechanism of Sustainable Value Creation in the Luxury Fashion Industry</span>
            <br>
            <!-- <span class="info">From pedagogy of multiliterracies to design for brand consumer conmmunication</span> -->
            <br>
           <div class="writer">
              Yefei Yang; Han Han; Peter Lee
              <div class="line"></div>
            </div>
          </div>
        </div>
        <div class="bookbox">
          <div class="book">
            <img src="../../assets/img/资源 23.png" alt="">
          </div>
          <div class="bookInfo">
            <span>Acculturation of Brand</span>
            <br>
            <span class="info">Strategic Design for European Luxury Fashion Brands in China Consumer Market</span>
            <br>
            <div class="writer">
              Han Han
              <div class="line"></div>
            </div>
          </div>
        </div>
        <div class="bookbox">
          <div class="book">
            <img src="../../assets/img/资源 27.png" alt="">
          </div>
          <div class="bookInfo">
            <span>Handbags as Carriers of Selves / Identities</span>
            <br>
            <span class="info">An existential-phenomenological research approach for handbag design</span>
            <br>
            <div class="writer">
              Han Han; Wingsun Liu; Francesco Zurlo
              <div class="line"></div>
            </div>
          </div>
        </div>
        <div class="bookbox">
          <div class="book">
            <img src="../../assets/img/资源 24.png" alt="">
          </div>
          <div class="bookInfo">
            <span>品牌战略设计研究的新方法</span>
            <br>
            <span class="info">多元识读能力教学法对品牌设计策略的展示</span>
            <br>
            <div class="writer">
              Han Han; Francesco Zurlo
              <div class="line"></div>
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
  top: -14vh;
  left: 22vw;
  width: 70vw;
  height: 100vh;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
/* 每一格书 */
.rightmain .box .bookbox{
  width: 48%;
  height: 40%;
  display: flex;
  margin: 2vh 0vw;
  margin-left: 0;
  justify-content: space-between;
}

/* 书 */
.rightmain .box .bookbox .book {
  width: 14vw;
  height: 38vh;
}
.rightmain .box .bookbox .book img {
  width: 100%;
  height: 100%;
}
.rightmain .box .bookbox .bookInfo {
  width: 20vw;
  height: 14vh;
  margin-left: 2vw;
}
.rightmain .box .bookbox .bookInfo span:first-child{
  font-family: "Helvetica Neue";
  font-weight: bold;
  font-size: 21pt;
}
.rightmain .box .bookbox .bookInfo .info{
  font-family: "Helvetica Neue";
  color: gray;
  font-size: 16pt;
  display: block;
  margin-top: 1vh;
}
.rightmain .box .bookbox .bookInfo .writer{
  font-family: "Helvetica Neue";
  color: gray;
  font-size: 16pt;
  display: block;
  position: relative;
}
/* 线 */
.rightmain .box .bookbox .bookInfo .line {
  position: absolute;
  top: -2vh;
  left: 0vw;
  width: 20vw;
  height: 0.5vh;
  background-color: #43ff62;
}


</style>