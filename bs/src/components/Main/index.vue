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
        <ul v-for="(item, index) in list" :key="index">
          <div>
            <a
              href="#"
              ref="one"
              @mouseover="xianshi($refs.one[index])"
              @mouseleave="yincang($refs.one[index])"
              ><li>{{ item }} <i class="el-icon-arrow-right"></i></li
            ></a>
            <div v-if="index == 0" class="shigediv"><div-1></div-1></div>
            <div v-if="index == 1" class="shigediv"><div-2></div-2></div>
            <div v-if="index == 2" class="shigediv"><div-3></div-3></div>
            <div v-if="index == 3" class="shigediv"><div-4></div-4></div>
            <div v-if="index == 4" class="shigediv"><div-5></div-5></div>
            <div v-if="index == 5" class="shigediv"><div-6></div-6></div>
            <div v-if="index == 6" class="shigediv"><div-7></div-7></div>
            <div v-if="index == 7" class="shigediv"><div-8></div-8></div>
            <div v-if="index == 8" class="shigediv"><div-9></div-9></div>
            <div v-if="index == 9" class="shigediv"><div-10></div-10></div>
          </div>
        </ul>
      </div>
      <!-- <div class="lunboright">1231232</div> -->
      <!-- <div class="shigediv">
        <div ref="ling" class="ling">0</div>
        <div class="yi">1</div>
      </div> -->
    </div>
  </div>
</template>

<script>
import Div1 from "../shiGeDiv/div1.vue";
import Div2 from "../shiGeDiv/div2.vue";
import Div3 from "../shiGeDiv/div3.vue";
import Div4 from "../shiGeDiv/div4.vue";
import Div5 from "../shiGeDiv/div5.vue";
import Div6 from "../shiGeDiv/div6.vue";
import Div7 from "../shiGeDiv/div7.vue";
import Div8 from "../shiGeDiv/div8.vue";
import Div9 from "../shiGeDiv/div9.vue";
import Div10 from "../shiGeDiv/div10.vue";
export default {
  data() {
    return {
      url: "../../assets/lubo/",
      imgs: [ "55.jpg","44.png", "66.jpg", "77.jpg"],
      list: [
        "选项一",
        "选项二",
        "选项三",
        "选项四",
        "选项五",
        "选项六",
        "选项七",
        "选项八",
        "选项九",
        "选项十",
      ],
    };
  },
  methods: {
    xianshi(a) {
      a.setAttribute("class", "active");
    },
    yincang(a) {
      a.setAttribute("class", "");
    },
  },
  components: {
    Div1,
    Div2,
    Div3,
    Div4,
    Div5,
    Div6,
    Div7,
    Div8,
    Div9,
    Div10,
  },
};
</script>

<style lang="scss">
.active {
  display: block;
}
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
    opacity: 0.5;
    border-radius: 10px 0 0 10px;
    a{
          text-decoration: none;
          color: #000;
      }
    li {
      padding: 0 30px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 234px;
      height: 42px;
      box-sizing: border-box;
      border-radius: 10px;
      list-style: none;
    }
    li:hover {
      background-color: #fffafa;
    }
    ul > div:hover .shigediv {
      display: block;
    }
    .shigediv {
      position: absolute;
      top: 0;
      right: -1026px;
      z-index: 5;
      color: #000;
      width: 1026px;
      height: 460px;
      box-sizing: border-box;
      background-color: #fffafa;
      opacity: 0.5;
      border-radius: 0 10px 10px 0;
      display: none;
    }
  }
  //   .lunboleft:hover + .lunboright {
  //     //这里解决了hover元素让其兄弟元素出现的问题 ---切记要加+号
  //     display: block;
  //     background-color: #d3d3d3;
  //   }

  //   .lunboall:hover .lunboright {
  //     //用一个div把两个元素包起来再用div:hover 这样就可以显示lunboright啦！！！
  //     display: block;
  //     background-color: #d3d3d3;
  //   }

  //   .lunboright {
  //     position: absolute;
  //     top: 0;
  //     right: 0;
  //     z-index: 5;
  //     width: 1026px;
  //     height: 460px;
  //     box-sizing: border-box;
  //     opacity: 0.5;
  //     border-radius: 0 10px 10px 0;
  //     display: none;
  //   }
}
</style>