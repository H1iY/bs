<template>
  <div class="main">
    <div class="block">
      <el-carousel trigger="click" height="460px">
        <el-carousel-item v-for="item in imgs" :key="item">
          <!-- 而require里的正确的格式必须是path -->
          <!-- 此步是一个坑，需要记住 -->
          <!-- 可百度 VUE中的img的:src动态加载图片的问题,require也不能随便用 -->
          <img :src="require('../../assets/lubo/' + item)" alt="" />
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="lunboall">
      <div class="lunboleft">
        <ul>
          <a href="#"><li>1</li></a>
          <a href="#"><li>2</li></a>
          <a href="#"><li>3</li></a>
          <a href="#"><li>4</li></a>
          <a href="#"><li>5</li></a>
          <a href="#"><li>6</li></a>
          <a href="#"><li>7</li></a>
          <a href="#"><li>8</li></a>
          <a href="#"><li>9</li></a>
          <a href="#"><li>10</li></a>
        </ul>
      </div>
      <div class="lunboright">1231232</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      url: "../../assets/lubo/",
      imgs: ["44.png", "55.jpg", "66.jpg", "77.jpg"],
    };
  },
};
</script>

<style lang="scss">
.main {
  position: relative;
  top: 8px;
  width: 1260px;
  margin: 0 auto;
  border-radius: 10px;
  box-shadow: -4px -4px 12px rgb(255 255 255),
    4px 4px 12px rgb(121 130 160 / 75%);
  .el-carousel {
    border-radius: 10px;
    .el-carousel__arrow--left {
      left: 234px;
    }
    .el-carousel__arrow {
      width: 60px;
      height: 60px;
      font-size: 25px;
    }
    .el-carousel__indicators--horizontal {
      bottom: 0;
      left: 80%;
      transform: translateX(-50%);
    }
  }

  .lunboleft {
    position: absolute;
    top: 0;
    z-index: 5;
    padding: 20px 0;
    background-color: #d3d3d3;
    opacity: 0.7;
    border-radius: 10px 0 0 10px;
    li {
      width: 234px;
      height: 42px;
      box-sizing: border-box;
      border-radius: 10px;
      list-style: none;
    }
    li:hover {
      background-color: #bfa;
    }
  }
//   .lunboleft:hover + .lunboright {
//     //这里解决了hover元素让其兄弟元素出现的问题 ---切记要加+号
//     display: block;
//     background-color: #d3d3d3;
//   }
  .lunboall:hover .lunboright {  //用一个div把两个元素包起来再用div:hover 这样就可以显示lunboright啦！！！
    display: block;  
    background-color: #d3d3d3;
  }
  .lunboright {
    position: absolute;
    top: 0;
    right: 0;
    z-index: 5;
    width: 1026px;
    height: 460px;
    box-sizing: border-box;
    opacity: 0.7;
    border-radius: 0 10px 10px 0;
    display: none;
  }
}
</style>