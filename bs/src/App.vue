<template>
  <div id="app">
    <a
      href="JavaScript:;"
      style="
        color:#000
      "
      ><span ref="one" @click="changeColor()" class="likecolor">
        <i class="el-icon-orange"></i>
      </span>
    </a>
    <router-view />
  </div>
</template>

<script>
export default {
  data() {
    return {
      color: ["#d3d3d3", "#FFFAFA", "#FAF0E6"],
    };
  },
  created() {
    document
      .querySelector("body")
      .setAttribute("style", "background-color:#d3d3d3");//设置body的背景颜色
  },
  methods: {
    changeColor() {
      let ys = document
        .querySelector("body")
        .getAttribute("style", "background-color");//得到body的背景颜色
      var onRE = /#.*/;//通过正则去获取#bfa
      for (let i in this.color) {
        if (onRE.exec(ys) == this.color[i]) {
          i = Number(i);
          i += 1;
          document
            .querySelector("body")
            .setAttribute("style", "background-color:" + this.color[i]);//设置body的背景颜色
          if (i > 2) {
            document
              .querySelector("body")
              .setAttribute("style", "background-color:" + this.color[0]);
          }
        }
      }
    },
  },
};
</script>


<style lang="scss">
#app {
  $color: #2c3e50;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: $color;
  .likecolor {
    width: 40px;
    height: 40px;
    padding: 10px;
    border-radius: 50%;
    border: 1px solid;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: -4px -4px 12px rgb(255 255 255),
      4px 4px 12px rgb(121 130 160 / 75%);
    position: absolute;
    top: 5px;
    left: 1436px;
  }
}
* {
  // $bc: #d3d3d3;
  margin: 0;
  padding: 0;
  // background-color: $bc;
}
</style>
